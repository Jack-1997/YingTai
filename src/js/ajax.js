// 定义模块
// 定义成模块的文件，可以在require方法的回调函数中引用
define(function(){
	return {
		random:function(){
			return parseInt(Math.random()*100);
		},
		ajax:function ajax(options){

			// 默认参数
			var defaults = {
				type:'get',
				async:true
			}

			var opt = Object.assign({},defaults,options);

			// 参数处理
			// opt.data=>{}
			// params = 'page=1&title=xxx'
			var params = '';
			if(opt.data){
				for(var attr in opt.data){
					params += attr + '=' + opt.data[attr] + '&';
				}

				// 去除多余的&
				params = params.slice(0,-1);
			}

			// jsonp请求
			if(opt.dataType === 'jsonp'){
				// 1.预设全局函数
				window.getData = function(res){
					if(typeof opt.success === 'function'){
						opt.success(res);
					}

					document.body.removeChild(script);
				}

				// 2.创建script标签，并写入页面
				var script = document.createElement('script');
				script.src = opt.url + '?' + params + '&callback=getData';
				document.body.appendChild(script);

				// jsonp请求结束，终止代码向下执行
				return;
			}

			// 异步请求对象兼容性处理
			var xhr = null;
			try{
				// 标准浏览器的用法
				xhr = new XMLHttpRequest();
			}catch(error){
				// ie低版本浏览有多种异步请求的实现
				try{
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				}catch(err){
					try{
						xhr = new ActiveXObject("Microsoft.XMLHTTP");
					}catch(e){
						alert('你的浏览器太low了，这个世界不适合你');
					}
				}
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4 && (xhr.status == 200 || xhr.status == 304)){
					var res;
					// if(/^[\{\]]/.test(res)){
					// 	res = JSON.parse(res);
					// }

					try{
						res = JSON.parse(xhr.responseText);
					}catch(e){
						res = xhr.responseText;
					}


					if(typeof opt.success === 'function'){
						opt.success(res);
					}
				}
			}

			

			var api = opt.url;
			if(opt.type == 'get'){
				api += '?' + params;
				params = null;
			}

			xhr.open(opt.type,api,opt.async);

			// 如果为post，则添加content-type请求头
			if(opt.type === 'post'){
				xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
			}

			xhr.send(params);
		}
	}
});
/*
	* 传参
	* 返回数据是否为json字符串
 */
/*function ajax(options){

	// 默认参数
	var defaults = {
		type:'get',
		async:true
	}

	var opt = Object.assign({},defaults,options);

	// 参数处理
	// opt.data=>{}
	// params = 'page=1&title=xxx'
	var params = '';
	if(opt.data){
		for(var attr in opt.data){
			params += attr + '=' + opt.data[attr] + '&';
		}

		// 去除多余的&
		params = params.slice(0,-1);
	}

	// jsonp请求
	if(opt.dataType === 'jsonp'){
		// 1.预设全局函数
		window.getData = function(res){
			if(typeof opt.success === 'function'){
				opt.success(res);
			}

			document.body.removeChild(script);
		}

		// 2.创建script标签，并写入页面
		var script = document.createElement('script');
		script.src = opt.url + '?' + params + '&callback=getData';
		document.body.appendChild(script);

		// jsonp请求结束，终止代码向下执行
		return;
	}

	// 异步请求对象兼容性处理
	var xhr = null;
	try{
		// 标准浏览器的用法
		xhr = new XMLHttpRequest();
	}catch(error){
		// ie低版本浏览有多种异步请求的实现
		try{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(err){
			try{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				alert('你的浏览器太low了，这个世界不适合你');
			}
		}
	}

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && (xhr.status == 200 || xhr.status == 304)){
			var res;
			// if(/^[\{\]]/.test(res)){
			// 	res = JSON.parse(res);
			// }

			try{
				res = JSON.parse(xhr.responseText);
			}catch(e){
				res = xhr.responseText;
			}


			if(typeof opt.success === 'function'){
				opt.success(res);
			}
		}
	}

	

	var api = opt.url;
	if(opt.type == 'get'){
		api += '?' + params;
		params = null;
	}

	xhr.open(opt.type,api,opt.async);

	// 如果为post，则添加content-type请求头
	if(opt.type === 'post'){
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
	}

	xhr.send(params);
}*/