/**
 * Created by Mcdd on 2023/1/7.
 */
function login() 
{
    var username = document.getElementById("username");
    var password = document.getElementById("password");
 
    if (username.value == "") {
 
        alert("请输入用户名");
 
    } else if (password.value  == "") {
 
        alert("请输入密码");
 
    } else if(username.value == "administrator" && password.value == "minecraft666"){
 
        window.location.replace('https://service-mcdd.github.io/Login/welcome.html')
 
    } else {
 
        alert("请输入正确的用户名和密码！")
 
    }
}
