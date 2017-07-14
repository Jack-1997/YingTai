/*
	详情页js文件
 */

require(['config'],function(){
	require(['jquery','text!head','text!foot','common'],function($,head,foot){
		$('header').html(head);
		$('footer').html(foot);

		var pro=new Promise(function(resolve){

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
									> 
								</span>
								<span>
									<a href="">${res.descript}</a>
								</span>
							</div>
							<div class='y-pro-goods clearfix'>
								<div class='y-pro-place'>
									
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
														Number(${res.oldprice}).00
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
													 			<div class="item select">
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
	                        							
	                    							</div>
												</div>
											</div>

										</div>
									</div>
									</div>
									<div class='Y_picBox'>
										<div class='pic-show' >
											<img src="${res.imgurl}" data-big="${res.bigimgurl}" />
										</div>
									</div>
									
								
							</div>
						`);
					

					$xt.appendTo($('.gird'));
					resolve(res);
				}
			})
			
		});
		pro.then(function(res){

			$('.buynow').on('click',function(){
				// location.href="html/login.html";
				location="html/login.html";
			});
			$('#Y_incart').on('click',function(){
				// location.href="html/login.html";
				//location="html/reg.html";
				var tc=$('<div/>').addClass('tc');
				tc.html(`
						<a href="html/Luxury.html" class='close'></a>
						<h3 class='box-tips'>购物袋提醒</h3>
						<div class='box-content'>
							<p class="box-cart-strong">商品已经成功添加到购物袋</p>
							<p class='box-cart-btn'>
								<a href="html/incart.html" class="box-cart-pay">立即结算</a>
								<a href="html/Luxury.html" class="box-cart-clo">继续购物</a>
							</p>
						</div>
					`);
				tc.appendTo($('body'));

			});
			
			//购物车数据传入..................................................................
			$('body').on('click','.box-cart-pay',function(){
				var goodslist = getCookie('goodslist');
				if(goodslist.length>0){
					goodslist = JSON.parse(goodslist);
				}else{
					goodslist = [];
				}
				
				var currentGUID = res.id;
				
				var res2 = goodslist.filter(function(item){
					
				 	return item.id === currentGUID
				});
				
				if(res2.length>0){console.log( $('#buyNum').val());
					res2[0].qty+= Number($('#buyNum').val());
				}else{res.qty=Number($('#buyNum').val()) ;goodslist.push(res);}

				

				var goodslist=setCookie('goodslist',JSON.stringify(goodslist),null,'/');


			})

			$(".close").on('click',function(e){console.log(666)
				e.preventDefault();
				tc.remove();
			})
			var $small=$('.pic-show').addClass('gds-zoom');
			var $smallImg = $small.children('img');

			// 生成放大镜
			var $minzoom = $('<span/>').addClass('minzoom');
			$minzoom.appendTo($small);

			//生成大图
			var $big = $('<div/>').addClass('gds-bigzoom');

			var $bigImg = $('<img/>').attr('src',$smallImg.data('big'));
			$bigImg.appendTo($big);

			var gap=15;
			//设置大图定位
			//btop = $small.offset().top;
			bleft = $small.offset().left + $small.outerWidth() + gap;

			$big.css({
				top:0,
				left:bleft,
			});

			// 把大图写入页面
			$big.appendTo($('.Y_picBox'));

			//大图与小图的比例
			var ratio;

			$small.on('mouseenter',function(){
				$minzoom.show();
				$big.show();
				ratio = $bigImg.outerWidth()/$small.outerWidth();

				// 改变放大镜的大小
				// 与大图成比例
				// $minzoom.css({
				// 	width:opt.width/ratio,
				// 	height:opt.height/ratio
				// });
			}).on('mousemove',function(e){
				var left = e.pageX - $small.offset().left - $minzoom.outerWidth()/2;
				var top = e.pageY - $small.offset().top - $minzoom.outerHeight()/2;

				// 限制top,left值
				if(left<0){
					left = 0;
				}else if(left>$smallImg.outerWidth()-$minzoom.outerWidth()){
					left=$smallImg.outerWidth()-$minzoom.outerWidth()
				}

				if(top<0){
					top = 0;
				}else if(top>$smallImg.outerHeight()-$minzoom.outerHeight()){
					top=$smallImg.outerHeight()-$minzoom.outerHeight()
				}

				// 定位放大镜位置
				$minzoom.css({top:top,left:left});

				// 定位大图位置
				$bigImg.css({
					left:-left*ratio,
					top:-top*ratio
				})
			}).on('mouseleave',function(){
				$minzoom.hide();
				$big.hide();
			});

		});
		
	})
})













































