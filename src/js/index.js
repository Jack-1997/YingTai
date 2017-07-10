/*
	首页js文件
 */
require(['config'],function(){
	require(['jquery','text!head','lunbo','text!foot'],function($,head,lunbo,foot){
		$('header').html(head);
		$('#lbt').lxCarousel({
			imgs:['./img/banner01.jpg','./img/banner02.jpg','./img/banner03.jpg','./img/banner04.jpg','./img/banner05.jpg'],
			page:true,
			autoPlay:false,
			width:1190,
			height:470,
			bgurl:["./css/img/banner01bg.jpg","./css/img/banner02bg.jpg","./css/img/banner03bg.jpg","./css/img/banner04bg.jpg","./css/img/banner05bg.jpg"]
		});

		$('.nav1').eq(1).hide();
		$('.nav1').eq(2).hide();
		$('.daohang01').on('mouseenter','li',function(e){
			e = e || window.event;
			var target = e.target;
			var idx=$(this).index();
			$(this).addClass('eva-switchable-active').siblings().removeClass('eva-switchable-active');
			$('.nav1').eq(idx).show().siblings().hide();			
		})

		$('.daohang02').on('mouseenter','li',function(e){
			e = e || window.event;
			var target = e.target;
			var idx=$(this).index();
			$(this).addClass('eva-switchable-active').siblings().removeClass('eva-switchable-active');
			$('.gl').eq(idx).show().siblings().hide();			
		})

		//生成html结构
		var opt=[
			{
				name:"时尚名品",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"针织衫","外套","裙装","围巾","腰带","女鞋","女包","男包","钱包","男鞋","衬衫","双肩包"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/luxurybanner01.jpg',
				imgurl:['./img/luxury01.jpg','./img/luxury02.jpg','./img/luxury03.jpg','./img/luxury04.jpg']
			},
			{
				name:"潮流女装",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"连衣裙","衬衫","T-恤","休闲裤","半身裙","卫衣","针织衫","风衣","牛仔裤","颜域","洛可可","QEEXI"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/trandbanner.jpg',
				imgurl:['./img/trend_01.jpg','./img/trend_02.jpg','./img/trend_03.jpg','./img/trend_04.jpg']
			},
			{
				name:"精品男装",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"衬衫","T-恤","短裤","卫衣","针织衫","牛仔","夹克/外套","牛仔裤","大衣","美国马球","viishow","俞兆林"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/mensbanner.jpg',
				imgurl:['./img/mens_01.jpg','./img/mens_02.jpg','./img/mens_03.jpg','./img/mens_04.jpg']
			},
			{
				name:"时尚鞋靴",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"新春上市","男士单靴","女士单靴","平底鞋","坡跟鞋","乐福鞋","豆豆鞋","休闲鞋","正装鞋","帆布鞋","鱼嘴鞋","高跟鞋"
						],
				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/footwearbanner.jpg',
				imgurl:['./img/footwear_01.jpg','./img/footwear_02.jpg','./img/footwear_03.jpg','./img/footwear_04.jpg']
			},
			{
				name:"潮流箱包",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"女士单肩","女士跨斜","女士双肩","女士钱包","女士多种","女士手提","男士单肩","男士手提","男士钱包","男士腰带","旅行双肩","旅行箱"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/bagsbanner.jpg',
				imgurl:['./img/bags_01.jpg','./img/bags_02.jpg','./img/bags_03.jpg','./img/bags_04.jpg']
			},
			{
				name:"美容护肤",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"面膜","护肤套装","乳液","护肤液","爽肤水","洁面","眼霜","身体护理","BB霜","男士护理","女士香水","唇膏口红"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/beautybanner.jpg',
				imgurl:['./img/beauty_01.jpg','./img/beauty_02.jpg','./img/beauty_03.jpg','./img/beauty_04.jpg']
			},
			{
				name:"户外运动",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"短袖T-恤","POLO衫","短裤","运动裤","泳装","凉鞋/拖鞋","复古鞋","帆布鞋","跑步鞋","篮球鞋","运动箱包","户外装备"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/outdoorbanner.jpg',
				imgurl:['./img/outdoor_01.jpg','./img/outdoor_02.jpg','./img/outdoor_03.jpg','./img/outdoor_04.jpg']
			},
			{
				name:"内衣配饰",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"文胸","底裤","家居服","吊带","塑身","袜品","黄金","翡翠玉石","珍珠","钻石","男士手表","太阳镜"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/underwearbanner.jpg',
				imgurl:['./img/underwear_01.jpg','./img/underwear_02.jpg','./img/underwear_03.jpg','./img/underwear_04.jpg']
			},
			{
				name:"可爱婴童",
				arr:[
					'yt_floor_mp',
					'yt_floor_wz',
					'yt_floor_nz',
					'yt_floor_xx',
					'yt_floor_xb',
					'yt_floor_hf',
					'yt_floor_hw',
					'yt_floor_ps',
					'yt_floor_ty',
				],
				

				navlist:[
						"短衫T-恤","连衣裙","爬爬服","防辐射服","打底裤","休闲裤","孕产妇","运动鞋","幼婴套装","四件套","床单/被套","薄被"
					],

				lbturl:[
				'./img/types01_1.jpg','./img/types01_2.jpg','./img/types01_3.jpg','./img/types01_4.jpg','./img/types02_1.jpg','./img/types02_2.jpg','./img/types02_3.jpg','./img/types02_4.jpg','./img/types03_1.jpg','./img/types03_2.jpg','./img/types03_3.jpg','./img/types03_4.jpg'
				],

				bannerurl:'./img/sweetbanner.jpg',
				imgurl:['./img/sweet_01.jpg','./img/sweet_02.jpg','./img/sweet_03.jpg','./img/sweet_04.jpg']
			}
		]   

		opt.forEach(function(item,idx){
			//根据索引值添加类名
			var some=$('<div/>').addClass('yt-wrap').addClass('yt_floor_item').addClass(item.arr[idx]);

			//遍历数据生成li
			var html =item.navlist.map(function(i,index){
				return `<li><a href="#">${item.navlist[index]}</a></li>`
			}).join('');

			var dnc=item.imgurl.map(function(j,ind){
				return `					
						<div class='product_block'>
							<div class='img_wrap'>
								<a href=""><img src="${item.imgurl[ind]}" width="270" height="180" alt="" /></a>
							</div>
						</div>					
				`
			}).join('');

			some.html(
			`
			<div class='floor_title'>
				<a href="#"><h6 class='fashion'></h6></a>
			</div>
			<div class='floor_nav'>
				<ul class='floor_nav_category'>
					${html}
				</ul>
				<div class='floorbarndSlide'>
					<div class='scroller'>

					</div>
				</div>
				
			</div>
							 	<a href=""><img src="${item.bannerurl}" alt="" />		
			<div class='floor_banner'>
				<div class='floor_banner_main'>
					${dnc}
				</div>
			</div>
			`
			);

			some.appendTo($('.floor'));
		})
		
		$('footer').html(foot);
	})

})
