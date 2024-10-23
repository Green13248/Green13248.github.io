function saveAccount(){
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "blabla",
  database: "idk_DB"
});

con.connect(function(err) {
  if (err) throw err;
console.log("connected");
});

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var psw = document.getElementById("password");
var userName = document.getElementById("userName");
var email = document.getElementById("email");



var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('"+userName+ "', '"+firstName+"','"+lastName+"','"+email+"','"+psw+"')";
con.query(sql, function (err, result) {
    if (err) {
        throw err;

    }

    console.log(result.affectedRows + " record(s) updated");
  });
}
