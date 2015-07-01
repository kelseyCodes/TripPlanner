require('mongoose');
var express = require('express');
var Promise = require('bluebird');
var router = express.Router();
var models = require('../models');

/*GET home page*/
router.get('/', function(req,res,next){
	Promise.all([models.Hotel.find({}).exec(), 
		models.Restaurant.find({}).exec(), 
		models.ThingToDo.find({}).exec()])
	.then(function(result_array){
		var hotels = result_array[0][0];
		var restaurants = result_array[1][0];
		var thingToDos = result_array[2][0];


		console.log('fjdksalfjdl', hotels, restaurants, thingToDos)
		res.render('index',{
			all_hotels: hotels,
			all_restaurants: restaurants,
			all_thingToDo: thingToDos})

	})
})


module.exports = router;