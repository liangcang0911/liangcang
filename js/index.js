//================获取人气商品=======================
var oGoods = document.querySelector('#hot-goods');
    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {}, function(err,responseText){
      var json = JSON.parse(responseText);
      var data = json.data;
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
//      console.log(obj);
        oGoods.innerHTML += `<li>
        	<div class="goods">
						<a href="#" class="pic">
							<img src="${obj.goods_thumb}"/>
						</a>
						<a href="#" class="txt">
							<p class="price">${obj.price}</p>
							<p class="tit">${obj.goods_name}</p>
							<p class="describe"> ${obj.goods_desc}</p>
						</a>
					</div>
					<div class="like">
						<a href="#" class="logo">
							<img src="../images/932_1504775977.jpg"/>
							知日
						</a>
						<a href="#" class="love">
							238
							<img src="../images/love_notice26_28.png"/>							
						</a>
					</div>    
        </li>`
      }
    });
    
//=================头部吸顶效果=======================================
var oNav =document.querySelector('#items-nav');
var topDis = getAllTop(oNav);
window.onscroll = function(e) {
  var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(nowTop >= topDis) {
    oNav.style.position = 'fixed';
    oNav.style.zIndex = '999';
    oNav.style.top = 0;
    oNav.style.left = 0;
    oNav.style.marginTop = 0;
  }else {
    oNav.style.position = 'relative';
    oNav.style.zIndex = 0;
  }
};
function getAllTop(obj) {
  var allTop = obj.offsetTop;
  while(obj = obj.offsetParent) {
    allTop += obj.offsetTop;
  }
  return allTop;
}
 
// ============搜索框动画========================
var oSearch = document.querySelector('#search-ipt');
var oBtn = document.querySelector('#search-btn');
var n = true;
oBtn.onclick = function () {
	animate(oSearch,{"left":0},500);
	oBtn.parentElement.style.borderBottomColor = "black";
}

//==========banner轮播图========================
var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");

var oRolling = document.getElementById("banner");
var oMUnit = document.getElementById('banner-pic');
var oMUnit2 = document.getElementById('circle');
var oListUl = oMUnit.getElementsByTagName('ul')[0];
var oLis1 = oListUl.getElementsByTagName('li');
var oLis2 = oMUnit2.getElementsByTagName('li');
var oIs = oMUnit2.getElementsByTagName('i');
var listlength = oLis1.length;

var width = 1000;
var animatetime = 800;
var tweenString = "Linear";
var interval = 3000;
var index = 0;
var nowTimer ;

oRolling.onmouseover = function(){
  clearInterval(nowTimer);
}
oRolling.onmouseout = function() {
  nowTimer = setInterval(rightBtnHandler, interval);
}

oListUl.appendChild(oLis1[0].cloneNode(true));

oRight.onclick = rightBtnHandler;
oLeft.onclick  = function() {
  if (oMUnit.isAnimated) return;
  
  index--;
  if (index < 0) {
    index = listlength - 1;
    oMUnit.style.left = -width * listlength + 'px';
  }
  changeCircles();
  animate(oMUnit, {"left": -width*index}, animatetime, tweenString);
}

for (var i = 0; i < oLis2.length; i++) {
  (function(i){
    oLis2[i].onmouseover = function() {
      if (oMUnit.isAnimated) return;
      index = i;
      changeCircles();
      animate(oMUnit, {"left": -width*index}, animatetime, tweenString);
    }
  })(i);
}

function rightBtnHandler() {
  //如果本身在运动，则不做任何事
  if (oMUnit.isAnimated) return;

  index++;
  
	animate(oMUnit, {"left":-width*index}, animatetime, tweenString,function () {
		if(index === listlength){
		  	index = 0;
		  	this.style.left = '0px';
		  }
	});
  changeCircles();
}

//更换小圆点
function changeCircles() {
  //n是信号量的副本
  var n = index;
if (n === listlength) {
    n = 0;
}
  for (var i = 0; i < oIs.length; i++) {
    oIs[i].style.backgroundColor = '#E8E8E8';
  }
  oIs[n].style.backgroundColor = 'black';
}







































