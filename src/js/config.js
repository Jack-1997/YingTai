// 配置
// 依赖
require.config({
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery3.1.1',
		gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		text:'text',
		head:'../html/header.html',
		lunbo:'../lib/jquery.lxCarousel/jquery.lxCarousel',
		lunbo02:'../lib/jquery.lxCarousel/jquery.lx02Carousel',
		foot:'../html/footer.html'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
		lunbo:['jquery']
	}
});