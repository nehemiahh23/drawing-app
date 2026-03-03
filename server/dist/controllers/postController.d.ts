import type { Request, Response } from "express";
import "dotenv/config";
export declare function getPosts(rq: Request, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function createPost(rq: Request, rs: Response): Promise<void>;
export declare function editPost(rq: Request, rs: Response): Promise<void>;
export declare function deletePost(rq: Request, rs: Response): Promise<void>;
//# sourceMappingURL=postController.d.ts.map