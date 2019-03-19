<?php

/*
	排序接口   select *　from goodslist order by price limit x,y 
	方式：post
		api/oderConnect.php
			condition:按什么排序，排序的条件
            firstNum : 开始排序的位置
            scondNum : 结束排序的位置
		返回
			{
                数据内容
			}
*/
    //连接数据库
    include 'connect.php';

    //中文乱码
    header("content-type:text/html;charset=utf-8");


    //1.接收参数
    $condition = isset($_POST['condition']) ? $_POST['condition'] : '';
    $firstNum = isset($_POST['firstNum']) ? $_POST['firstNum'] : '';
    $scondNum = isset($_POST['scondNum']) ? $_POST['scondNum'] : '';

    //写一个sql语句，查询zhuce1内所有的内容
    /*
    SELECT * FROM goodslist ORDER BY price LIMIT 0,5;排序，取前五条
    */ 
    $sql = "SELECT * FROM goodslist ORDER BY $condition LIMIT $firstNum,$scondNum";
    // echo $sql;

    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    // echo $res;
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>



