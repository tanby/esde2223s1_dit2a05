var validator = require('validator');

var validationFn = {

    validateRegister: function (req, res, next) {

        // Validation code to check register form input values
        // Return response with status 400 if validation fails

    },

    validateUserid: function (req, res, next) {
        // Validation code to check userid from req.params
        // Return response with status 400 if validation fails
    },

    
    sanitizeResult: function (result) {


    }


}

module.exports = validationFn;
