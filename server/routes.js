import { initialLoad } from "./functions.js";
const cache = [];
let page_url = "https://api.pexels.com/v1/curated?page=1&per_page=12";
let page = 1;
export default function routes(app) {
    app.get("/curated", async (rq, rs) => {
        if (cache[0]) {
            rs.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
            rs.send(cache[0]);
        }
        else {
            const data = await initialLoad(page_url);
            rs.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
            rs.send(data[0]);
            cache.push(data[0]);
        }
    });
}
//# sourceMappingURL=routes.js.map