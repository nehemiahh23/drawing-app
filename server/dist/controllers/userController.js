import User from "../models/userSchema.js";
export async function createUser(rq, rs) {
    const { email, username, password } = rq.body;
    if (email && username && password) {
        const newUser = await User.create({
            email: email,
            username: username,
            password: password
        });
        rs.json(newUser);
        // sign in
    }
    else {
        rs.status(400).json({ error: "Insufficient data to create resource." });
    }
}
export async function editUser(rq, rs) {
    if (!rq.params.id) {
        rs.status(400).json({ error: "Must specify an id parameter to update." });
    }
    else {
        let target = await User.findByIdAndUpdate(rq.params.id, rq.body);
        target = await User.findById(rq.params.id);
        if (!target) {
            rs.status(404).json({ error: "Requested user not found." });
        }
        else {
            rs.json(target);
        }
    }
}
export async function deleteUser(rq, rs) {
    if (!rq.params.id) {
        rs.status(400).json({ error: "Must specify an id parameter to delete." });
    }
    else {
        const target = await User.findByIdAndDelete(rq.params.id);
        if (!target) {
            rs.status(404).json({ error: "Requested user not found." });
        }
        else {
            rs.json(target);
        }
    }
}
//# sourceMappingURL=userController.js.map