const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
	res.render("index.html");
});

app.get("/mercury", function(req, res) {
	res.render("mercury.html");
});

app.get("/venus", function(req, res) {
	res.send("This will be Venus web page!")
});

//server listener
app.listen("8081", "127.0.0.1", function() {
	console.log("Express Server is Running. . .");
});

//listener
<<<<<<< HEAD
app.listen(process.env.PORT, process.env.IP, function() {
=======
app.listen(process.env.PORT, process.emv.IP, function() {
>>>>>>> 84adf7c99ba0883e92b75eddc744baac26ba75dd
	console.log("Running Express Server . . .");
});