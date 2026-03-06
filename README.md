# React Application
## Per Scholas Module 320 SBA

A React frontend which displays data from [Pexels API](http://pexels.com/). Data is displayed at the `/feed` endpoint (navigate by pressing the Gallery button). A feature to load more images when the user scrolls to the bottom is in development.

## Setup
1. Navigate to the ``/client`` folder.
2. Create your ``.env`` file, using ``.env.example`` as a template.
	- If you're grading me, I will have send the API key for you to use. If not, get a free key from Pexels. 
2. Run ``npm install`` to install dependencies.
3. Run ``npm run dev``.

## Usage
- Use the Gallery button to view the image data.

<!-- TODO: Add the fancy technologies list from Sneeks -->
## Technologies Used
- Vite + React
- EaselJS
- Express.js
- MongoDB/Mongoose

## API Routes
| Method | Path | Description | Access
| --- | --- | --- | --- |
| POST | /seed | Empties the database and seeds with test data from ``/utils/seed.ts``. | Public |
| POST | /users | Creates a user. Username and email must be unique. | Public |
| GET | /users/:id | Get all users' usernames and likes. | Public |
| PUT | /users/:id | Edit the given users username and/or password. | Private |
| DELETE | /users/:id | Deletes the selected user. | Private |
| POST | /api/drawings | Create new drawing. | Private |
| GET | /api/drawings | Returns all drawings. Can also return a specific drawing by `/:id` parameter. | Public |
| PUT | /api/drawings/:id | Edit the given drawing's title or overwrite its source image. | Private |
| DELETE | /api/drawings/:id | Delete the selected drawing | Private |
| POST | /api/posts | Create new post. | Private |
| GET | /api/posts | Returns all posts. Can also return a specific post by `/:id` parameter. | Public |
| GET | /api/posts/user/:user_id | Returns all posts attributed to the specified user. | Public |
| PUT | /api/posts/:id | Edit the given post's title. Not currently implemented in the frontend. | Private |
| DELETE | /api/posts/:id | Delete the selected post. | Private |
| GET | /api/comments/post/:post_id | Get the comments associated with the `/:post_id`. | Public |
| POST | /api/comments/post/:post_id | Post a new comment under the `/:post_id`. | Private |
| DELETE | /api/comments/:id | Delete the selected comment. | Private |