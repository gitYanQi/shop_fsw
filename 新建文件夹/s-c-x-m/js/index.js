/**
 * Created by Administrator on 2017/8/18.
 */

var oDenglu=document.querySelector(".login-denglu");
var oTuichu=document.querySelector(".login-tuichu");
oTuichu.onclick=function () {
    oDenglu.style.display="block";
    oTuichu.style.display="none";
}

//助教的演示    没有用
// var a=document.querySelector(".login-denglu");
// var yhm=localStorage.getItem("liangcang");
// if(oUsername.value){
//     a.innerHTML=""+oUsername.value+"";
// }
//搜索框   搜索功能
var oInputSearch=document.querySelector(".inputSearch");
var oButtonSearch=document.querySelector(".buttonSearch");
oButtonSearch.onclick=function () {
    location.href = 'search.html?search_text='+this.value;
}


$(function () {


    // 获取导航栏
  $.get("http://h6.duchengjiu.top/shop/api_cat.php",function (result) {
          //console.log(result);
          var datas=result.data;
          var content="";
          datas.forEach(function (i) {
              content+='<li><a href="index.html?cat_id=' +i.cat_id+ '">' + i.cat_name +  '</a></li>';
          });
          $(".navigation").append(content);
  });

    //让导航栏 停在顶部
    var nav=$(".navigationView"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=150){
            nav.addClass("fixednav");
            $(".navTmp").fadeIn();
        }else{
            nav.removeClass("fixednav");
            $(".navTmp").fadeOut();
        }
    })





    /*
    影响全局的切割转换数组
     */
    //通过location.search获取get传参的数据 截取？后面的内容
    var str = location.search.substr(1);
    console.log(str);
    //用分割方法得到 = 号两边内容
    var catId = str.split("=")
   // console.log(catId);
    //用下标找到id的值
   // console.log(catId[1]);


    //获取热门商品
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_goods.php",
        "type": "GET",
        "data": {
            "cat_id": catId[1]
        },
        "dataType": "json",
        "success":function (result) {
            var datas=result.data;
            console.log(datas);
            var content="";
            datas.forEach(function (i) {
                content+='<li><a href="details.html?goods.id='+i.goods_id+'"><img src="' +i.goods_thumb+ '" /></a><p><a href="#">' +i.goods_name+ '</a></p><p>' +i.goods_desc+ '</p><p class="price">' +i.price+ '</p></li>';
            });
            $(".goods").append(content);
        }

    });






})

