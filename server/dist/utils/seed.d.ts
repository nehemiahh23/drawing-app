export declare const drawings: {
    _id: string;
    src: string;
    userId: string;
    title: string;
    likes: number;
    commentIds: string[];
}[];
export declare const users: {
    email: string;
    username: string;
    password: string;
    likes: never[];
}[];
export declare const comments: {
    _id: string;
    userId: string;
    drawingId: string;
    content: string;
}[];
//# sourceMappingURL=seed.d.ts.map