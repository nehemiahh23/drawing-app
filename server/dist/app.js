import express from "express";
import routes from "./routes.js";
// setup
const app = express();
// mw
// view engine
// routes
routes(app);
// err mw
// listener
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=app.js.map