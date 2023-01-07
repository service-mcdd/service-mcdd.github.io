/**
 * Created by Mcdd on 2023/1/7.
 */
function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("pass");
 
    if (username.value == "") {
 
        alert("请输入用户名");
 
    } else if (pass.value  == "") {
 
        alert("请输入密码");
 
    } else if(username.value == "administrator" && pass.value == "minecraft666"){
 
        window.location.href="welcome.html";
 
    } else {
 
        alert("请输入正确的用户名和密码！")
 
    }
}
