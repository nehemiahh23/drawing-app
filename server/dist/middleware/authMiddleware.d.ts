import type { Request, Response, NextFunction } from "express";
import type { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
export interface AuthRequest extends Request {
    token: string | JwtPayload;
}
declare function auth(rq: AuthRequest, rs: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export default auth;
//# sourceMappingURL=authMiddleware.d.ts.map