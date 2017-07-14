<?php 
	//与用户相关的所有操作
	
	//第一步
	//配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'yt';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 设置编码格式
	$conn->set_charset('utf8');

	// 用户名
	$name = isset($_GET['callPhone']) ? $_GET['callPhone'] : '';

	// 查找所有用户信息
	$sql = "select * from YTuser";
	// 查找指定name信息
	 if($name){
	 	$sql .= " where callPhone='$name'";
	 }

	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
 ?>