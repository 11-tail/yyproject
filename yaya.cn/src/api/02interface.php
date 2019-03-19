<?php
/*
	注册
	方式：post
		api/02interface.php
			
            user_name : 要注册的用户名
            user_password : 密码
		返回
			{
				code : 返回的信息代码 0 = 恭喜你注册成功！，1 = 有注册失败！
				message : 返回的信息具体返回信息
			}
*/

    //引入connect.php文件
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

    $sql = "INSERT INTO `user_info`(user_name,user_password) VALUES('$user_name','$user_password');";
    // $sql2 = "SELECT * FROM user_info WHERE user_name = '$user_name' AND user_password = '$user_password'";


    //执行一个sql语句得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    // $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    // echo $res;

    if($res){
        // $code = array('code'=>0,'message'=>'恭喜你注册成功！');
        $sql2 = "SELECT * FROM user_info WHERE user_name = '$user_name' AND user_password = '$user_password'";
        $res2 = $conn->query($sql2);
        $row2 = $res2->fetch_all(MYSQLI_ASSOC);
        $code = array('code'=>0,'content'=>$row2,'message'=>'注册成功！');
    }else{
        $code = array('code'=>1,'message'=>'注册失败！');
    }
 // var_dump($row);
    //把结果集，转成字符串，传给前端
    echo json_encode($code,JSON_UNESCAPED_UNICODE);//字符串，'[{},{},{}]'

?>