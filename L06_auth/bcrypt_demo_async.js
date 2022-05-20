// import bcrypt library
var bcrypt = require("bcrypt")

//-- assuming user register and set their password in your app
var password = "my-special-password"
//-- number of rounds to generate salt. 
//-- more rounds more random and secure
var numrounds = 12
//-- variable to store the hashed password
var hashed = ""

//-- async means code does not pause, 
//-- but will continue while hashing is done
bcrypt.hash(password, numrounds, 
    //-- following is callback function to run when hashing is done
    (err, hash)=>{
    hashed = hash
    console.log(hashed)
    //-- let's test and compare hashed with user password
    comparePassword(password2, hashed)
    //-- a simple check on error
    if(err) console.log(err)
})

//-- assuming user is logging in with password
//-- so we need bcrypt to compare if password the same
//-- we retrieve hashed password from database
var password2 = "our-special-password" //-- from login form

//-- write a function to do compare when needed
function comparePassword(password, hashed){
    bcrypt.compare(password, hashed, 
        //-- callback function when compare is done
        (err, success)=>{
            console.log(success)
            console.log(err)
            //-- real app, if success, let user proceed, 
            //-- else, exit user
        } 
    )
}




