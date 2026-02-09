import express from "express"
import "dotenv/config"
import connect from "./db/conn.js"
import userRoutes from "./routes/userRoutes.js"
import drawingRoutes from "./routes/drawingRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"
import { requestLogger, globalError } from "./middleware/middleware.js"

// setup
const app = express()
const PORT = process.env.SERVER_PORT || 3001
connect()

// mw
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(requestLogger)

// routes
// app.use("/users", userRoutes)
app.use("/api/drawings", drawingRoutes)
// app.use("/api/comments", commentRoutes)

// err mw
app.use(globalError)

// listener
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`)
})