var Trucks = require('./../controllers/trucks.js')
module.exports = function(app){
    app.get('/trucks', Trucks.getAll)
    app.post('/trucks', Trucks.addTruck)
    app.get('/truck/:id', Trucks.getOne)
    app.put('/truck/:id', Trucks.updateTruck)
    app.delete("/deleteTruck/:id", Trucks.deleteTruck);
    app.post("/trucks/:id/review", Trucks.newReview);
}