import User from "../models/userSchema.js";
export async function editUser(rq, rs) {
    if (!rq.params.id) {
        return rs.status(400).json({ error: "Must specify an id parameter to update." });
    }
    const payload = rq.payload;
    if (rq.params.id !== payload.user.id) {
        return rs.status(401).json({ error: "Not authorized to update resource." });
    }
    let target = await User.findByIdAndUpdate(rq.params.id, rq.body);
    target = await User.findById(rq.params.id);
    if (!target) {
        rs.status(404).json({ error: "Requested user not found." });
    }
    else {
        rs.json(target);
    }
}
export async function deleteUser(rq, rs) {
    if (!rq.params.id) {
        rs.status(400).json({ error: "Must specify an id parameter to delete." });
    }
    const payload = rq.payload;
    if (rq.params.id !== payload.user.id) {
        return rs.status(401).json({ error: "Not authorized to delete resource." });
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