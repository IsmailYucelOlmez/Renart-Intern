declare interface Product {
    name: string;
    price?: number;
    popularityScore: number;
    weight: number;
    images: {
        yellow: string;
        rose: string;
        white: string;
    };
}