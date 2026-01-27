export interface Photo {
    id: Number;
    src: String;
    url: String;
    author: String;
    alt: String;
}
export interface PhotoResponse {
    page: number;
    per_page: number;
    photos: Array<{
        id: number;
        src: {
            original: string;
        };
        url: string;
        photographer: string;
        alt: string;
    }>;
    total_results: number;
    next_page: string;
}
//# sourceMappingURL=types.d.ts.map