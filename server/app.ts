import express from "express"
import fs from "fs"
import photos from "./db/photos.js"
import userRoutes from "./routes/userRoutes.js"
import photoRoutes from "./routes/photoRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"
// import routes from "./routes.js"
import { requestLogger, globalError } from "./middleware/middleware.js"

// setup
const app = express()

// mw
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(requestLogger)

// view engine
app.engine("html", (path, options, cb) => {
	fs.readFile(path, options, (err, data) => {
		if (err) return cb(err)

		let imgs = ""
		photos.forEach(photo => imgs += `<img src="${photo.src}" alt="${photo.alt}"></img><br>`)
		
		let render = data.toString().replace("#imgs#", imgs)
		
		return cb(null, render)
	})
})

app.set("views", "./views")
app.set("view engine", "html")
app.use(express.static("views/styles"))

// routes
app.use("/users", userRoutes)
app.use("/api/photos", photoRoutes)
app.use("/api/comments", commentRoutes)

app.get("/login", (rq, rs) => {
	rs.render("login")
})

app.get("/login/invalid", (rq, rs) => {
	rs.render("invalidLogin")
})

app.get("/register", (rq, rs) => {
	rs.render("register")
})

app.get("/register/invalid", (rq, rs) => {
	rs.render("invalidRegister")
})

app.get("/photos", (rq, rs) => {
	rs.render("photos")
})

// err mw
app.use(globalError)

// listener
app.listen(3000, () => {
	console.log("Server running on port 3000")
})