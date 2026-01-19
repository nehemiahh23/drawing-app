import "dotenv/config";
const API_KEY = process.env.PEXELS_KEY;
let nextPage = "https://api.pexels.com/v1/curated?per_page=3";
export async function initialLoad() {
    const results = [];
    // TODO: ADD HEADERS AND CATCH CANCER AGAIN
    const response = await fetch(nextPage, { headers: new Headers({ "Authorization": API_KEY }) });
    if (!response.ok) {
        throw new Error(`API call responded with ${response.statusText}`);
    }
    const data = await response.json();
    data.photos.forEach(photo => {
        const newPhoto = {
            id: photo.id,
            src: photo.src.original,
            url: photo.url,
            author: photo.photographer
        };
        results.push(newPhoto);
    });
    nextPage = data.next_page;
    console.log(results);
    return results;
}
//# sourceMappingURL=routes.js.map