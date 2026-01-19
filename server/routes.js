import "dotenv/config";
const API_KEY = process.env.PEXELS_KEY;
export async function initialLoad(page_url) {
    const results = [];
    const response = await fetch(page_url, { headers: new Headers({ "Authorization": API_KEY }) });
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
    page_url = data.next_page;
    return results;
}
//# sourceMappingURL=routes.js.map