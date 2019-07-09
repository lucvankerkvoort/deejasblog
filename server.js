var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/localController");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening at localhost:" + PORT);
});
