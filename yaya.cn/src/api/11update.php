<?php
/*
	功能：用从cookie中获取的用户id，查找用户信息，刷新页面
	方式：get
		api/11update.php
			
            user_id : 要查找的用户id
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
*/
    include 'connect.php';

	//中文乱码
	header("content-type:text/html;charset=utf-8");
    


    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : '';
    // $user_password = isset($_POST['user_password']) ? $_POST['user_password'] : '';

    	
	//如果是用单引号装字符串，需要用.拼接
	//'hello'.$name.'wolrd'
	//如果是用双引号装字符串
    //"hello'$name'wolrd"
    
    //写一个sql语句，查询zhuce1内所有的内容
    //SELECT * FROM user_info WHERE user_name = 'jingjing' AND user_password = '123456';

    $sql = "SELECT * FROM user_info WHERE user_id = '$user_id'";
    // echo $sql;




    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    
    // var_dump($row);
    //把结果集，转成字符串，传给前端
    echo json_encode($row,JSON_UNESCAPED_UNICODE);//字符串，'[{},{},{}]'



?>