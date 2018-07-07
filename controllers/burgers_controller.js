
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// gets all the burgers in the db
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", { burgers: data });
	});
});

// adds a burger
router.post("/", function(req, res) {


	});
});

// updates a burger entry
router.put("/:id", function(req, res) {
    
    
	});
});

module.exports = router;