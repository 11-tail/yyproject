<?php
/*
     - 详情页跳转到购物车页    id传到购物车，购物车页查询该商品的数据，将数据插入到订单表,拿订单表的数据，渲染到购物车(jq讲购物车)
*/
/*
     方式：post
        api/ShoppingCart.php
        
            id:详情页商品对应的id
            user_id:用户对应的user_id
            
		返回
			[{
                从数据库查找id的数据内容
			}]
*/

       //连接数据库
    include 'connect.php';

    //中文乱码
    header("content-type:text/html;charset=utf-8");

    //1.接收参数
    $goods_id = isset($_POST['id']) ? $_POST['id'] : '';
    $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : '';
    // echo $good_id;
    //查询该id在订单表是否存在
    
    $sql = "SELECT * FROM shoppingcart WHERE goods_id  = '$goods_id' AND user_id = $user_id";
    // echo $sql;
    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);
    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);
    //把结果集，转成字符串，
    // $rows = json_encode($row,JSON_UNESCAPED_UNICODE);
    // echo $rows;

    if($row){//若id存在，则商品数量加一
        // echo 55;
        $sql2 = "UPDATE shoppingcart SET goods_num=goods_num+1 WHERE goods_id=$goods_id  AND user_id = $user_id";
        $res2 = $conn->query($sql2);
        // $row3 = $res2->fetch_all(MYSQLI_ASSOC);
    }else{//若id不存在
        //将列表商品id对应的信息复制到订单表中
        // echo 66;
        // $sql2 = "INSERT INTO shoppingcart(user_id,goods_id,goods_num) VALUES($user_id,$goods_id,'1')";
        $sql2 = "INSERT INTO shoppingcart(user_id,goods_id,main_title,img,new_price,goods_num) SELECT $user_id,goods_id,main_title,img,new_price,1 from goodslist where goods_id=$goods_id;";
        
        //执行sql语句，得到一个结果集
        $res2 = $conn->query($sql2);
        // $row3 = $res2->fetch_all(MYSQLI_ASSOC);
    }

    //重新查询id对应的商品信息
    $sql3 = "SELECT * FROM shoppingcart WHERE goods_id = $goods_id AND user_id = $user_id" ;
    //执行sql语句，得到一个结果集
    $res3 = $conn->query($sql3);

    //得到结果集里面的内容部分
    $row3 = $res3->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    // echo $res;
    //返回商品信息
    echo json_encode($row3,JSON_UNESCAPED_UNICODE);
    // echo $goods_id;
    
?>