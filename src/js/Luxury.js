/*
	列表页
		名品馆js文件
 */
require(['config'],function(){
	require(['jquery','text!head','lunbo02','text!foot'],function($,head,lunbo02,foot){
		$('header').html(head);
		$('.mp_focusin').lx02Carousel({
			imgs:['./img/a1.jpg','./img/a2.jpg','./img/a3.jpg'],
			page:true,
			autoPlay:true,
			width:700,
			height:400,			
		});

		$('.mp_focus02_inside').lx02Carousel({
			imgs:['./img/b1.jpg','./img/b2.jpg','./img/b3.jpg'],
			page:true,
			autoPlay:true,
			width:470,
			height:195,
			type:'vertical',
			data:[
	            '女人对于裙子的执迷是不分季节的，火辣的夏日更是穿美裙秀身材的好时间！',
	            '美裙和精致的包包准备好了，就差一双百搭又时髦的高跟鞋啦！FERRAGAMO、JIMMY CHOO等必备款3000元封顶！',
                '博柏利（Burberry）是极具英国传统风格的奢侈品牌，其多层次的产品系列满足了不同年龄和性别消费者需求，享誉全球。'
                ]

		});

		var flog=true;
		$('#show_more_txt').on('click',function(e){
			e.preventDefault();
			if(flog){
				$(this).text('收回所有');
				$('.brand_list_hidden').css('height',289);
				$('.mp_price').css('display','none');
				$('#show_more_btn').css('display','none');
				flog=false;
			}else{
				$(this).text('展开所有');
				$('.brand_list_hidden').css('height',0);
				$('.mp_price').css('display','block');
				flog=true;
			}	
		})
		

		var pageNo = 1;
		var lastPage = 1;
		//获取后端接口数据
		$.ajax({
			url:'./api/goods.php',
			data:{pageNo:pageNo,qty:10},

			// 设定返回数据类型
			dataType:'json',

			success:function(res){
				var $ul = $('<ul/>').addClass('.mushroom-cate-b-b cf');
				var html = res.data.map(item=>{
						return `
							<li>
								<div class='c-pictxt-150'>
									<div class='c-pic'>
										<a href="html/details.html?id=${item.id}"><img src="${item.imgurl}" alt="" /></a>
									</div>
									<div class='c-pt-detail'>
										<div class='c-brand'>
											<a href="">${item.title}</a>
										</div>
										<div class='c-tit'>
											<a href="">${item.descript}</a>
										</div>
										<div class='c-oprice'>
											<em>${item.price}</em>
											<s>${item.oldprice}</s>
										</div>
									</div>
								</div>
							</li>
						`
					}).join('');
				$ul.html(html).appendTo('.productlist-area');
			}
		});

		$('footer').html(foot);
	})
})























