import express from "express"
import type { User } from "../types/types.js"
import users from "../db/users.js"

const router = express.Router()

router.route("/")
.get((rq, rs) => {
	if (rq.query.id) {
		const user = users.find(user => user.id === Number(rq.query.id))
		user ? rs.json(user) : rs.status(400).json({ error: "User does not exist." })
	} else {
		rs.status(403).json({ error: "Forbidden resource." })
	}
})
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

router.route("/:id")
.patch((rq, rs) => {
	const { username, password } = rq.body
	const user: User = users.find(user => user.id === Number(rq.params.id)) as User

	if (!user) {
		console.log(user)
		rs.status(400).json({ error: "User does not exist." })
		return
	}
	
	if (user.username === username) {
		rs.status(304).json({ error: "Username not modified." })
		return
	}
	
	if (users.find((user) => user.username === username)) {
		rs.status(409).json({ error: "User already exists with that username." })
		return
	}

	if (username && !password) {
		user.username = username
		rs.json(user)
	} else if (password && !username) { // separate for validation/encryption purposes
		user.password = password
		rs.json(user)
	} else {
		rs.status(400).json({ error: "Invalid data to update resource." })
	}
})
.delete((rq, rs) => {
	const user: User = users.find((user, i) => {
		if (user.id === Number(rq.params.id)) {
			return users.splice(i, 1)
		}
	}) as User

	user ? rs.json(user) : rs.status(400).json({ error: "User does not exist." })
})

export default router