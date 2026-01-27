import express from "express"
import type { User } from "../types/types.js"
import users from "../db/users.js"

const router = express.Router()

router.route("/")
.post((rq, rs) => {
	const { username, password } = rq.body
	const lastUser: User = users.at(-1) as User
	const i: number = lastUser ? lastUser.id + 1 : 1

	if (users.find((user) => user.username === username)) {
		rs.status(409).json({ error: "User already exists with that username." })
		return
	}

	if (username && password) {
		const newUser: User = {
			id: i,
			username: username,
			password: password,
			favorites: []
		}
		users.push(newUser)
		rs.json(users)	
	} else {
		rs.status(400).json({ error: "Insufficient data to create resource." })
	}
})
.patch((rq, rs) => {
	
})
.delete((rq, rs) => {
	
})

export default router