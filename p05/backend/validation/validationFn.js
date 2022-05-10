var validator = require('validator');

var validationFn = {

    validateRegister: function (req, res, next) {

        // Validation code to check register form input values
        // Return response with status 400 if validation fails

        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        reUserName = new RegExp(`^[a-z]-[a-z0-9]*[0-9]$`);
        rePassword = new RegExp(`^[a-zA-Z0-9!@#$%]{8,12}$`);
        if (reUserName.test(username)
            && rePassword.test(password)
            && validator.isEmail(email)) {
            next();
        } else {
            res.status(400);
            res.send(`{"Error":"Invalid data received"}`);
        }

    },

    validateUserid: function (req, res, next) {
        // Validation code to check userid from req.params
        // Return response with status 400 if validation fails
        var userid = req.params.userid;
        reUserid = new RegExp(`^[0-9]*$`);
        if (reUserid.test(userid)) {
            next();
        } else {
            res.status(500);
            res.send(`{"Error":"Invalid userid provided"}`);
        }
    },

    
    sanitizeResult: function (result) {
        for (i = 0; i < result.length; i++) {
        
            var row = result[i];
            console.log(row);
            for (var key in row) {
                val = row[key];
                if (typeof val === "string") {
                    row[key] = validator.escape(val);
                } // end if
            } // end for key
        } // end for i

    }


}

module.exports = validationFn;
