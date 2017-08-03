const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// Create Functions

exports.handler.createSteps = function(event, context) {
  var sql = "INSERT INTO PursuitSteps (systemId, userId, steps) VALUES (${mysql.escape(event.systemId)}, ${mysql.escape(event.userId)}, ${mysql.escape(event.steps)})";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};


// Toggle Functions

exports.handler.toggleStep = function(event, context) {
  var sql = "UPDATE PursuitSteps SET steps.${mysql.escape(event.stepId)}.isVisible = ${mysql.escape(event.steps.stepId.isVisible)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Add Functions
exports.handler.addStepToList = function(event, context) {
  var sql = "UPDATE PursuitSteps SET steps = ${mysql.escape(event.steps)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Update Functions

exports.handler.changeStepInfo = function(event, context) {
  var sql = "UPDATE PursuitSteps SET steps.${mysql.escape(event.stepId)}.text = ${mysql.escape(event.steps.stepId.text)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

exports.handler.changeStepPosition = function(event, context) {
  var sql = "UPDATE PursuitSteps SET steps.${mysql.escape(event.stepId)}.position = ${mysql.escape(event.steps.stepId.position)} WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
}

// Get Functions

exports.handler.getUserPursuitsSteps = function(event, context) {
  var sql = "SELECT * FROM PursuitSteps WHERE userId = ${mysql.escape(event.userId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}

exports.handler.getPursuitsSteps = function(event, context) {
  var sql = "SELECT * FROM PursuitSteps WHERE systemId = ${mysql.escape(event.systemId)}";
  connection.query(sql, function (err,result) {
    if(err) throw err;
    else return result;
  });
}
