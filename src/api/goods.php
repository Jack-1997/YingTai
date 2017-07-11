<?php
	//接收数据
	//$id=isset($_GET['id']) ? $_GET['id'] : '';

	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

	// 每页显示数
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

	$fileurl = './data/goods.json';

	// 以只读模式打开文件
	$file = fopen($fileurl, 'r');

	// 读取文件内容(String)
	$content = fread($file, filesize($fileurl));

	

	//把读取到的内容转变成数组
	$arr_data = json_decode($content);
	//print_r ($arr_data);
	

	//截取分页
	$res = array(
		'data'=>array_slice($arr_data, ($page_no-1)*$qty,$qty),
		'qty'=>$qty,
		'total'=>count($arr_data)
	);

	//把数组变成字符串传给前端
	echo json_encode($res,JSON_UNESCAPED_UNICODE);

	// 关闭文件
	fclose($file);
?>