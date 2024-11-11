
//are you in the system?
function checkName(){
var Name=document.getElementById("Name").value;
if( Name === "Divyang Verma" || Name === "Ben Hall" || Name === "Hacker"){// Replace Divyang Verma/Ben Hall/ Hacker with MySQL or access to php/sql
	alert("Your password and username is already are in our system");
}
}

//for telling the username
function checkUserName(){
var user = document.getElementById("user").value;
document.cookie = "USER="+user; 
alert("Your Username is:   " + user);              																																																																																																																																																																													 
}

//for telling the password
function checkPassword(){
var pass = document.getElementById("pass").value;
document.cookie = "PASS="+pass; 
//alert("Your Password is:   " + pass.length);
}

// the real checking
function checkEmail(){
const email=document.getElementById("email").value;
if( email === "12733@stjoebears.com" || email==="random@gmail.com" || email==="hacker@gmail.com"){ // also use SQL/php for email
checkName();
}

else{//This is bad, don't do this
// want a mail?
var str = "Send a email to you!";
var result = str.link("mailto: email");
document.getElementById("demo").innerHTML = result;
checkUserName();
checkPassword();
alert("Thank you for Signing up");
move();
}
}

///////////////////

function displayCookies() {
var fname=getCookie("firstname");
if (fname==null) {fname="";}
if (fname!="") {fname="firstname="+fname;}
var lname=getCookie("lastname");
if (lname==null) {lname="";}
if (lname!="") {lname="lastname="+lname;}
alert (fname + " " + lname);
}
function getCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1);
if (c.indexOf(nameEQ) != -1) return c.substring(nameEQ.length,c.length);
}
return null;
} 
