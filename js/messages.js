const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create functions

exports.handler.createMessage = function(event, context) {
  var sql = "INSERT INTO Message (messageId, recepientId, sentUserId, responded, title, created, isVisible) VALUES (${mysql.escape(event.messageId)}, ${mysql.escape(event.recepientId)}, ${mysql.escape(event.sentUserId)}, ${mysql.escape(event.responded)}, ${mysql.escape(event.title)}, ${mysql.escape(event.created)}, ${mysql.escape(event.isVisible)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Get Functions

exports.handler.getListOfUserMessages = function(event, context) {
  var sql = "SELECT * FROM Message WHERE messageId = ${mysql.escape(event.messageId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
  });
}

// Remove Functions

exports.handler.removeFromGroup = function(event, context) {
  var sql = "UPDATE Message SET recepientId = ${mysql.escape(event.recepientId)} WHERE messageId = ${mysql.escape(event.messageId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    else return result;
  });
}

// Delete Functions

exports.handler.deleteMessage = function(event, context) {
  var sql = "UPDATE Message SET isVisible = ${mysql.escape(event.isVisible)} WHERE messageId = ${mysql.escape(event.messageId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}
