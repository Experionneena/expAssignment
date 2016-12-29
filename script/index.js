var response; 
var username=document.getElementById("username").value;


function validate() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     response = JSON.parse(this.responseText);
     console.log("response" , response);
     if(response.status == 200 && response.message == "Login sucessfull"){
       console.log("successfull");
       window.location="index2.html";
     }
     else if(response.status == 403 && response.message == "Username and password not correct"){
       window.alert("Enter valid username and password");
     }
    }
  };
 
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
var stringsend="userName="+username+"&password="+password;
console.log("string",stringsend);
xhttp.open("POST","https://exptest.herokuapp.com/api/login",true);
xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
xhttp.send(stringsend);
    var matching=username.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    if(matching==null)
    {
      window.alert("invalid mail format");
    }

} 


