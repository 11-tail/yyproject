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
    include 'connect.php';
    //中文乱码
    header("content-type:text/html;charset=utf-8");
    //1.接收参数
    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    // echo $page,$qty;
    //2.php操纵本地文件，读取内容
    //设置路径
    // $path = '../data/football.json';
    //打开文件
    // $file = fopen($path,'r');//只读
    //获取内容
    // $content = fread($file,filesize($path));
    //把字符串转化为对象，进行操作
    //写一个sql语句，查询zhuce1内所有的内容
    
    // $sql = "SELECT * FROM goodslist WHERE module = '$module' AND name = '$name'";
    $sql = "SELECT * FROM goodslist";
    // echo $sql;

    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $arr = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]

    // $arr = json_decode($content,true);

    //3.对数据进行截断
    //array_slice(数组名，index,pty)

    $row = array_slice($arr,($page - 1) * $qty,$qty);

    $datalist = array (
        'total' => count($arr),
        'list' => $row,
        'page' => $page,
        'qty' => $qty
    );
    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>