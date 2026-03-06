import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import "dotenv/config";
const JWT_SECRET = process.env.JWT_SECRET;
// belongs on private routes
const auth = async (rq, rs, next) => {
    const token = rq.header('x-auth-token');
    if (!token) {
        return rs.status(401).json({ msg: "No token provided." });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        rq.payload = decoded;
        if (!await User.findById(rq.payload.user.id)) {
            return rs.status(404).json({ error: "User does not exist." });
        }
        next();
    }
    catch (err) {
        return rs.status(401).json({ error: "Invalid token." });
    }
};
export default auth;
//# sourceMappingURL=authMiddleware.js.map