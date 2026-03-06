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
| Method | Path | Description |
| --- | --- | --- |
| POST | /seed | Empties the database and seeds with test data from ``/utils/seed.ts``. |
| POST | /users | Creates a user. Username and email must be unique. |
| PUT | /users/:id | Edit the given users username and/or password. |
| DELETE | /users/:id | Deletes the selected user. |
| GET | /api/drawings | Returns all drawings. Can also return a specific image by `/:id` parameter. |
| POST | /api/drawings | Create new drawing. Title must be unique. User ID is currently a set placeholder value. |
| DELETE | /api/drawings/:id | Delete the selected drawing |
| GET | /api/comments/post/:drawing_id | Get the comments associated with the `/:drawing_id`. |
| POST | /api/comments/post/:drawing_id | Post a new comment under the `/:drawing_id`. |