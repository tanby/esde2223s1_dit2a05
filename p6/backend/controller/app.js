var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userDB = require('../model/user.js');
var cors = require('cors');
var validator = require('validator');
var validateFn=require('../validation/validationFn');
var bcrypt=require('bcryptjs');
var validateToken = require('../auth/verifyToken')

app.options('*', cors());
app.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(bodyParser.json());
app.use(urlencodedParser);

app.get('/user/:userid', validateFn.validateUserid,function (req, res) {
    var id = req.params.userid;

    userDB.getUser(id, function (err, result) {
        if (!err) {
            validateFn.sanitizeResult(result);
            res.send(result);
        } else {

            res.status(500).send("Some error");
        }
    });
});

app.get('/user', validateToken.verifyToken, validateToken.verifyAdmin,
         function (req, res) {

    userDB.getUsers(function (err, result) {
       
        if (!err) {
            validateFn.sanitizeResult(result);
            res.send(result);
        } else {
            res.status(500).send(null);
        }
    });
});


//POST (INSERT) /user
app.post('/user', validateFn.validateRegister, function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = "member";//req.body.role;

    userDB.insertUser(username, email, role, password, function (err, result) {

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


app.delete('/user/:userid',validateFn.validateUserid, function (req, res) {

    var userid = req.params.userid;

    userDB.deleteUser(userid, function (err, result) {

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


//POST (LOGIN) /user/login
app.post('/user/login',function(req,res){
    var email=req.body.email;
    var password=req.body.password;

    userDB.loginUser(email,password,function(err,result){

        res.type("json");
        if(err || result==null){
            res.status(500);
            res.send(`{"Message":"Logged in Fail"}`);
        }else{
            res.status(200);
            res.send(`{"Token":"${result}"}`);

        }

    });

});


module.exports = app;