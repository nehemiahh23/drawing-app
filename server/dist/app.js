import express from "express";
import "dotenv/config";
import connect from "./db/conn.js";
import userRoutes from "./routes/userRoutes.js";
import drawingRoutes from "./routes/drawingRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import { drawings, users, comments } from "./utils/seed.js";
import Drawing from "./models/drawingSchema.js";
import User from "./models/userSchema.js";
import Comment from "./models/commentSchema.js";
import { requestLogger, globalError } from "./middleware/middleware.js";
// setup
const app = express();
const PORT = process.env.SERVER_PORT || 3001;
connect();
// mw
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requestLogger);
// routes
app.use("/users", userRoutes);
app.use("/api/drawings", drawingRoutes);
app.use("/api/comments", commentRoutes);
app.route("/seed")
    .post(async (rq, rs) => {
    await Drawing.deleteMany({});
    await User.deleteMany({});
    await Comment.deleteMany({});
    await Drawing.insertMany(drawings);
    await User.insertMany(users);
    await Comment.insertMany(comments);
    rs.json("Seeded database.");
});
// err mw
app.use(globalError);
// listener
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
//# sourceMappingURL=app.js.map