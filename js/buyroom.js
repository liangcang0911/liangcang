var ogoods = document.querySelector('#goods');
var obuyin = document.querySelector('#buyin');
console.log(obuyin)
var goods_id = getQueryString('goods_id');
myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {
  // goods_id: goods_id ES5
  goods_id //ES6
}, function(err, responseText){
  var json = JSON.parse(responseText);
  var obj = json.data[0];
  
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
			    <div id="gdtype">数量 : <span>一份</span></div>
			    <div id="gdnum">数量 : 
			    	<i id="jian"></i>
			    	<span>1</span>
			    	<i id="jia"></i>
			    </div>
			    <button>立即购买</button>
			    <div id="buyout">
			    	<a href="#" id="a1"><i></i>加入购物车</a>
			    	<a href="#" id="a2"><i></i>分享</a>
			    </div>
  `;
});
