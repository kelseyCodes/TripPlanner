var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/TripPlanner');


var place = new mongoose.Schema({
		address: String,
		city: String,
		state: String,
		phone: String,
		location: [Number, Number]
})

var hotel = new mongoose.Schema({
		name: String,
		place: [place],
		num_starts: Number,
		amenities: String
})

var thingToDo = new mongoose.Schema({
		name: String,
		place: [place],
		age_range: String,
})

var restaurant = new mongoose.Schema({
		name: String,
		place: [place],
		cuisine: String,
		price: Number
})








var Place = mongoose.model('Place', place);
var Hotel = mongoose.model('Hotel', hotel);
var ThingToDo = mongoose.model('ThingToDo', thingToDo);
var Restaurant = mongoose.model('Restaurant', restaurant);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	ThingToDo: ThingToDo,
	Restaurant: Restaurant
}