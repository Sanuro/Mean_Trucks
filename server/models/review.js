
const mongoose = require('mongoose')

var ReviewSchema = new mongoose.Schema({
    
name: {type: String, required: [true, "Name is required"], minlength: [5, "name must be 5 characters or longer."]},
rating: {type: Number },
review: {type: String, required: [true, "Review is required"], minlength: [10, "Review must be 10 characters or longer."]},
},{timestamps:true});



mongoose.model('Review', ReviewSchema);
module.exports = ReviewSchema