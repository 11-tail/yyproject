window.onload = function () {
    $(function () {
        /*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
*/
        var isok = false; //开关通过才能进行注册
        //用户名验证
        $('#userUID').on('blur', function () {
            var name = $.trim($("#userUID").val());
            $.ajax({
                type: "get",
                url: "../api/guestbook/index.php",
                async: true,
                data: "m=index&a=verifyUserName&username=" + name,
                success: function (str) {
                    let arr = JSON.parse(str);
                    if (arr.code) {
                        $('#userUID').next().css({
                            'color': 'red'
                        });
                        isok = false;
                    } else {
                        $('#userUID').next().css({
                            'color': '#58bc58'
                        })
                        isok = true;
                    }
                    $('#userUID').next().html(arr.message);
                    console.log(arr);
                }
            })
            // console.log(name)
        })
        //密码验证
        var isok2 = false;
        $('#userpwd3').on('blur', function () {
            let psw = $.trim($("#userpwd3").val());
            if (checkReg.psweasy(psw)) {
                // console.log('dd');
                $('#userpwd3').next().css({
                    'color': '#58bc58'
                });
                $('#userpwd3').next().html('验证正确');
                isok2 = true;
            } else {
                isok2 = false;
                $('#userpwd3').next().css({
                    'color': 'red'
                });
                $('#userpwd3').next().html('正则未通过');
            }
        })
        //两次的密码是否相同验证
        var isok3 =false;
        $('#userpwd4').on('blur', function () {
            let psw = $.trim($("#userpwd3").val());
            var psw2 = $.trim($("#userpwd4").val());
            if (checkReg.pwwagain(psw,psw2)) {
                // console.log('dd');
                $('#userpwd4').next().css({
                    'color': '#58bc58'
                });
                $('#userpwd4').next().html('验证成功');
                isok3 = true;
            } else {
                isok3 = false;
                $('#userpwd4').next().css({
                    'color': 'red'
                });
                $('#userpwd4').next().html('两次输入的密码不相同');
            }
        })
        //手机号验证
        var isok4 =false;
        $('#usermobile2').on('blur', function () {
            let phone = $.trim($("#usermobile2").val());
            if (checkReg.tel(phone)) {
                // console.log('dd');
                $('#usermobile2').next().css({
                    'color': '#58bc58'
                });
                $('#usermobile2').next().html('验证成功');
                isok4 = true;
            } else {
                isok4 = false;
                $('#usermobile2').next().css({
                    'color': 'red'
                });
                $('#usermobile2').next().html('手机号输入格式不对');
            }
        })

        //生成图片验证
        /**生成一个随机数**/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    /**生成一个随机色**/
    function randomColor(min, max) {
        var r = randomNum(min, max);
        var g = randomNum(min, max);
        var b = randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    /**绘制验证码图片**/
    
    function drawPic() {
        var canvas = document.getElementById("canvas");
        var width = 150;
        var height = 33;
        //获取该canvas的2D绘图环境 
        var code = "";
        if (canvas != null) {
            var ctx = canvas.getContext('2d');
            ctx.textBaseline = 'bottom';
            /**绘制背景色**/
            ctx.fillStyle = randomColor(180, 240);
            //颜色若太深可能导致看不清
            ctx.fillRect(0, 0, width, height);
            /**绘制文字**/
            var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
            
            //生成四个验证码
            for (var i = 1; i <= 4; i++) {
                var txt = str[randomNum(0, str.length)];
                code = code + txt;
                ctx.fillStyle = randomColor(50, 160);
                //随机生成字体颜色
                ctx.font = randomNum(15, 40) + 'px SimHei';
                //随机生成字体大小
                var x = 10 + i * 25;
                var y = randomNum(25, 35);
                var deg = randomNum(-45, 45);
                //修改坐标原点和旋转角度
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                //恢复坐标原点和旋转角度
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
 
            /**绘制干扰线**/
            for (var i = 0; i < 3; i++) {
                ctx.strokeStyle = randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, width / 2), randomNum(0, height / 2));
                ctx.lineTo(randomNum(0, width / 2), randomNum(0, height));
                ctx.stroke();
            }
            /**绘制干扰点**/
            for (var i = 0; i < 50; i++) {
                ctx.fillStyle = randomColor(255);
                ctx.beginPath();
                ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
        return code;
    }
    
    //初始化验证码
    verCode = drawPic();
    // console.log(verCode)
    var reflashCode = document.getElementById("reflashCode");
    if (reflashCode != null) {
        document.getElementById("reflashCode").onclick = function (e) {
            e.preventDefault();
            verCode = drawPic();
        }
    }
    //开始验证
    var isok5 = false;
    $('#yzmcode2').on('blur',function(){
        let yz = $.trim($("#yzmcode2").val());
        var yzs =yz.toUpperCase()
        if(yzs == verCode){
            // console.log('dd')
            isok5 = true;
        }else{
            // alert('验证码错误')
        }
    })
        /*
    用户注册
    get/post
    	guestbook/index.php
    		m : index
    		a : reg
    		username : 要注册的用户名
    		password : 注册的密码
    	返回
    		{
    			code : 返回的信息代码 0 = 没有错误，1 = 有错误
    			message : 返回的信息 具体返回信息
    		}
    // */
        $('#regbut2').on('click', function () {
            var name = $.trim($("#userUID").val());
            var psw = $.trim($("#userpwd3").val());
            var psw2 = $.trim($("#userpwd4").val());
            let phone = $.trim($("#usermobile2").val());
            let yz = $.trim($("#yzmcode2").val());
            if (name && psw && psw2 &&phone &&yz) {
                if (isok&&isok2&&isok3&&isok4&isok5) {
                    $.ajax({
                        type: "post",
                        url: "../api/guestbook/index.php",
                        async: true,
                        data: "m=index&a=reg&username=" + name + "&password=" + psw,
                        success: function (str) {
                            var arr = JSON.parse(str);
                            alert(arr.message);
                            name.value = '';
                            psw.value = '';
                            isok = false;
                            setTimeout(() => {
                                location.href='login.html';
                            }, 1000);
                            
                        }
                    })

                } else {
                    alert('该用户已被注册或信息未填写正确');
                }
            } else {
                alert('必填内容不能为空');
            }
        })


    })
}