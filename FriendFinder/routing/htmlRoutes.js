// NPM Path package needed for working with directories and file paths
const path = require("path");

// routes needed for this application
module.exports = function(app) {

    // if the URL contains a /survey route the user to the survey.html file
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    });

    // default route to the home.html page if no matches are found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });
}