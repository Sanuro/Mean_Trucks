var Trucks = require('./../controllers/trucks.js')
module.exports = function(app){
    app.get('/trucks', Trucks.getAll)
    app.post('/trucks', Trucks.addTruck)
}