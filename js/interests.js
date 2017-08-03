const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create functions

exports.handler.createInterestsList = function(event, context) {
  var sql = "INSERT INTO Interests (interestsId, interestsName) VALUES (${mysql.escape(event.interestsId)}, ${mysql.escape(event.interestsName)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Read Functions
exports.handler.viewInterestList = function(event, context) {
  var sql = "SELECT * FROM Interests";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
