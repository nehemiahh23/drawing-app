# The Document Object Model
## Per Scholas Module 316 SBA

A simple image browser that uses DOM manipulation to carry out its functions. Currently stores image data in *db.json*. 

Image cards are added dynamically using JavaScript document fragments. The search function filters through the templated elements and hides them using CSS properties. 

Images won't display on the page unless the json server is running. To activate it:

1. Navigate to the project root folder.
2. Run ``npm install``
3. Run ``json-server --watch db.json --port=3002``