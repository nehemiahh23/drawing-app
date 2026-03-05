import type { RequestHandler, Request } from "express";
import type { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
export interface AuthRequest extends Request {
    payload?: string | JwtPayload;
}
declare const auth: RequestHandler;
export default auth;
//# sourceMappingURL=authMiddleware.d.ts.map