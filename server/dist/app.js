import express from "express";
import "dotenv/config";
import connect from "./db/conn.js";
import userRoutes from "./routes/userRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
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
app.use("/api/photos", photoRoutes);
app.use("/api/comments", commentRoutes);
app.get("/login", (rq, rs) => {
    rs.render("login");
});
app.get("/login/invalid", (rq, rs) => {
    rs.render("invalidLogin");
});
app.get("/register", (rq, rs) => {
    rs.render("register");
});
app.get("/register/invalid", (rq, rs) => {
    rs.render("invalidRegister");
});
app.get("/photos", (rq, rs) => {
    rs.render("photos");
});
// err mw
app.use(globalError);
// listener
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
//# sourceMappingURL=app.js.map