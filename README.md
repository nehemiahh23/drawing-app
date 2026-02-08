# Mongoose + Express Application
## Per Scholas Module 319 SBA
<!-- TODO: Add session functionality -->
<!-- TODO: Add auth functionality -->

Description Paragraph

- Use at least three different data collections within the database (such as users, posts, or comments).
- Utilize reasonable data modeling practices.
- Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
- Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.
- Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.
- Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.
- Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.
- Include sensible MongoDB data validation rules for at least one data collection.
	- Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error.
- Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
	- Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).

## Setup
1. Navigate to the ``/server`` folder.
2. Run ``npm install`` to install dependencies.
3. Run ``npm start``.
	- For live updating, run ``npm run dev`` instead.

## Technologies Used
- TypeScript
- Node.js
- Express
- MongoDB/Mongoose
- [Fly.io](https://fly.io/)
- [Go-Fast CDN](https://github.com/kevinanielsen/go-fast-cdn)

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
