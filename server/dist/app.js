import express from "express";
import routes from "./routes.js";
const app = express();
routes(app);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=app.js.map