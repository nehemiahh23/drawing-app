# JavaScript Web Application
## Per Scholas Module 308A SBA

An image browser that caches paginated sets of images in an Express.js server and calls on the [Pexels](https://www.pexels.com/api/documentation/) API for stock images. 

Image cards are added dynamically using JavaScript document fragments. Paginated data is stored in an array which persists as long as the express server is running. API calls are only made when a new page of images is needed. 

Images won't display on the page unless the Express server is running. To activate it:

1. Navigate to the ``/server`` folder.
2. Create a ``.env`` file.
	- Set ``PEXELS_KEY`` equal to [your Pexels API KEY](https://www.pexels.com/api/key/)
	- Set ``FE_PORT`` equal to the port you will use for the frontend
3. Run ``npm install``
4. Run ``npm start``
	- The backend server runs on port 3000

The images are viewable from the ``/pages/browse.html`` route.