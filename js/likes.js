const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions

exports.handler.createLikes = function(event, context) {
  var sql = "INSERT INTO PostLikes (postId, likeInfo) VALUES (${mysql.escape(event.postId)}, ${mysql.escape(event.likeInfo)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Get Functions

exports.handler.getLikes = function(event, context) {
  var sql = "SELECT * FROM PostLikes WHERE postId = ${mysql.escape(event.postId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
};
