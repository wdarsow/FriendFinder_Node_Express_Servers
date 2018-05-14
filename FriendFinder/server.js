

// required NPM packages
const express = require("express");
const bodyParse = require("body-parser");
const path = require("path");

// Express server creation
const app = express();

// port required for listening for new requests
const PORT = process.env.PORT || 3000;

// prepare the Express application to parse data properly
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// other files required for routing
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// code required for starting the server and listening for new requests
app.listen(PORT, function() {
    console.log("This Friend Finder application is listening on port: " + PORT);
});