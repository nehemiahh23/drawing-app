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
export interface User {
    id: Number;
    username: String;
    password: String;
    favorites: Photo[];
}
export interface Comment {
    id: Number;
    userId: Number;
    content: String;
}
//# sourceMappingURL=types.d.ts.map