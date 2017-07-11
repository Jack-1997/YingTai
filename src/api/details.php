<?php
	//获取id并
	$goodsid=isset($_GET['id']) ? $_GET['id'] : ''; 

	$fileurl = './data/goods.json';

	// 以只读模式打开文件
	$file = fopen($fileurl, 'r');

	// 读取文件内容(String)
	$content = fread($file, filesize($fileurl));

	

	//把读取到的内容转变成数组或对象
	$arr_data = json_decode($content);

	//查找id为$goodsid的数据
	$res;
	foreach ($arr_data as $item) {
		if($item->id == $goodsid){

			$res = $item;
		}
	}

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
	// 关闭文件
	fclose($file);
 ?>