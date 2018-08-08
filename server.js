// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Freinds (DATA)
// =============================================================
var friend = [
  {
    Name: "Tia",
    Image: "https://tse2.mm.bing.net/th?id=OIP.A2sh_qPhdpTk3Uef8ewivwHaLI&pid=15.1&P=0&w=300&h=300",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8:"",
    q9: "",
    q10: ""
  }
    
];


// Required ROUTER files 
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//

app.get("/api/friends", function(req, res) {
  return res.json(friend);
});

//POSTS the new reservaions to the API 
app.post("/api/friends", function(req, res) {
   res.json(friend);
});

// LISTENER "starts" the server 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });