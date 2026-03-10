import type { AuthRequest } from "../middleware/authMiddleware.js";
import type { Request, Response } from "express";
import "dotenv/config";
export declare function getUsers(rq: Request, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getSelf(rq: AuthRequest, rs: Response): Promise<void>;
export declare function getDrawings(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function editUser(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteUser(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=userController.d.ts.map