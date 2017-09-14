var ogoods = document.querySelector('#goods');
var obuyin = document.querySelector('#buyin');
var op = document.querySelector("p[id=goodsdesc]")
var goods_id = getQueryString('goods_id');
myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {
  // goods_id: goods_id ES5
  goods_id //ES6
}, function(err, responseText){
  var json = JSON.parse(responseText);
  var obj = json.data[0];
  console.log(obj)
  op.innerHTML = `${obj.goods_name}>`
  
  ogoods.innerHTML = `
  <div>
    <div id="picshow"><img src="${obj.goods_thumb}"></div>
  </div>
  `;
  
  obuyin.innerHTML = `
        <div id="presslike"><i></i> 237</div>
				<div id="gdname"><a href="#">知日</a></div>
				<div class="gdname">${obj.goods_name}</div>
				<div id="gdprice">价格 : <span>¥${obj.price}</span></div>
				<div id="s-icon"><span id="span1"></span>免运费&nbsp;<span id="span2"></span>&nbsp;&nbsp;&nbsp;正品授权</div>
			    <div id="gdtype">星级 : <span>☆☆☆</span></div>
			    <div id="gdnum">数量 : 
			    	<i id="jian"></i>
			    	<span id="num">1</span>
			    	<i id="jia"></i>
			    </div>
			    <div><input type="button" id="add-to-cart" value="立即购买"></div>
			    <div id="buyout">
			    	<a href="#" id="a1" class="add-to-cart"><i></i>加入购物车</a>
			    	<a href="#" id="a2"><i></i>分享</a>
			    </div>`;
			    var ospan = document.querySelector("span[id=num]") 
			    var ojian = document.querySelector("i[id=jian]") 
			    var ojia = document.querySelector("i[id=jia]") 
			    console.log(ojian)
			    ojian.onclick = function(){
			    	ospan.innerText -=1
			    	if(ospan.innerText <= 0){
			    		ospan.innerText =0
			    	}
			    }
			    ojia.onclick = function(){
			    	ospan.innerText=parseInt(ospan.innerText)+1
			    	if(ospan.innerText > 10){
			    		ospan.innerText = 10
			    	}
			    }
});
var oa = document.querySelector("a[id=catname]")
myajax.get('http://h6.duchengjiu.top/shop/api_cat.php', {
  // goods_id: goods_id ES5
  goods_id //ES6
}, function(err, responseText){
  var json = JSON.parse(responseText);
  var obj = json.data[0];
  console.log(obj)
  oa.innerHTML = `${obj.cat_name}>`
  });
  
  document.body.onclick = function(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.className === 'add-to-cart') {
        if (!localStorage.token) {
          alert('请先登录再购买');
          //把当前商品的详细地址存储到localStorage.backurl
          localStorage.backurl = location.href
          //跳转到登录页
          location.href = "sign-in.html";
          return;
        }
        console.log('添加到购物车');
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
        {goods_id, number:1},
        function(err, responseText) {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
            alert('添加到购物车成功');
          }
        })
      }
   }