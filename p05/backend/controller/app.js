var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user = require('../model/user.js');
var cors = require('cors');
var validator = require('validator');
var validateFn=require('../validation/validationFn');

// import furniture model
var furniture = require("../model/furniture.js")

app.options('*', cors());
app.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(bodyParser.json());
app.use(urlencodedParser);

// reusing validation code for userid. 
// so parameter has to reuse userid name
// not good for documentation purpose,
app.get('/furniture/:userid', validateFn.validateUserid, function (req, res) {
    var id = req.params.userid;

    furniture.getFurniture(id, function (err, result) {
        if (!err) {
            // with stored procedure
            // return 1st item in result array
            res.send(result[0]);
        } else {

            res.status(500).send("Some error");
        }
    });
});

app.get('/user/:userid', function (req, res) {
    var id = req.params.userid;

    user.getUser(id, function (err, result) {
        if (!err) {
            // sanitize
            //result = validateFn.sanitizeResult(result)
            res.send(result);
        } else {

            res.status(500).send("Some error");
        }
    });
});

app.get('/user', function (req, res) {

    user.getUsers(function (err, result) {
       
        if (!err) {
            res.send(result);
        } else {
            res.status(500).send(null);
        }
    });
});


//POST (INSERT) /user
app.post('/user', validateFn.validateRegister,  function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = "member";

    console.log(`${username} ${email} ${password}`)

    user.insertUser(username, email, role, password, function (err, result) {

        res.type('json');
        if (err) {
            res.status(500);
            res.send(`{"message":"Internal Server Error"}`);

        } else {
            res.status(200);
            res.send(`{"Record Inserted":"${result.affectedRows}"}`);
        }
    });

});


app.delete('/user/:userid', function (req, res) {

    var userid = req.params.userid;

    user.deleteUser(userid, function (err, result) {

        res.type('json');
        if (err) {
            res.status(500);
            res.send(`{"message":"Internal Server Error"}`);

        } else {
            res.status(200);
            res.send(`{"Record(s) Deleted":"${result.affectedRows}"}`);
        }

    });

});
module.exports = app;