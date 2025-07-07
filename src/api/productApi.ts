import { useQuery } from "@tanstack/react-query";



export const useGetProducts = ({filter}: {filter: Filter}) => {

    const getProductsRequest = async () => {       

        const queryString = `?minPrice=${filter.price.min}&maxPrice=${filter.price.max}&minPopularity=${filter.popularityScore.min}&maxPopularity=${filter.popularityScore.max}`;
        
        const response = await fetch(`http://localhost:3000/api/products${queryString}`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    }

    const {data, isLoading, error} = useQuery({
        queryKey: ["products", filter],
        queryFn: getProductsRequest,
    })

    return {data, isLoading, error}
}