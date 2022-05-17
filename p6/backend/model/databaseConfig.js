var mysql = require('mysql');

var dbconnect = {
getConnection: function() {
    var conn = mysql.createConnection({
    host: "localhost",
    user: "p6user",
    password: "p6user",
    database: "furniture_p6"
});
return conn;
}
};

module.exports = dbconnect