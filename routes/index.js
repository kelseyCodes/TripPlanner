require('mongoose');
var express = require('express');
var Promise = require('bluebird');
var router = express.Router();
var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var ThingToDo = models.ThingToDo;

/*GET home page*/
 router.get('/', function(req,res,next){
	Promise.all([Hotel.find({}).exec(), 
		Restaurant.find({}).exec(), 
		ThingToDo.find({}).exec()])
	.then(function(result_array){
		var hotels = result_array[0];
		var restaurants = result_array[1];
		var thingToDos = result_array[2];

		res.render('index',{
			all_hotels: hotels,
			all_restaurants: restaurants,
			all_thingToDo: thingToDos}
		)

	})

})


module.exports = router;