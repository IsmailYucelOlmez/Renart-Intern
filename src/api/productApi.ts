import { useQuery } from "@tanstack/react-query";

export type Filter = {

    price:{
        min: number;
        max: number;
    },
    popularityScore:{
        min: number;
        max: number;
    },
}

export const useGetProducts = ({filter}: {filter: Filter}) => {

    const getProductsRequest = async () => {
        const response = await fetch("https://api.example.com/products");

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