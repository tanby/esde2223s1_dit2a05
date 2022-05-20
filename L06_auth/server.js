//-- import libraries
var express = require("express")
//-- NEW: trying out session library
var session = require("express-session")

var app = express()
//-- NEW : create a session for user
app.use(
    session({
        //-- secret
        secret: "my secret with dit 2a05", 
        //-- cookie options
        cookie: {
            httpOnly: false, //-- javascript cannot access cookie
            secure: false, //-- use cookie only if on HTTPS
            //-- request must come from same domain or my own server, except GET 
            sameSite: 'lax', 
        }
    })
)
//-- serve static pages, eg, html in public folder
app.use(express.static("public"))

//-- create endpoints
//-- testing to make sure server is working ok
app.get("/hello", (req, res)=>{
    //-- testing a session variable/info
    //-- check if session variable 'views' exist
    if(req.session.views){
        req.session.views++; //-- increase by one
    }else{ //-- if session variable doesn't exist
        req.session.views = 1 //-- initialise to value 1
    }
    res.send({
        message: "hello dit2a05", 
        views: req.session.views, //-- send back so that we can see
        //-- i also want to see the auto gen session id
        session_id:req.session.id,
    })
})

var port = 8081

var server = app.listen(port, ()=>{
    console.log(`web app hosted at port http://localhost:${port}`)
})