//如果定义的模块需依赖其他模块，格式如下
define(['jquery'],function($){//jQuery
	return function(){
		$('#box').text()*100;
	}
})