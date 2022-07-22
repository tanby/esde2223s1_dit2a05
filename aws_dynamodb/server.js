const express = require("express")
var bodyParser = require('body-parser');
const cat = require("./cats.js")

var app = express()

var port = 8081

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(urlencodedParser);

app.get("/hello", (req, res)=>{
    res.json({message:"hello"})
})

// query lost cats? 
app.get("/cat/:name", (req, res)=>{
    // TODO: get cat based on name

})
// can add more endpoint for adding cat, etc. 


var server = app.listen(port, function () {

    console.log('Web App Hosted at http://localhost:%s',port);

});