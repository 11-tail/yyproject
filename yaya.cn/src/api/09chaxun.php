<?php
/*
    方式：post
    api/09chaxun.php
    
        module:商品的分类;

    返回
        [{
            从数据库查找商品分类的数据内容
        }]
*/
    include 'connect.php';

	//中文乱码
	header("content-type:text/html;charset=utf-8");
    


    // $name = isset($_POST['name']) ? $_POST['name'] : '';
    // $price = isset($_POST['price']) ? $_POST['price'] : '';
    // $image = isset($_POST['image']) ? $_POST['image'] : '';


    //1.接收参数
    // $page = isset($_POST['page']) ? $_POST['page'] : '';
    // $qty = isset($_POST['qty']) ? $_POST['qty'] : '';

    $module = isset($_POST['module']) ? $_POST['module'] : '';


    //写一个sql语句，查询zhuce1内所有的内容
    
    // $sql = "SELECT * FROM goodslist WHERE module = '$module' AND name = '$name'";
    $sql = "SELECT * FROM goodslist WHERE module = '$module'";
    // echo $sql;

    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]


        //3.对数据进行截断
    //array_slice(数组名，index,pty)

    // $con = array_slice($row,($page - 1) * $qty,$qty);

    // var_dump($row);
    //把结果集，转成字符串，传给前端
    // echo json_encode($con,JSON_UNESCAPED_UNICODE);//字符串，'[{},{},{}]'
    // $datalist = array (
    //     'total' => count($row),
        // 'list' => $con,
        // 'page' => $page,
        // 'qty' => $qty
    // );
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    // echo $module;


?>