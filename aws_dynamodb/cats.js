var 
    AWS = require("aws-sdk"),                            
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "us-east-1"
    });                          
    
var cat = {
    getCat : (name, callback)=>{
        //-- TODO: complete this to return cat given name

    }, 
    // you can add more methods such as to addCat, updateCat, etc. 
}

module.exports = cat