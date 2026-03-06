import "dotenv/config"
import express from "express"
import connect from "./db/conn.js"
import cloudConnect from "./db/cloudConn.js"
import userRoutes from "./routes/userRoutes.js"
import drawingRoutes from "./routes/drawingRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import * as authController from "./controllers/authController.js"
import { check } from "express-validator"
import { requestLogger, globalError } from "./middleware/loggingMiddleware.js"
import { drawings, users, comments, posts } from "./utils/seed.js"
import Drawing from "./models/drawingSchema.js"
import User from "./models/userSchema.js"
import Comment from "./models/commentSchema.js"
import Post from "./models/postSchema.js"

// setup
const app = express()
const PORT = process.env.SERVER_PORT || 3001
connect()
cloudConnect()


// mw
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(requestLogger)

// routes
// TODO: Add lean() to all appropriate GET routes
app.use("/users", userRoutes)
app.use("/api/drawings", drawingRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/posts", postRoutes)

app.route("/login")
.post([
	check("email")
	.notEmpty().withMessage("E-mail required.")
	.isEmail().withMessage("Please input a valid e-mail address."),
	check("password")
		.notEmpty().withMessage("Please input a password.")
], authController.login)

app.route("/seed")
.post(async (rq, rs) => {
	await Drawing.deleteMany({})
	await User.deleteMany({})
	await Comment.deleteMany({})
	await Post.deleteMany({})

	await Drawing.insertMany(drawings)
	await User.insertMany(users)
	await Comment.insertMany(comments)
	await Post.insertMany(posts)

	rs.json("Seeded database.")
})

// err mw
app.use(globalError)

// listener
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`)
})