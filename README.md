# Express Application
## Per Scholas Module 318 SBA
<!-- TODO: Add session functionality -->
<!-- TODO: Add auth functionality -->

An API which sets up the framework for a social drawing app. Uses dummy data to demonstrate functionality with storing and manipulating user data, image data, and comments.

## Setup
1. Navigate to the ``/server`` folder.
2. Run ``npm install`` to install dependencies.
3. Run ``npm start``.
	- For live updating, run ``npm run dev`` instead.

## Technologies Used
- TypeScript
- Node.js
- Express

## API Routes
| Method | Path | Description |
| --- | --- | --- |
| GET | /users | Searches users for `username` and `password` matching the query params. |
| POST | /users | Creates a user with a unique id and provided username. |
| PATCH | /users/:id | Edit the given users username or password. |
| DELETE | /users/:id | Deletes the selected user. |
| GET | /api/photos | Returns all photos. Can query a specific image by `id`. |
| POST | /api/photos | Create new photo. |
| DELETE | /api/photos/:id | Delete the selected photo |
| GET | /api/comments | Get the comments on the queried `photo_id` matching the query params. |
| DELETE | /api/comments/:id | Delete the selected comment |
| POST | /api/comments/:photo_id/new | Post a new comment under the given photo. |
| GET | /login | View that uses a form and the GET /users route for logins. |
| GET | /register | View that uses a form and the POST /users route to create users. |
| GET | /photos | View that displays all the photos in the db. |
