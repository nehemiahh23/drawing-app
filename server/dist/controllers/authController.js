import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";
const JWT_SECRET = process.env.JWT_SECRET;
export async function register(rq, rs) {
    const errors = validationResult(rq);
    if (!errors.isEmpty()) {
        return rs.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, username, password } = rq.body;
        const newUser = await User.create({
            email: email,
            username: username,
            password: password
        });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        const payload = {
            user: {
                id: newUser.id
            }
        };
        jwt.sign(payload, JWT_SECRET, { expiresIn: 7200000 }, (err, token) => {
            if (err) {
                throw err;
            }
            rs.json({ token });
        });
    }
    catch (err) {
        rs.status(400).json(err);
    }
}
// TODO: login w/username or email
export async function login(rq, rs) {
    const errors = validationResult(rq);
    if (!errors.isEmpty()) {
        return rs.status(400).json({ errors: errors.array() });
    }
    const { username, password } = rq.body;
    try {
        let user = await User.findOne({ username: username });
        if (!user) {
            return rs.status(400).json({ errors: [{ msg: "Invalid credentials." }] });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return rs.status(400).json({ errors: [{ msg: "Invalid credentials." }] });
        }
        const payload = {
            user: {
                id: user._id
            }
        };
        jwt.sign(payload, JWT_SECRET, { expiresIn: 7200000 }, (err, token) => {
            if (err) {
                throw err;
            }
            rs.json({ token });
        });
    }
    catch (err) {
        rs.status(400).json(err);
    }
}
//# sourceMappingURL=authController.js.map