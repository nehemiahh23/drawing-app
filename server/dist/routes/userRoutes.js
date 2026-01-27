import express from "express";
import users from "../db/users.js";
const router = express.Router();
router.route("/")
    .post((rq, rs) => {
    const { username, password } = rq.body;
    const lastUser = users.at(-1);
    const i = lastUser ? lastUser.id + 1 : 1;
    if (users.find((user) => user.username === username)) {
        rs.status(409).json({ error: "User already exists with that username." });
        return;
    }
    if (username && password) {
        const newUser = {
            id: i,
            username: username,
            password: password,
            favorites: []
        };
        users.push(newUser);
        rs.json(users);
    }
    else {
        rs.status(400).json({ error: "Insufficient data to create resource." });
    }
})
    .patch((rq, rs) => {
})
    .delete((rq, rs) => {
});
export default router;
//# sourceMappingURL=userRoutes.js.map