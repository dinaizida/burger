
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// gets all the burgers in the database
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", { burgers: data });
	});
});

// adds a burger
router.post("/", function(req, res) {
	console.log(req.body);
	burger.insertOne(req.body.name, function() {
		res.redirect("/");
	});
});

// updates a burger entry
router.put("/:id", function(req, res) {
	console.log(req.body);
	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});

});
module.exports = router;
