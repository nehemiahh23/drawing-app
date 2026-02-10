# Mongoose + Express Application
## Per Scholas Module 319 SBA
<!-- TODO: Separation of posts and drawings -->
<!-- TODO: Add session functionality -->
<!-- TODO: Add auth functionality -->

An API and database that stores data for a full-stack social drawing app. Uses a MongoDB document database to store data for users, drawings, and post comments.

## Setup
1. Navigate to the ``/server`` folder.
2. Run ``npm install`` to install dependencies.
3. Run ``npm start``.
	- For live code updating, run ``npm run dev`` instead.

<!-- ## Usage -->

## Technologies Used
- TypeScript
- Node.js
- Express
- MongoDB/Mongoose
- [Fly.io](https://fly.io/) (didnt get to it)
- [Go-Fast CDN](https://github.com/kevinanielsen/go-fast-cdn) (didnt get to it)

## API Routes
| Method | Path | Description |
| --- | --- | --- |
| POST | /users | Creates a user. Username and email must be unique. |
| PUT | /users/:id | Edit the given users username and/or password. |
| DELETE | /users/:id | Deletes the selected user. |
| GET | /api/drawings | Returns all drawings. Can also return a specific image by `/:id` parameter. |
| POST | /api/drawings | Create new drawing. Title must be unique. User ID is currently a set placeholder value. |
| DELETE | /api/drawings/:id | Delete the selected drawing |
| GET | /api/comments/post/:drawing_id | Get the comments associated with the `/:drawing_id`. |
| POST | /api/comments/post/:drawing_id | Post a new comment under the `/:drawing_id`. |
| DELETE | /api/comments/:id | Delete the selected comment. User ID is currently a set placeholder value. |