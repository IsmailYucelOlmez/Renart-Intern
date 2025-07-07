declare interface Product {
    name: string;
    price: number;
    popularityScore: number;
    weight: number;
    images: {
        yellow: string;
        rose: string;
        white: string;
    };
}

declare interface Filter {

    price:{
        min: number;
        max: number;
    },
    popularityScore:{
        min: number;
        max: number;
    },
}