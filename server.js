
console.log("inside server.js for food trucks");

const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
// const flash = require('express-flash');


app.use(bodyParser.json());
app.use(express.static( __dirname + "/client/public/dist/public"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/public/dist/public/index.html'));
});

var serverListen = 2000


app.listen(serverListen, function(){
    console.log(`Looking at ${serverListen}.`);
});