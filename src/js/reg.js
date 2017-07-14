
/*
	注册
 */
require(['config'],function(){
	require(['jquery'],function($){
		
		
		
		$('#getValidateCode').on('click',function(){
			//点击按钮手机号码验证
			var num=$('#callPhone').val();
			
			if(!/^1[34578]\d{9}$/.test(num)){
				var pro=new Promise(function(resolve){

					var tips=$('<div/>').addClass('box');
					tips.html(`
						<div class='content'>
							<div class='content-hd'>
								温馨提示
							</div>
							<div class='content-bd'>
								请输入正确的手机号
							</div>
							<div class='content-ft'>
								<div class='react'>确定</div>
							</div>
						</div>
						`);
					tips.appendTo($('#m-ui-view'));
					resolve(tips);
				});
				pro.then(function(tips){
					//点击确定关闭弹窗
					$('.content-ft').on('click',function(){
						tips.remove();
					})
				});
				
			}

			//点击获取验证码:四位随机
			var str='0123456789abcdefghijklmnopqrstuvwxyz';
			//根据索引拿字符
			
			var randomIdx;
			var coint='';
			//拿4个组合
			for(var i=1;i<=4;i++){
				randomIdx=parseInt(Math.random()*36);
				coint+=str[randomIdx];
			}
			$('#getValidateCode').text(coint);
			console.log(coint);
		});
		
		//信息完善完成注册提交数据
		
		$('#submitButton').on('click',function(){console.log(666);
			//护照密码
			var password=$('#password').val();
			var repassword=$('#repassword').val();
			if(repassword!==password){
				var pro=new Promise(function(resolve){

						var tip=$('<div/>').addClass('box');
						tip.html(`
							<div class='content'>
								<div class='content-hd'>
									温馨提示
								</div>
								<div class='content-bd'>
									请输入正确的密码
								</div>
								<div class='content-ft'>
									<div class='react'>确定</div>
								</div>
							</div>
							`);
						tip.appendTo($('#m-ui-view'));
						resolve(tip);
				});
				pro.then(function(tip){
					//点击确定关闭弹窗
					$('.content-ft').on('click',function(){
						tip.remove();
					})
				})
				return false;
			}
			console.log(666)
			console.log($('#callPhone').val(),$('#password').val())
			$.ajax({
				url:'../api/create_user.php',
				dataType:'json',
				data:{
					callPhone:$('#callPhone').val(),
					password:$('#password').val(),
				},
				success:(res)=>{

					if(!!res){
						var pro=new Promise(function(resolve){

							var tip=$('<div/>').addClass('box');
								tip.html(`
									<div class='content'>
										<div class='content-hd'>
											温馨提示
										</div>
										<div class='content-bd'>
											恭喜你注册成功！
										</div>
										<div class='content-ft'>
											<div class='react'>确定</div>
										</div>
									</div>
									`);
									tip.appendTo($('#m-ui-view'));
									resolve(tip);
								});
								pro.then(function(tip){
								//点击确定关闭弹窗
								$('.content-ft').on('click',function(){
								tip.remove();
								})
						})
					}else{
						var pro=new Promise(function(resolve){

							var itip=$('<div/>').addClass('box');
								itip.html(`
									<div class='content'>
										<div class='content-hd'>
											温馨提示
										</div>
										<div class='content-bd'>
											该电话号码已被注册
										</div>
										<div class='content-ft'>
											<div class='react'>确定</div>
										</div>
									</div>
									`);
									itip.appendTo($('#m-ui-view'));
									resolve(itip);
								});
								pro.then(function(itip){
								//点击确定关闭弹窗
								$('.content-ft').on('click',function(){
								itip.remove();
								})
						})
					}
				}
			}) 		
		});
		
	})
})
































