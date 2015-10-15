
//require the mongoose node module
var mongoose = require('mongoose')

//use myAwesomDB - equivalent mongo shell command
//We need to connect to the Database
mongoose.connect('mongodb://localhost/candyDB')
//'use candyDB'

var candySchema = mongoose.Schema({
	//name			: String, // this is shorthand for {type : String},
	name			: {type : String, required : true},
	//email			: {type : email, unique : true}
	highFructose	: {type : Boolean, default : true},
	nuts			: Boolean,
	calories		: Number,
	sweetness		: Number,
	bestFriend		: String,

});

var Candy = mongoose.model('Candy', candySchema);

var heathBar = new Candy ({
	name		 : 'Heath Bar',
	highFructose : true,
	nuts		 : true,
	calories	 : 1020,
	sweetness	 : 7.65,
	bestFriend	 : 'Cadbury Egg'
});

var scoobySnack = new Candy ({
	name		 : 'Scooby Snack',
	highFructose : false,
	nuts		 : false,
	calories	 : 125,
	sweetness	 : 4.03,
	bestFriend	 : 'Shaggy Snack'
});

// heathBar.save( function(err, data){
// 	console.log('ERR : ', err)
// 	console.log('DATA : ', data)


// })



//Super basic error/success handling in a route
// if (err) {
// 	res.send('A candy with that email already exists')
// }
// else {
// 	res.send(data)
// }




//FIND documents from the database
//db.collectionName.find()
var allMyCandy = []

Candy.find({nuts : false}, function(err, candies){
	console.log('Candy w/o nuts :' , candies)
	allMyCandy = candies
})

console.log('-----------------', allMyCandy)















