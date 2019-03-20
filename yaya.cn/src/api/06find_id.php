<?php
/*
     - 列表页点击跳转到详情页  根据id查找商品(id用location.href)
     方式：get
		api/find_id.php
			id:列表商品对应的id
            
		返回
			{
                从数据库查找id的数据内容
			}
*/

   //连接数据库
   include 'connect.php';

   //中文乱码
   header("content-type:text/html;charset=utf-8");


   //1.接收参数
   $detail_id = isset($_GET['id']) ? $_GET['id'] : '';

   //写一个sql语句，查询zhuce1内所有的内容
   /*
   SELECT * FROM goodslist ORDER BY price LIMIT 0,5;排序，取前五条
   */ 
   $sql = "SELECT * FROM listdata WHERE id = '${detail_id}';";
   // echo $sql;

   //执行sql语句，得到一个结果集
   $res = $conn->query($sql);

   //得到结果集里面的内容部分
   $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
   // echo $res;
   echo json_encode($row,JSON_UNESCAPED_UNICODE);
    // echo $detail_id;

?>