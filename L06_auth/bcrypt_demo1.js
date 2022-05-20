// import bcrypt library
var bcrypt = require("bcrypt")

//-- assuming user register and set their password in your app
var password = "my-special-password"
//-- number of rounds to generate salt. 
//-- more rounds more random and secure
var numrounds = 12
//-- variable to store the hashed password
var hashed = ""

//-- hashing using sync
//-- sync means the code will pause until the hashing is done
//-- which means your app will be unresponsive during this time
hashed = bcrypt.hashSync(password, numrounds)
//-- in practice, we will store this hashed pwd into database
console.log(hashed)

//-- assuming user is logging in with password
//-- so we need bcrypt to compare if password the same
//-- we retrieve hashed password from database
var password2 = "our-special-password" //-- from login form
var result = bcrypt.compareSync(password2, hashed)
console.log(result)
//-- if true, let user proceed
//-- else kick them out politely.... 


