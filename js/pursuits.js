const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

//Create functions
exports.handler.createPursuit = function(event, context) {
  var sql = "INSERT INTO Pursuits (systemId, userId, systemPhoto, title) VALUES (${mysql.escape(event.systemId)}, ${mysql.escape(event.userId)}, ${mysql.escape(event.systemPhoto)}, ${mysql.escape(event.title)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Read Functions

exports.handler.getPursuits = function(event, context) {
  var sql = "SELECT * FROM Pursuits WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

exports.handler.getListOfUserSystems = function(event, context) {
  var sql = "SELECT * FROM Pursuits WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

exports.handler.getListOfSystems = function(event, context) {
  var sql = "SELECT * FROM Pursuits";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}


// Update Functions

exports.handler.updatePursuitPhoto = function(event, context) {
  var sql = "UPDATE Pursuits SET systemPhoto = ${mysql.escape(event.systemPhoto)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updateSystemTitle = function(event, context) {
  var sql = "UPDATE Pursuits SET title = ${mysql.escape(event.title)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}
