var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// starts the express app
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// sets up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes:
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(port, function() {
    console.log("App listening on PORT: " + port);
  });