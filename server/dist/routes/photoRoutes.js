import express from "express";
import photos from "../db/photos.js";
const router = express.Router();
router.route("/")
    .get((_rq, rs) => {
    rs.json(photos);
})
    .post((rq, rs) => {
    // should check user session before anything
    const { src, alt } = rq.body;
    const lastPhoto = photos.at(-1);
    const i = lastPhoto ? lastPhoto.id + 1 : 1;
    if (src && alt) {
        const newPhoto = {
            id: i,
            src: src,
            url: src,
            alt: alt,
            author: 0 // currently logged in user id
        };
        photos.push(newPhoto);
        rs.json(photos);
    }
    else {
        rs.status(400).json({ error: "Insufficient data to create resource." });
    }
});
router.route("/:id")
    .delete((rq, rs) => {
    const photo = photos.find((photo, i) => {
        if (photo.id === Number(rq.params.id)) {
            return photos.splice(i, 1);
        }
    });
    photo ? rs.json(photo) : rs.status(400).json({ error: "Photo does not exist." });
});
export default router;
//# sourceMappingURL=photoRoutes.js.map