const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions
exports.handler.addPursuitDetails = function(event, context) {
  var sql = "INSERT INTO PursuitDetails (systemId, description, created, isVisible, isPurchased, added) VALUES (${mysql.escape(event.systemId)}, ${mysql.escape(event.description)}, ${mysql.escape(event.created)}, ${mysql.escape(event.isVisible)}, ${mysql.escape(event.isPurchased)}, ${mysql.escape(event.added)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};



// Update Functions

exports.handler.addFriends = function(event, context) {
  var sql = "UPDATE PursuitDetails SET added = ${mysql.escape(event.added)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updatePursuitDescription = function(event, context) {
  var sql = "UPDATE PursuitDetails SET description = ${mysql.escape(event.description)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updatePursuitPurchase = function(event, context) {
  var sql = "UPDATE PursuitDetails SET isPurchased = ${mysql.escape(event.isPurchased)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updatePursuitStatus = function(event, context) {
  var sql = "UPDATE PursuitDetails SET isVisible = ${mysql.escape(event.isVisible)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updatePursuitFinished = function(event, context) {
  var sql = "UPDATE PursuitDetails SET isFinished = ${mysql.escape(event.isFinished)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}


// Delete Functions

exports.handler.removeFriend = function(event, context) {
  var sql = "UPDATE PursuitDetails SET added = ${mysql.escape(event.added)} WHERE systemId = added.${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Get Functions

exports.handler.getPursuitDetails = function(event, context) {
  var sql = "SELECT * FROM PursuitDetails WHERE systemId = added.${mysql.escape(event.systemId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
