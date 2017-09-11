/**
 * Created by Administrator on 2017/9/9.
 */


var str = location.search.substr(1);
//console.log(str);
var goodsid = str.split("=");
//console.log(catId);
console.log(goodsid[1]);

function details() {
    var oUl=document.querySelector("#details");
    var request=new XMLHttpRequest();
    request.open("GET","http://h6.duchengjiu.top/shop/api_goods.php?goods_id="+goodsid[1]);
    request.onload=function () {
        var result=JSON.parse(request.response);
        console.log(result);
        datas=result.data;
        console.log(datas)
        oUl.innerHTML+="<li class='thumb'><img src='"+datas[0].goods_thumb+"'/></li><li class='desc'>"+datas[0].goods_desc+"</li><li class='name'>"+datas[0].goods_name+"</li><li class='price'><span>￥"+datas[0].price+"</span><button><a href='#'>添加购物车</a></button></li>";

    };
    request.send();
}
details();