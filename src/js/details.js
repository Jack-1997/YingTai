/*
	详情页js文件
 */

require(['config'],function(){
	require(['jquery','text!head','text!foot'],function($,head,foot){
		$('header').html(head);
		$('footer').html(foot);

		//截取字符获取商品id
		var params=location.search.slice(1).split('&');
		var goodsid;
		params.forEach(function(item){
			var arr=item.split('=');
			if(arr[0]=='id'){
				goodsid=arr[1];
			}
		});
		console.log(goodsid);

		//利用ajax获取数据
		$.ajax({
			url:'./api/details.php',
			data:{id:goodsid},

			// 设定返回数据类型
			dataType:'json',

			success:function(res){
				//生成html
				console.log(res);
				
					var $xt=$('<div/>');
					// $xt.html('<div>1232324</div>')
					$xt.html(`
						<div class="crumbs">
							<span>
								<a href="">${res.title}</a>
								$nbsp;>$nbsp;
							</span>
							<span>
								<a href="">${res.descript}</a>
							</span>
						</div>
						<div class='y-pro-goods clearfix'>
							<div class="y-pro-goods">
								<div class="p-info">
									<h1 class="p-tit">
										${res.descript}
									</h1>
									<div class="priceInfo">
										<p class="YTPrice">
											<span>直降价：</span>
											<strong class='qd-num'>
												${res.price}.
												<em>00</em>
											</strong>
										</p>
										<div class="marketPrice">
											<div class="marketPriceNum">
												银泰价：
												<span class='yt-num'>
													${res.oldprice-500}.00
												</span>
												参考价：
												<span>
													${res.oldprice}.00
												</span>
											</div>
										</div>
									</div>
									<div class='p-benefit'>
										<div>
											<span class='yellowLabel'>
												<strong>直降</strong>
												<em></em>
											</span>
											活动时间：7月4日 11:00~7月31日 17:00                       
										</div>
									</div>
									<div class='productInfo'>
										<div class="productInfoKey">
											<div class="J_ShopCartSkin">
												 <p class="J_NoticeInfo">
												 	请选择您要的商品信息
												 	<b class="J_Close">X</b>
												</p>
												<div class="productSKU">
												 	<dl class>
												 		<dt class='sel-show s-s-color'>选择颜色</dt>
												 		<dd class="sel">
												 			<div class="res select">
												 				<b></b>
												 				<a href="">
												 					<img src="" alt="" />
												 					<span>蓝色+白色</span>
												 				</a>
												 			</div>
												 		</dd>
												 	</dl>
												 	<dl class='selSize'>
												 		<dt class='sel-show s-s-size'>
												 			<span>选择尺码：</span>
												 		</dt>
												 		<dd class='sel'>
												 			<div ></div>
												 		</dd>
												 	</dl>
												 	<div class="p-buy" sku="21-411-9174">
                        							<div class="p-num" id="setCount">
							                            <div class="fl">
							                                <input type="number" maxlength="2" id="buyNum" step="1" max="99" min="1" value="1">
							                            </div>
							                            <div class="fl">
							                                <a class="p-num-add" id="addNum" href="#"></a>
							                                <a class="p-num-red" id="reduceNum" href="#"></a>
							                            </div>
                        							</div>
                        							<div id="addCart">
														<button title="立即购买" class="buynow buyit">
														</button><button id="Y_incart" class="incart" title="加入购物车"></button>
                        							</div>
                        							<div class="tipbox tip-valid ">
                            							<div class="tipbox-i">
                                							<p>请选择尺码</p>
                                							<div class="downarrow"></div>
                            							</div>
                        							</div>
                    							</div>
											</div>
										</div>

									</div>
								</div>
								<div class='Y_picBox'>
									<div class='pic-show' >
									<a href=""><img src="${res.imgurl}" alt="" /></a>
									</div>
								</div>
							</div>
						</div>
					`);
				

				$xt.appendTo($('.gird'));
			}
		})
	})
})













































