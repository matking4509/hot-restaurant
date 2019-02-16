// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/api/characters", function(req, res) {
    // // req.body hosts is equal to the JSON post sent from the user
    // // This works because of our body parsing middleware
    // var newcharacter = req.body;
  
    // console.log(newcharacter);
  
    // // We then add the json the user sent to the character array
    // characters.push(newcharacter);
  
    // // We then display the JSON to the users
    // res.json(newcharacter);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});