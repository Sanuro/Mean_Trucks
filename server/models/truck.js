var ReviewSchema = require('./review.js')
const mongoose = require('mongoose')

var TruckSchema = new mongoose.Schema({
    
name: {type: String, required: [true, "Name is required"], minlength: [5, "name must be 5 characters or longer."]},
style: {type: String, required: [true, "Style is required"], minlength: [3, "style must be 3 characters or longer."]},
description: {type: String, required: [true, "description is needed"], minlength: [10, "description must be 10 characters or longer."]},
avgRating: {type: Number },
review: [ReviewSchema]


},{timestamps:true});



mongoose.model('Truck', TruckSchema);