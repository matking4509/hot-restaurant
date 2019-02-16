// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var dinerInfo = [
  // Test User Format
  // {
  //   name: "Test",
  //   phone: "888-123-4586",
  //   email: "test@test.com",
  //   table: 1
  // },
  
];
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reservations", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/makeRes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;
    console.log(newRes);
  
    // We then add the json the user sent to the character array
    dinerInfo.push(newRes);
  
    // We then display the JSON to the users
    res.json(dinerInfo);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});