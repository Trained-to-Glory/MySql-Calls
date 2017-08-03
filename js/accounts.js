const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create functions

exports.handler.addUser = function(event, context) {
  var sql = "INSERT INTO Account (userId, userName, userPhoto, fullName, isLeader) VALUES (${mysql.escape(event.userId)}, ${mysql.escape(event.userName)}, ${mysql.escape(event.userPhoto)}, ${mysql.escape(event.fullName)}, ${mysql.escape(event.isLeader)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Update Functions

exports.handler.updateLeaderStatus = function(event, context) {
  var sql = "UPDATE Account SET isLeader = ${mysql.escape(event.isLeader)} WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updateProfilePic = function(event, context) {
  var sql = "UPDATE Account SET userPhoto = ${mysql.escape(event.userPhoto)} WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.updateUserInfo = function(event, context) {
  var sql = "UPDATE Account as AC, AccountDetails as AD SET AC.userName = ${mysql.escape(event.userName)}, AC.userPhoto = ${mysql.escape(event.userPhoto)}, AC.fullName = ${mysql.escape(event.fullName)}, AC.isLeader = ${mysql.escape(event.isLeader)}, AD.userBio = ${mysql.escape(event.userBio)} WHERE AC.${mysql.escape(event.userId)} = AD.${mysql.escape(event.userId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Read functions

exports.handler.getAccount = function(event, context) {
  var sql = "SELECT * FROM Account WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
