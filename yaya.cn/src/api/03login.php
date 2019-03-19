<?php
/*
	登录
	方式：post
		api/03login.php
			
            user_name : 要登录的用户名
            user_password : 密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
*/
    include 'connect.php';

	//中文乱码
	header("content-type:text/html;charset=utf-8");
    


    $user_name = isset($_POST['user_name']) ? $_POST['user_name'] : '';
    $user_password = isset($_POST['user_password']) ? $_POST['user_password'] : '';

    	
	//如果是用单引号装字符串，需要用.拼接
	//'hello'.$name.'wolrd'
	//如果是用双引号装字符串
    //"hello'$name'wolrd"
    
    //写一个sql语句，查询zhuce1内所有的内容
    //SELECT * FROM user_info WHERE user_name = 'jingjing' AND user_password = '123456';

    $sql = "SELECT * FROM user_info WHERE user_name = '$user_name' AND user_password = '$user_password'";
    // echo $sql;




    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    
    // $rs = $this->db->get("SELECT * FROM user_info WHERE user_name = '$user_name';");


        // if(!$row){
        //     echo 0;
        // }else{
        //     echo 1;
        // }
    // echo $row;
    if($row){
        $code = array('code'=>0,'content'=>$row,'message'=>'登陆成功！');
        // setcookie('uid', $rs['user_id'], time() + 3600*60, '/');
		// setcookie('user_name', $rs['user_name'], time() + 3600*60, '/');
		// $code = array('code'=>0,'message'=>'登陆成功！');
    }else{
        // echo $row;
        $code = array('code'=>1,'content'=>$row,'message'=>'登陆失败！');
    }

    // var_dump($row);
    //把结果集，转成字符串，传给前端
    echo json_encode($code,JSON_UNESCAPED_UNICODE);//字符串，'[{},{},{}]'



?>