<?php
	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	// 第一步
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'yt';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);


	// 设置编码格式
	$conn->set_charset('utf8');

	// 接收前端传回的数据
	$name = isset($_GET['callPhone']) ? $_GET['callPhone'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '123456';
	

	// md5加密密码
	$password = md5($password);

	// 查找所有用户信息
	$sql = "select * from YTuser";

	// echo $sql;
	if($name	){
		$sql .= " where callPhone='$name'";
	}

	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);

	$len = count($row);

	if($len > 0){
		$res = false;
		echo json_encode($res,JSON_UNESCAPED_UNICODE);
		die();
		//关闭连接
		$conn->close();
	}
	if($len <= 0){
		// 查找所有用户信息
		$sql2 = "insert into YTuser(callPhone,password) values('$name','$password')";

			// 查询数据库
		$result2 = $conn->query($sql2);

		//使用查询结果	
		if($result2){
			$res = true;
			echo json_encode($res,JSON_UNESCAPED_UNICODE);;
		}
		$conn->close();
	}
	
?>