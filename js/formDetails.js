const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions
exports.handler.createFormDetails = function(event, context) {
  var sql = "INSERT INTO FormDetails (formId, created, formRequests) VALUES (${mysql.escape(event.formId)}, ${mysql.escape(event.created)}, ${mysql.escape(event.formRequests)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Update Functions

exports.handler.updateRequests = function(event, context) {
  var sql = "UPDATE FormDetails SET formRequests.${mysql.escape(event.formRequests)} = ${mysql.escape(event.formRequests)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Get Functions

exports.handler.getFormDetails = function(event, context) {
  var sql = "SELECT * FROM FormDetails WHERE formId = ${mysql.escape(event.formId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
