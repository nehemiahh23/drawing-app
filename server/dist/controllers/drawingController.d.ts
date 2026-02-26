import type { Request, Response } from "express";
import "dotenv/config";
export declare function getDrawings(rq: Request, rs: Response): Promise<void>;
export declare function createDrawing(rq: Request, rs: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteDrawing(rq: Request, rs: Response): Promise<void>;
//# sourceMappingURL=drawingController.d.ts.map