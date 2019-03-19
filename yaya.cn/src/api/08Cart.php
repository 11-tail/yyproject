<?php
/*
     - 购物车信息管理   改数量，删除商品(jq讲购物车)
*/
/*
    方式：post
    api/ShoppingCart.php
    
        id:详情页商品对应的id;
        user_id:用户对应的user_id
        a:add   商品数量加一;|若没有则不写
        m:red   数量减一;|若没有则不写
        d:delete   删除;|若没有则不写
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
    // $detail_id = isset($_GET['id']) ? $_GET['id'] : '';
    $goods_id = isset($_POST['id']) ? $_POST['id'] : '';
    $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : '';


    $add = isset($_POST['a']) ? $_POST['a'] : '';
    $reduce = isset($_POST['m']) ? $_POST['m'] : '';
    $delete = isset($_POST['d']) ? $_POST['d'] : '';
    $allDel = isset($_POST['allDel']) ? $_POST['allDel'] : '';
    // echo $add;
    if($add){
        // echo $detail_id;
        $sql = "UPDATE shoppingcart SET goods_num=goods_num+1 WHERE goods_id=$goods_id  AND user_id = $user_id";
        $res = $conn->query($sql);
    }
    if($reduce){
        // echo $reduce;
        $sql = "UPDATE shoppingcart SET goods_num=goods_num-1 WHERE goods_id=$goods_id  AND user_id = $user_id";
        $res = $conn->query($sql);
    }
    if($delete){
        // echo $delete;
        $sql = "DELETE FROM shoppingcart WHERE goods_id=$goods_id  AND user_id = $user_id"; 
        $res = $conn->query($sql);
    }
    if($allDel){
        // echo $delete;
        $sql = "DELETE FROM shoppingcart WHERE user_id = $user_id"; 
        $res = $conn->query($sql);
    }
    // echo $delete;
    $sql = "SELECT * FROM shoppingcart WHERE goods_id = $goods_id  AND user_id = $user_id";
    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    // echo $res;
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>