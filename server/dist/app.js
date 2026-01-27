import express from "express";
import userRoutes from "./routes/userRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import routes from "./routes.js";
import { requestLogger } from "./middleware/middleware.js";
// setup
const app = express();
// mw
app.use(express.json());
app.use(requestLogger);
// view engine
// routes
app.use("/api/users", userRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/comments", commentRoutes);
// err mw
// listener
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=app.js.map