const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions
exports.handler.addEvent = function(event, context) {
  var sql = "INSERT INTO Calendar (eventId, userId, title, date, added) VALUES (${mysql.escape(event.eventId)}, ${mysql.escape(event.userId)}, ${mysql.escape(event.title)}, ${mysql.escape(event.date)}, ${mysql.escape(event.added)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Update Functions

exports.handler.updateEventAdded = function(event, context) {
  var sql = "UPDATE Calendar SET added = ${mysql.escape(event.added)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

exports.handler.updateEventTitle = function(event, context) {
  var sql = "UPDATE Calendar SET title = ${mysql.escape(event.title)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

exports.handler.updateEventDate = function(event, context) {
  var sql = "UPDATE Calendar SET date = ${mysql.escape(event.date)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Remove Functions

exports.handler.removeAdded = function(event, context) {
  var sql = "UPDATE Calendar SET added.addedId.isAdded = ${mysql.escape(event.addedId.isAdded)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Get Functions

exports.handler.getEvent = function(event, context) {
  var sql = "SELECT * FROM Calendar WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
};

exports.handler.getListOfUserEvents = function(event, context) {
  var sql = "SELECT * FROM Calendar WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
};
