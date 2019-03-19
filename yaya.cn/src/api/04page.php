<?php
/*
     - 列表页数据渲染，页码
*/
/*
	列表页数据渲染，页码
	方式：post
		api/04page.php
			
            page : 第几页
            qty : 每页的数据条数
		返回
			{
				total : 数据的总条数
                list : 数据内容
                page：第几页
                qty：每页的数据条数
			}
*/
    //连接数据库

    include 'connect.php';
    header("content-type:text/html;charset=utf-8");
    //中文乱码


    //1.接收参数
    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    // echo $page,$qty;
   //计算获取多少条数据
   $index= ($page - 1) * $qty;
   //写搜索语句
   $sql = "SELECT * FROM listdata LIMIT $index,$qty";

   $res = $conn->query($sql);

   //获取搜索到的内容转化
   $arr = $res -> fetch_all(MYSQLI_ASSOC);

   // var_dump($arr);
   
   $sql2 = " SELECT * FROM listdata";

   $res2 = $conn -> query($sql2);

    //把查询到的一段数据转成字符串
//	echo json_encode($arr,JSON_UNESCAPED_UNICODE);

	$list = array(
		'data' => $arr,//查询到的一段数据
		'total' => $res2->num_rows,//总条数
		'page' => $page,
		'num' => $qty
	);
	
	echo json_encode($list,JSON_UNESCAPED_UNICODE);



?>