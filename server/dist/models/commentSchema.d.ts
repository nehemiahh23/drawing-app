import mongoose from "mongoose";
import type { IComment } from "./types.js";
declare const _default: mongoose.Model<IComment, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IComment, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IComment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<IComment, mongoose.Model<IComment, any, any, any, (mongoose.Document<unknown, any, IComment, any, mongoose.DefaultSchemaOptions> & IComment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, IComment, any, mongoose.DefaultSchemaOptions> & IComment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, IComment>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IComment, mongoose.Document<unknown, {}, IComment, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IComment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: mongoose.SchemaDefinitionProperty<string, IComment, mongoose.Document<unknown, {}, IComment, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IComment & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    drawingId?: mongoose.SchemaDefinitionProperty<string, IComment, mongoose.Document<unknown, {}, IComment, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IComment & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    content?: mongoose.SchemaDefinitionProperty<string, IComment, mongoose.Document<unknown, {}, IComment, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IComment & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IComment>, IComment>;
export default _default;
//# sourceMappingURL=commentSchema.d.ts.map