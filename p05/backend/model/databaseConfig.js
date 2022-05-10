var mysql = require('mysql');

var dbconnect = {
getConnection: function() {
    var conn = mysql.createConnection({
    host: "localhost",
    user: "p5user",
    password: "p5user",
    database: "furniture_p5"
});
return conn;
}
};

module.exports = dbconnect