<?php

/*
	验证用户名
	方式：get
		api/01verifyUserName.php
			
			user_name : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
*/
    include 'connect.php';

	//中文乱码
	header("content-type:text/html;charset=utf-8");
    


    $user_name = isset($_GET['user_name']) ? $_GET['user_name'] : '';
    // $password = isset($_POST['password']) ? $_POST['password'] : '';

    	
	//如果是用单引号装字符串，需要用.拼接
	//'hello'.$name.'wolrd'
	//如果是用双引号装字符串
    //"hello'$name'wolrd"
    
    //写一个sql语句，查询zhuce1内所有的内容
    //SELECT * FROM zhuce1 WHERE user_name = 'qiang1';

    $sql = "SELECT * FROM user_info WHERE user_name = '$user_name';";
    // echo $user_name;




    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    $rows = json_encode($row,JSON_UNESCAPED_UNICODE);
    //     echo '9999';
        // echo $row;

        // if(!$row){
        //     echo 0;
        // }else{
        //     echo 1;
        // }
    
    if(!$row){
        $code = array('code'=>0,'message'=>'恭喜你，该用户名可以注册！');
    }else{
        $code = array('code'=>1,'message'=>'对不起，该用户名已经被注册了！');
    }

    // var_dump($row);
    //把结果集，转成字符串，传给前端
    echo json_encode($code,JSON_UNESCAPED_UNICODE);//字符串，'[{},{},{}]'



?>