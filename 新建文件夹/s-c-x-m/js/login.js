/**
 * Created by Administrator on 2017/9/12.
 */

var oUsername=document.querySelector("input[name=username]");
var oPassword=document.querySelector("input[name=password]");
var oSubmit=document.querySelector("input[name=submit]");
var oDenglu=document.querySelector(".login-denglu");
var oTuichu=document.querySelector(".login-tuichu");
oSubmit.onclick=function () {
    myajax.post('http://h6.duchengjiu.top/shop/api_user.php',{
        status:"login",
        username: oUsername.value,
        password: oPassword.value
    },function (error,responreText) {
        result = JSON.parse(responreText);
        console.log(result);
        if(result.code==0){
            alert(result.message);
            //location.href="index.html";
            oDenglu.style.display="none";
            oTuichu.style.display="block";
        }else{
            alert(result.message);
        }
    });
}
