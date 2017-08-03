const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions

exports.handler.createForms = function(event, context) {
  var sql = "INSERT INTO Forms (formId, recepientId, sentUserId, title, created, isVisible, responded) VALUES (${mysql.escape(event.formId)}, ${mysql.escape(event.recepientId)}, ${mysql.escape(event.sentUserId)}, ${mysql.escape(event.title)}, ${mysql.escape(event.created)}, ${mysql.escape(event.isVisible)}, ${mysql.escape(event.responded)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Form Status Functions

exports.handler.formStatus = function(event, context) {
  var sql = "UPDATE Forms SET isAccepted = ${mysql.escape(event.isAccepted)} WHERE formId = ${mysql.escape(event.formId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Remove Functions

exports.handler.removeForm = function(event, context) {
  var sql = "UPDATE Forms SET isVisible = ${mysql.escape(event.isVisible)} WHERE formId = ${mysql.escape(event.formId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}


// Get Functions

exports.handler.getUserForm = function(event, context) {
  var sql = "SELECT * FROM Forms WHERE formId = ${mysql.escape(event.formId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

exports.handler.getListOfUserForms = function(event, context) {
  var sql = "SELECT * FROM Forms WHERE formId = ${mysql.escape(event.formId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
