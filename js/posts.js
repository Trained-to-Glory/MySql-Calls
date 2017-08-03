const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions
exports.handler.createPost = function(event, context) {
  var sql = "INSERT INTO Posts (postId, userId, photo, created, description, isVisible) VALUES (${mysql.escape(event.postId)}, ${mysql.escape(event.userId)}, ${mysql.escape(event.photo)}, ${mysql.escape(event.created)}, ${mysql.escape(event.description)}, ${mysql.escape(event.isVisible)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Read Functions

exports.handler.getListOfUserPosts = function(event, context) {
  var sql = "SELECT * FROM Posts WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
};

exports.handler.getListPosts = function(event, context) {
  var sql = "SELECT * FROM Posts WHERE postId = ${mysql.escape(event.postId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
};

// Update Functions

exports.handler.updatePostDescription = function(event, context) {
  var sql = "UPDATE Posts SET description = ${mysql.escape(event.description)} WHERE postId = ${mysql.escape(event.postId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Hide Functions

exports.handler.hidePosts = function(event, context) {
  var sql = "UPDATE Posts SET isVisible = ${mysql.escape(event.isVisible)} WHERE postId = ${mysql.escape(event.postId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}
