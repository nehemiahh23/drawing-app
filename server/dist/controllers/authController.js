import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";
export async function register(rq, rs) {
    const errors = validationResult(rq);
    if (!errors.isEmpty()) {
        return rs.status(400).json({ errors: errors.array() });
    }
    const { email, username, password } = rq.body;
    if (email && username && password) {
        const JWT_SECRET = process.env.JWT_SECRET;
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
    else {
        rs.status(400).json({ error: "Insufficient data to create resource." });
    }
}
export async function login(rq, rs) {
    const errors = validationResult(rq);
    if (!errors.isEmpty()) {
        return;
    }
    const { username, password } = rq.body;
}
//# sourceMappingURL=authController.js.map