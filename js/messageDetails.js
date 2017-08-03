const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions

exports.handler.createMessage = function(event, context) {
  var sql = "INSERT INTO MessageDetails (messageId, text, created) VALUES (${mysql.escape(event.messageId)}, ${mysql.escape(event.text)}, ${mysql.escape(event.created)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Update Functions

exports.handler.updateMessage = function(event, context) {
  var sql = "UPDATE MessageDetails SET text = ${mysql.escape(event.text)} WHERE messageId = ${mysql.escape(event.messageId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Get Functions
exports.handler.getMessageDetails = function(event, context) {
  var sql = "SELECT * FROM MessageDetails WHERE messageId = ${mysql.escape(event.messageId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
