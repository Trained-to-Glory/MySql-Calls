const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions

exports.handler.createAccountDetails = function(event, context) {
  var sql = "INSERT INTO AccountDetails (userId, email, userBio) VALUES (${mysql.escape(event.userId)}, ${mysql.escape(event.email)}, ${mysql.escape(event.userBio)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Update Functions

exports.handler.updateBio = function(event, context) {
  var sql = "UPDATE AccountDetails SET userBio = ${mysql.escape(event.userBio)}} WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Read Functions

exports.handler.getAllAccountDetails = function(event, context) {
  var sql = "SELECT userName, fullName,  email, userBio FROM AccountDetails, Account WHERE AccountDetails.${mysql.escape(event.userId)} = Account.${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

exports.handler.getAccountDetails = function(event, context) {
  var sql = "SELECT * FROM AccountDetails WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
