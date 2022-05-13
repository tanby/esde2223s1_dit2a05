var db = require('./databaseConfig.js');
var config = require('../config.js');

var furniture = {
    getFurniture : (id, callback)=>{
        // reuse getUser function from user.js
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else{
                console.log("***Connected!");
				
                // call stored procedure
                //var sql = `SELECT userid,email,username FROM user WHERE userid = ?`;
                var sql = `CALL get_furniture(?)`
			
				conn.query(sql, [id], function(err, result){

                    conn.end();
                    if(err){
                        console.log(err);
                        return callback(err, null);
                    }
					//V1
					else { 
						console.log(result);
						return callback(null, result);

                    }
                });
            }
        });
    }
}

module.exports = furniture;