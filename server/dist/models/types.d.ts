export interface Drawing {
    src: string;
    userId: string | number;
    title: string;
    likes: number;
    commentIds: number[];
}
export interface User {
    username: string;
    password: string;
    favorites: Drawing[];
}
export interface Comment {
    userId: number;
    drawingId: number;
    content: string;
}
//# sourceMappingURL=types.d.ts.map