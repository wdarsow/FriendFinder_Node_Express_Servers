// this constant variable contains the necessary table data
let friends = require("../app/data/friends");

// required Get and Post routes below
module.exports = function(app) {

// this is used to retrieve data from the friendArray
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

// this is used to post data from a completed survey to the friendArray
app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    console.log(friends);
});

}
