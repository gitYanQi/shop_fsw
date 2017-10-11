/**
 * Created by Administrator on 2017/9/8.
 */

var oCarousel=document.querySelector(".coursel");
var oImg=document.querySelector(".print").getElementsByTagName("img");
var oBtn=document.querySelector(".btn");
var leftBtn=document.querySelector(".leftbtn");
var rightBtn=document.querySelector(".rightbtn");
var circle=document.querySelector(".circle").getElementsByTagName("li");
var index=0;
var timer;

oCarousel.onmouseover=function () {
    oBtn.style.display="block";
    clearInterval(timer);
};
oCarousel.onmouseout=function () {
    oBtn.style.display="none";
    clearInterval(timer);
    timer=setInterval(function () {
        index++;
        if(index>oImg.length-1){
            index=0;
        }
        move();
    },3000);
}

timer=setInterval(function () {
    index++;
    if(index>oImg.length-1){
        index=0;
    }
    move();
},3000);


leftBtn.onclick=function () {
    index--;
    if(index<0){
        index=oImg.length-1;
    }
    move();
};

rightBtn.onclick=function () {
    index++;
    if(index>oImg.length-1){
        index=0;
    }
    move();
};


for(var i=0;i<circle.length;i++){
    (function (i) {
        circle[i].onmouseover=function () {
            index=i;
            move();
        }
    })(i);
}


function move() {
    for(var i=0;i<circle.length;i++){
        circle[i].className="";
    }
    circle[index].className="current";

    for(var i=0;i<oImg.length;i++){
        oImg[i].className="";
    }
    oImg[index].className="current";

}


//返回顶部按钮
function back() {
    var back=document.querySelector(".back-to-top");
    setInterval(function () {
        if(scrollY>0){
            back.style.cssText="display:block";
        }else{
            back.style.cssText="display:none";
        }

        back.onclick=function () {
            back.style.cssText="scrollY:0";
        }

    },100);
}
back();