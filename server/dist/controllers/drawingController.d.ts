import type { AuthRequest } from "../middleware/authMiddleware.js";
import type { Request, Response } from "express";
import "dotenv/config";
export declare function getDrawings(rq: Request, rs: Response): Promise<void>;
export declare function createDrawing(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function editDrawing(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteDrawing(rq: AuthRequest, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=drawingController.d.ts.map