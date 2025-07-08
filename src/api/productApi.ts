import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const useGetProducts = ({filter}: {filter: Filter}) => {

    const getProductsRequest = async () => {       

        const queryString = `?minPrice=${filter.price.min}&maxPrice=${filter.price.max}&minPopularity=${filter.popularityScore.min}&maxPopularity=${filter.popularityScore.max}`;
        
        const response = await fetch(`${API_URL}/api/products${queryString}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("API returned non-JSON response. Check if the server is running and the endpoint is correct.");
        }

        return response.json();
    }

    const {data, isLoading, error} = useQuery({
        queryKey: ["products", filter],
        queryFn: getProductsRequest,
    })

    // Compute max price from products
    const maxPrice = data && data.length > 0 
        ? Math.max(...data.map((product: Product) => product.price.toFixed(2) || 0))
        : filter.price.max;

    return {data, isLoading, error, maxPrice}
}