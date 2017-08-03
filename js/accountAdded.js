const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create functions

exports.handler.addFriend = function(event, context) {
  var sql = "INSERT INTO AccountAdded (userId, added) VALUES (${mysql.escape(event.userId)}, ${mysql.escape(event.added)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Read Functions

exports.handler.getAdded = function(event, context) {
  var sql = "SELECT * FROM AccountAdded WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

//Remove Functions

exports.handler.removeFriend = function(event, context) {
var removeFriend = event.added.addedId.isAdded
 var sql = "UPDATE AccountAdded SET added.${mysql.escape(event.addedId)}.isAdded = ${mysql.escape(removeFriend)} WHERE userId = ${mysql.escape(event.userId)}";
 connection.query(sql, function (err, result) {
   if (err) throw err;
 });
}
