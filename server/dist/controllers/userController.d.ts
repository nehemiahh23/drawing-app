import type { AuthRequest } from "../middleware/authMiddleware.js";
import type { Response } from "express";
export declare function editUser(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteUser(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=userController.d.ts.map