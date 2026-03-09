export declare const drawings: {
    _id: string;
    src: string;
    userId: string;
    title: string;
    locked: boolean;
}[];
export declare const users: {
    _id: string;
    email: string;
    username: string;
    password: string;
    likes: never[];
}[];
export declare const posts: {
    _id: string;
    userId: string;
    username: string;
    drawingId: string;
    src: string;
    title: string;
    likes: number;
    commentIds: string[];
}[];
export declare const comments: {
    _id: string;
    userId: string;
    postId: string;
    content: string;
}[];
//# sourceMappingURL=seed.d.ts.map