import { initialLoad } from "./routes.js";
let page_url = "https://api.pexels.com/v1/curated?per_page=12";
const photos = await initialLoad(page_url);
export default photos;
//# sourceMappingURL=app.js.map