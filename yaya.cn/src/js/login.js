window.onload = function () {
    $(function () {
        /*
    	用户登陆
    	get/post
    		guestbook/index.php
    			m : index
    			a : login
    			username : 要登陆的用户名
    			password : 登陆的密码
    		返回
    			{
    				code : 返回的信息代码 0 = 没有错误，1 = 有错误
    				message : 返回的信息 具体返回信息
    			}
        */
        $('#logbtn').on('click', function () {
            var name = $.trim($("#txtUser").val());
            var psw = $.trim($("#Userpwd").val());
            if (name && psw) {
                $.ajax({
                    type: "post",
                    url: "../api/guestbook/index.php",
                    async: true,
                    data: "m=index&a=login&username=" + name + "&password=" + psw,
                    success: function (str) {
                        console.log(str);
                        var arr = JSON.parse(str);

                        if (arr.code) {
                            //登录失败的输出
                        } else {
                            //登录成功的输出
                            setTimeout(() => {
                                location.href = '../index.html'
                            }, 1000);
                        }
                        alert(arr.message);
                    }
                })
            } else {
                alert('账号或密码不能为空')
            }
        })
       
    })
}