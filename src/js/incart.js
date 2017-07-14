require(['config'],function(){
	require(['jquery','text!head','text!foot','common'],function($,head,foot){
		$('header').html(head);
		$('footer').html(foot);
		$('#J-MiniCart').remove();
		$('.isearch').remove();
		$('.itype').remove();
		$('.hdmenu').remove();

		//利用cookie数据生成结构
		var goodslist=getCookie('goodslist');
		console.log(goodslist);

		if(goodslist.length>0){
			// 把json字符串转成对象
			goodslist = JSON.parse(goodslist);
		}else{
			goodslist = [];
		}

		var totalPrice = 0;

		var div =$('<div/>').addClass('AProduct').addClass('areacolor');
		[div].innerHTML = goodslist.map(function(item){
			console.log(item.price.slice(1));
			var Price=item.price.slice(1);

			 totalPrice += Price*item.qty;
			 return `
				<div class='category th-chk'>
					<div>
						<input type="checkbox" checked class='J-willing'>
						<label for="J-UpCheck" class='J-SelectPro checked'></label>
					</div>
				</div>
				<div class='category th-item'>
					<div class='property'>
						<div class="pro-img">
							<a href="">
								<img src="${item.imgurl}" alt="" />
							</a>
						</div>
						<div class="pro-title">
							<a href="">${item.descript}</a>
						</div>
					</div>
				</div>
			 `
		})
		div.appendTo($('.areacolor'))
		
	})
});