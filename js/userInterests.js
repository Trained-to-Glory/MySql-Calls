const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions
exports.handler.selectInterests = function(event, context) {
  var sql = "INSERT INTO userInterests (userId, interests) VALUES (${mysql.escape(event.userId)}, ${mysql.escape(event.interests)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Read Functions
exports.handler.getUserInterests = function(event, context) {
  var sql = "SELECT * FROM userInterests WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

// Update Functions
exports.handler.changeSelected = function(event, context) {
  var sql = "UPDATE userInterests SET interests = ${mysql.escape(event.interests)} WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}
