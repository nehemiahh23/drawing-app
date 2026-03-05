import type { AuthRequest } from "../middleware/authMiddleware.js";
import type { Request, Response } from "express";
import "dotenv/config";
export declare function getPosts(rq: Request, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function createPost(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function editPost(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deletePost(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=postController.d.ts.map