let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let serveStatic = require("serve-static");
let babel = require("babel-core");


let app = express();
let PORT = process.env.PORT || 3050;

let profiles = [];
let matches = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });


// app.post("/api/profiles", function(req, res) {
//     profiles.push(req.body);
// });

// app.get("/api/profiles", function(req, res) {
//     res.json(profiles);
// });




app.use(('/static'), express.static('public'));


app.use(express.static(__dirname + '/public'));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});