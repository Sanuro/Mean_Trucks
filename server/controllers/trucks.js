
var mongoose = require('mongoose');
require("../models/truck.js");
var Truck = mongoose.model('Truck');

module.exports = {
    addTruck: function(req, res){
        Truck.create(req.body, function(err){
            if (err){
                res.json(err)
            } else {
                res.json({status: 200})
            }
        });
    },
    getAll: function(req, res){
        Truck.find({}, function(err,data){
            if(err){
                res.json(err)
            } else {
                res.json({trucks: data})
            }
        })
    }
}
