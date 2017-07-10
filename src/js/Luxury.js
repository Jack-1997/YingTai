/*
	列表页
		名品馆js文件
 */
require(['config'],function(){
	require(['jquery','text!head','lunbo02','text!foot'],function($,head,lunbo02,foot){
		$('header').html(head);
		$('.mp_focusin').lx02Carousel({
			imgs:['../img/a1.jpg','../img/a2.jpg','../img/a3.jpg'],
			page:true,
			autoPlay:true,
			width:700,
			height:400,			
		});

		$('.mp_focus02_inside').lx02Carousel({
			imgs:['../img/b1.jpg','../img/b2.jpg','../img/b3.jpg'],
			page:true,
			autoPlay:true,
			width:700,
			height:400,
			data:[
		            '女人对于裙子的执迷是不分季节的，火辣的夏日更是穿美裙秀身材的好时间！',
		            '美裙和精致的包包准备好了，就差一双百搭又时髦的高跟鞋啦！FERRAGAMO、JIMMY CHOO等必备款3000元封顶！',
                    '博柏利（Burberry）是极具英国传统风格的奢侈品牌，其多层次的产品系列满足了不同年龄和性别消费者需求，享誉全球。'
                ];

		});
	})
})























