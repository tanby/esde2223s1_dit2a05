console.log("jwt demo")
//-- recap on jwt 
//-- basic steps on how to generate jwt and verify
//-- import jwt library
const jwt = require("jsonwebtoken")
//-- add expiry. in seconds. 1 day
const expiry = 60*60*24 //-- 60 sec, 60 min, 24 hours
console.log(`expiry: ${expiry}`)
//--- generate a secret key 
const key = "my-super-secret-key"

//-- generate a token
//-- eg, after user login is successful
var token = jwt.sign(
    //-- payload or data to encode
    //-- for this example, just some sample data
    {
        "data":"some info i want to store and access and not sensitive",
        "id":123
    },
    //-- key
    key, 
    //-- options, eg, expiry
    {
        expiresIn: expiry
    }
)
console.log(token)

//-- assume we have a token from GET/POST/PUT/DELETE request, 
//-- let's decode it
//-- eg, when we want to check user authorization
jwt.verify(
    //-- token
    token, 
    //-- key
    key, 
    //-- callback function when done
    (err, decoded)=>{
        console.log(decoded)
        // -- or do something with decoded info in your own app
        //-- eg, check if user is admin or user and whether can enter
        //-- ON YOUR OWN, handle error too. 
    }
)

