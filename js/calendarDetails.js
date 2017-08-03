const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions

exports.handler.addEvent = function(event, context) {
  var sql = "INSERT INTO CalendarDetails (eventId, reminder, startTime, endTime, allDay, isVisible) VALUES (${mysql.escape(event.eventId)}, ${mysql.escape(event.reminder)}, ${mysql.escape(event.startTime)}, ${mysql.escape(event.endTime)}, ${mysql.escape(event.allDay)}, ${mysql.escape(event.isVisible)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Update Functions

exports.handler.updateEventReminder = function(event, context) {
  var sql = "UPDATE CalendarDetails SET reminder = ${mysql.escape(event.reminder)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updateEventTimes = function(event, context) {
  var sql = "UPDATE CalendarDetails SET (startTime, endTime) = (${mysql.escape(event.startTime)}, ${mysql.escape(event.endTime)}) WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updateEventStartTime = function(event, context) {
  var sql = "UPDATE CalendarDetails SET startTime = ${mysql.escape(event.startTime)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updateEventEndTime = function(event, context) {
  var sql = "UPDATE CalendarDetails SET endTime = ${mysql.escape(event.endTime)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updateAllDay = function(event, context) {
  var sql = "UPDATE CalendarDetails SET allDay = ${mysql.escape(event.allDay)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Hide Functions

exports.handler.hideEvent = function(event, context) {
  var sql = "UPDATE CalendarDetails SET isVisible = ${mysql.escape(event.isVisible)} WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Get Functions

exports.handler.getEventDetails = function(event, context) {
  var sql = "SELECT * FROM CalendarDetails WHERE eventId = ${mysql.escape(event.eventId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
