<html>
  <title>一弩炸天下最爱的主页</title>
<script>
    document.title = 'bomb！一弩炸天下！'
    <link rel="icon" href="assetss/images/logo.png">
  </script>
<h1>
一弩炸天下的主页
</h1>
<h3> 
[关于我](https://service-mcdd.github.io/aboutme.html)
</h3>
<h3>
[留言板](https://service-mcdd.github.io/lyb-test/index.html)
</h3>
<h3>
[cps测试](https://service-mcdd.github.io/cps-tester/cps.html)
</h3>
<h3>
[跨年快乐](https://service-mcdd.github.io/otherhtml/index.html)
</h3>
<h3>
[显示时间](https://service-mcdd.github.io/time.html)
</h3>

<script>
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}
</script>
<body>

<h1>当前时间</h1>
<p id="demo">点击显示日期</p>

<button type="button" onclick="displayDate()">点我！</button>

</body>

<h1>
点击关闭网页
</h1>
<script language="javascript"> 
function custom_close() { 
if (confirm("您确定要关闭本页吗？")) { 
window.opener = null; 
window.open('', '_self'); 
window.close() 
} else {} 
} 
</script> 
<input id="btnClose" type="button" value="关闭本页" onClick="custom_close()" 
/> 
