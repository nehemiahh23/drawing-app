import { loadPhotos } from "./functions.js";
import "dotenv/config";
const PORT = process.env.FE_PORT;
const photoCache = [];
let pageUrl = "https://api.pexels.com/v1/curated?page=1&per_page=12";
let page = 0;
export default function routes(app) {
    app.get("/", async (rq, rs) => {
        page = 0;
        if (photoCache[0]) {
            console.log(page);
            rs.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
            rs.send(photoCache[0]);
        }
        else {
            console.log(page);
            const data = await loadPhotos(`https://api.pexels.com/v1/curated?page=${page + 1}&per_page=12`);
            rs.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
            rs.send(data[0]);
            photoCache.push(data[0]);
        }
    });
    app.get("/next", async (rq, rs) => {
        page++;
        if (photoCache[page + 1]) {
            console.log(page);
            rs.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
            rs.send(photoCache[page]);
        }
        else {
            console.log(page);
            const data = await loadPhotos(`https://api.pexels.com/v1/curated?page=${page + 1}&per_page=12`);
            rs.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
            rs.send(data[0]);
            photoCache.push(data[0]);
        }
    });
    app.get("/prev", async (rq, rs) => {
        if (photoCache[page - 1]) {
            page--;
            console.log(page);
            rs.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
            rs.send(photoCache[page]);
        }
        else {
            console.log(page);
            rs.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
            rs.status(400).send({
                message: "Page number is out of bounds!"
            });
        }
    });
}
//# sourceMappingURL=routes.js.map