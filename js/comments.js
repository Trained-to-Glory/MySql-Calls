const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions

exports.handler.createComment = function(event, context) {
  var sql = "INSERT INTO PostComments (postId, comment) VALUES (${mysql.escape(event.postId)}, ${mysql.escape(event.comment)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

// Get Functions

exports.handler.getListOfPostComments = function(event, context) {
  var sql = "SELECT * FROM PostComments WHERE postId = ${mysql.escape(event.postId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

// Delete Functions

exports.handler.removeComment = function(event, context) {
  var sql = "UPDATE PostComments SET comment.${mysql.escape(event.commentId)}.isVisible = ${mysql.escape(event.comment.commentId.isVisible)} WHERE postId = ${mysql.escape(event.postId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}
