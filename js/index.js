//热门商品
var oGoods = document.querySelector('#hot-goods');
    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {}, function(err,responseText){
      var json = JSON.parse(responseText);
      var data = json.data;
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        console.log(obj);
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