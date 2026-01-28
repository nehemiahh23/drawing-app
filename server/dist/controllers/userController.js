import users from "../db/users.js";
export function getUser(rq, rs) {
    const username = rq.query.username;
    const password = rq.query.password;
    if (!username || !password) {
        rs.redirect("/login/invalid");
        return;
    }
    const user = users.find(user => user.username === username);
    if (user) {
        if (password !== user.password) {
            rs.redirect("/login/invalid");
            return;
        }
        rs.redirect("/photos");
    }
    else {
        // rs.status(400).json({ error: "User does not exist." })
        rs.redirect("/login/invalid");
        return;
    }
}
export function createUser(rq, rs) {
    const { username, password } = rq.body;
    const lastUser = users.at(-1);
    const i = lastUser ? lastUser.id + 1 : 1;
    if (users.find((user) => user.username === username)) {
        // rs.status(409).json({ error: "User already exists with that username." })
        rs.redirect("/register/invalid");
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
        rs.redirect("/photos");
    }
    else {
        // rs.status(400).json({ error: "Insufficient data to create resource." })
        rs.redirect("/register/invalid");
        return;
    }
}
export function editUser(rq, rs) {
    const { username, password } = rq.body;
    const user = users.find(user => user.id === Number(rq.params.id));
    if (!user) {
        rs.status(400).json({ error: "User does not exist." });
        return;
    }
    if (user.username === username) {
        rs.status(304).json({ error: "Username not modified." });
        return;
    }
    if (users.find((user) => user.username === username)) {
        rs.status(409).json({ error: "User already exists with that username." });
        return;
    }
    if (username && !password) {
        user.username = username;
        rs.json(user);
    }
    else if (password && !username) { // separate for validation/encryption purposes
        user.password = password;
        rs.json(user);
    }
    else {
        rs.status(400).json({ error: "Invalid data to update resource." });
    }
}
export function deleteUser(rq, rs) {
    const user = users.find((user, i) => {
        if (user.id === Number(rq.params.id)) {
            return users.splice(i, 1);
        }
    });
    user ? rs.json(user) : rs.status(400).json({ error: "User does not exist." });
}
//# sourceMappingURL=userController.js.map