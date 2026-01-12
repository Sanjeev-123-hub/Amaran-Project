function login()
{
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    
    var realusername= "Sanjeev"
    var realpassword= "Sanjeev$2007"
    if(username==realusername && password==realpassword)
    {
    window.open("afterloginindex.html","_blank")
    alert("Login Successfully")
    }
    else
    {
        alert("Wrong Credential")
    }    
}