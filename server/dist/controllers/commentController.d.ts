import type { AuthRequest } from "../middleware/authMiddleware.js";
import type { Request, Response } from "express";
export declare function deleteComment(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getPostComments(rq: Request, rs: Response): Promise<void>;
export declare function createComment(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=commentController.d.ts.map