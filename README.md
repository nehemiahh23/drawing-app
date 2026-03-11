# MERN Application
## Per Scholas Capstone

A full-stack app which allows users to draw within a canvas element. With a logged in account, drawings can be saved to the cloud. 

## Setup
1. Navigate to the ``/client`` folder.
1. Run ``npm install`` to install dependencies
3. Run ``npm run dev``.
1. Navigate to the ``/server`` folder.
2. Again, ``npm install`` to install dependencies.
2. Create your ``.env`` file, using ``.env.example`` as a template.
	- If you're grading me, I will have sent the .env info for you to use
	- If not:
		- Change the ``SERVER_PORT`` if you wish
		- ``MONGO_URI`` = The connection string of your MongoDB database.
		- ``CLOUD_NAME``, ``CLOUD_API_KEY``, ``CLOUD_SECRET`` = The [Cloudinary docs](https://cloudinary.com/documentation/node_integration#set_required_configuration_parameters) outline where to get these variables when setting up your own cloud hosting.
		- `JWT_SECRET` = Random string that will be used to encode user info. I recommend generating it with [randomkeygen.com](https://randomkeygen.com/).
3. Run ``npm start``.
	- Currently, the ``dev`` command causes issues with cloud uploading.
4. Send a request to the ``/seed`` endpoint to display some working data.
	- Once again, if you're grading me, I'll have sent you the login info for the existing users.

## Usage
- Navigating to the Studio allows you to draw (more features will be added to this, primarily pen tablet support). You can save a drawing locally which will persist until a reload. When logged in, you can save it to the cloud and overwrite it with edits. The clear button refreshes
- The Gallery displays public posts (currently these cannot be created or changed in any way).
- The Portfolio page will display all your drawings while logged in. Here you can mark drawings for deletion. This can be undone until the page unrenders or the Refresh button is pressed.
- The Login page will validate user input and log in. It will then be replaced by the Account page, which allows the user to log out.

<!-- TODO: Add the fancy technologies list from Sneeks -->
## Technologies Used
- Vite + React
- EaselJS
- Express.js
- MongoDB/Mongoose
- Cloudinary

## API Routes
| Method | Path | Description | Access
| --- | --- | --- | --- |
| POST | /seed | Empties the database and seeds with test data from ``/utils/seed.ts``. | Public |
| POST | /users | Creates a user. Username and email must be unique. Returns a JSON Web Token. | Public |
| POST | /login | Log in with e-mail address and password. Returns a JavaScript Web Token. | Public |
| GET | /users/:id | Get all users' usernames and likes. | Public |
| GET | /users/user/settings | Get protected user info with an auth token. | Private |
| GET | /users/user/drawings | Get all of the logged in user's drawings. | Private |
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