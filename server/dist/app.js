import express from "express";
import fs from "fs";
import userRoutes from "./routes/userRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
// import routes from "./routes.js"
import { requestLogger, globalError } from "./middleware/middleware.js";
// setup
const app = express();
// mw
app.use(express.json());
app.use(requestLogger);
// view engine
app.engine("html", (path, options, cb) => {
    fs.readFile(path, options, (err, data) => {
        if (err)
            return cb(err);
        let render = data.toString();
        return cb(null, render);
    });
});
app.set("views", "./views");
app.set("view engine", "html");
app.use(express.static("views/styles"));
// routes
app.use("/users", userRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/comments", commentRoutes);
app.get("/login", (rq, rs) => {
    rs.render("index", {});
});
// err mw
app.use(globalError);
// listener
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=app.js.map