import mongoose from "mongoose";
import type { IDrawing } from "./types.js";
declare const _default: mongoose.Model<IDrawing, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IDrawing, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IDrawing & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<IDrawing, mongoose.Model<IDrawing, any, any, any, (mongoose.Document<unknown, any, IDrawing, any, mongoose.DefaultSchemaOptions> & IDrawing & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, IDrawing, any, mongoose.DefaultSchemaOptions> & IDrawing & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, IDrawing>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IDrawing, mongoose.Document<unknown, {}, IDrawing, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IDrawing & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    src?: mongoose.SchemaDefinitionProperty<string, IDrawing, mongoose.Document<unknown, {}, IDrawing, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IDrawing & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userId?: mongoose.SchemaDefinitionProperty<string, IDrawing, mongoose.Document<unknown, {}, IDrawing, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IDrawing & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    title?: mongoose.SchemaDefinitionProperty<string, IDrawing, mongoose.Document<unknown, {}, IDrawing, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IDrawing & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    likes?: mongoose.SchemaDefinitionProperty<number, IDrawing, mongoose.Document<unknown, {}, IDrawing, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IDrawing & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    commentIds?: mongoose.SchemaDefinitionProperty<string[], IDrawing, mongoose.Document<unknown, {}, IDrawing, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IDrawing & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IDrawing>, IDrawing>;
export default _default;
//# sourceMappingURL=drawingSchema.d.ts.map