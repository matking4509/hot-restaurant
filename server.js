// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var maxTables = 5;
var rTn = '';
var dinerInfo = [
  // Test User Format
  // {
  //   name: "Test",
  //   phone: "888-123-4586",
  //   email: "test@test.com",
  //   table: 1 *** Will Be Calcuated in API before pused to Array ***
  // },
];

var waitlistInfo = [
  // Test User Format
  // {
  //   name: "Test",
  //   phone: "888-123-4586",
  //   email: "test@test.com",
  //   table: 1 *** Will Be Calcuated in API before pused to Array ***
  // },
];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/makeRes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    if (dinerInfo.length >= maxTables) {
      var waitlistRes = req.body;
      waitlistInfo.push(waitlistRes);
      console.log("waitlist",waitlistRes);
      res.sendFile(path.join(__dirname, "fullup.html"));
    } else {
      var newRes = req.body;
      
      // Randomly Select Table
      randomTable();
      newRes.table = rTn;
      console.log("reserved",newRes);
    
      // We then add the json the user sent to the character array
      dinerInfo.push(newRes);
    
      // We then display the JSON to the users
      
      
    }
    res.json(dinerInfo);
    // res.json(waitlistInfo);
});
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

function randomTable() {
  // Random Table
    var randomTableNum = Math.floor(Math.random() * maxTables + 1);
  //   newRes.table = randomTable;
    if (dinerInfo.some(e => e.table === randomTableNum)) { 
      console.log("Nope. Trying Again");  
      randomTable();
    } else {
      console.log("random okay");
      // return randomTableNum;
      rTn = randomTableNum;
    };
};