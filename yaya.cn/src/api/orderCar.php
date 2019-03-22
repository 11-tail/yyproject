<?php    
    /*
	 	连接数据库：操纵数据库
	 		* 写好配置信息
	 		* 检测是否连接成功
	 */
	
	//配置参数
	$servername = 'localhost';
	$username = 'root';
	$passname = '';
	$dbname = 'xiangmu';
	
	//建立链接：$conn对象  js中调用对象的属性  arr.lenght 
	//php调用属性和方法  ->   $conn -> lenght
	$conn = new mysqli($servername,$username,$passname,$dbname);
	
	//判断是否连接成功
	if($conn->connect_error) {
		die('出错原因是:'.$conn->connect_error);
	}
	
//	echo '连接成功';
    $APItype=isset($_POST['APItype']) ? $_POST['APItype'] : 'orderCar';
    //加入购物车
    if($APItype=='addOrderCar'){
        $id=isset($_POST['id']) ? $_POST['id'] : '1';
        $title=isset($_POST['title']) ? $_POST['title'] : '12';
        $num=isset($_POST['num']) ? $_POST['num'] : '12';
        $price=isset($_POST['price']) ? $_POST['price'] : '12';
        $url=isset($_POST['url']) ? $_POST['url'] : '12';
        $sql="INSERT INTO ordercar(id,title,num,price,url) VALUES('$id','$title','$num','$price','$url')"; 
    }  
    //购物车信息输出 
    if($APItype=='orderCar'){
        $page=isset($_POST['page']) ? $_POST['page'] : '1';
        $qty=isset($_POST['qty']) ? $_POST['qty'] : '2';
        $index=($page-1)*$qty;
        $sql="SELECT * FROM ordercar LIMIT $index,$qty";
    }
    //购物数量变化
    if($APItype=='orderCarNum'){
        $id=isset($_POST['id']) ? $_POST['id'] : '1';
        $num=isset($_POST['num']) ? $_POST['num'] : '2';
        $sql="UPDATE ordercar SET num='$num' where id='$id'"; 
    }
    //购物车删除数据
    if($APItype=='orderCarDelete'){
        $id=isset($_POST['id']) ? $_POST['id'] : '';
        $sql="DELETE FROM orderCar WHERE id='$id'"; 
    }
    //购物车删除全部
    if($APItype=='orderCarDeleteAll'){
        $id=isset($_POST['id']) ? $_POST['id'] : '';
        $sql="DELETE FROM orderCar";
    }
    $res=$conn->query($sql); 
    if($APItype=='orderCar'){
        $row=$res->fetch_all(MYSQLI_ASSOC);//只要内容部分
        $datalist=array(
            'list'=>$row,
            'page'=>$page,
            'qty'=>$qty
        );
        echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
        $res->close();//关闭结果集
    }else{
        if($res){
            echo 1;
        }else{
            echo 0;
        }
    }
    //关闭数据库
    $conn->close();
?>