
var mongoose = require('mongoose');
require("../models/truck.js");
var Truck = mongoose.model('Truck');
var Review = mongoose.model("Review");

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
        Truck.find({}).sort([['avgRating', -1]]).exec(function(err,data){
            if(err){
                res.json(err)
            } else {
                res.json({trucks: data})
            }
        })
    },
    getOne: function(req,res){
        Truck.findOne({_id:req.params.id}, function(err,data){
            if(err){
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },
    updateTruck:function(req,res){
        Truck.findOneAndUpdate({_id:req.params.id},{$set:req.body},{runValidators: true},function(err,data){
            if(err){
                res.json(err)
            }else{
                res.json({message:"it worked", status:200})
            }
        })
    },
    deleteTruck: function(req, res) {
        // must delete truck and all reviews with it.
        Truck.remove({_id: req.params.id}, function(err) {
            if(err) {
                return res.json(err);
            }
            else {
                return res.json({message:"it worked", status:200})
            }
        })
    },

    newReview: function(req, res) {
        console.log("in newReview");
        Truck.findOne({_id: req.params.id}, function(err, truck){
            if(err){res.json(err)}
            else{
                let sum = 0;
                console.log(truck)
                if (truck.review.length>0){ 
                    for(let i of truck.review){
                        sum += Number(i.rating);
                        if(i.name==req.body.name){
                            console.log('got here')
                            return res.json({errors: {name: {message: 'This user has already written a review.'}}})
                        }
                    } 
                }
                console.log(sum);
                sum += Number(req.body.rating);
                console.log(sum);
                let avg = sum / (truck.review.length + 1); 
                Review.create(req.body, function(err, review){
                    if (err){
                        res.json(err)
                    } else {
                        Truck.findOneAndUpdate({_id: req.params.id}, {$push: {review: review}, $set: {avgRating: avg}}, function(err){
                            if(err){
                                console.log("newReview erroring")
                                res.json(err);    
                            }else{
                                res.json({status: 200});
                            }
                        });
                    }
                });
            }
        });
        
    },
}
