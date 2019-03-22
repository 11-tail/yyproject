window.onload = function () {
    $(function () {
        updata()
        function updata() {
            var uid = getCookie('uid');
            var name = getCookie('username');
            if (uid) { //已经登陆之后cookie会有uid存在 0就是没有登录状态 有就是已登录
                //已登录
                $('#login').css('color', '#58bc58').html(name);
                $('#reg').css('color', 'red').html('退出');
                $('#reg').attr('href', 'javascript:;');
                $('#userInfo p').html(name);
                $('#userInfo p').next().html('');
                $('#userInfo p').next().next().css('color', 'red').html('退出');
                $('#userInfo p').next().next().css('color', 'red').attr('href', 'javascript:;');
                $('#reg').on('click', function () {
                    $.ajax({
                        type: "post",
                        url: "../api/guestbook/index.php",
                        async: true,
                        data: "m=index&a=logout",
                        success: function (str) {
                            // console.log(str);
                            var arr = JSON.parse(str);
                            alert(arr.message);
                            setTimeout(function () {
                                window.location.reload()
                            }, 1000)
                        }
                    })
                })
            } else {
                //这里是未登录状态

            }
        }
        //购物车渲染事件
        $.ajax({
            type: "post",
            url: "../api/orderCar.php",
            async: true,
            data: "APItype=orderCar&page=1&qty=10",
            success: function (str) {
                var arr = JSON.parse(str)
                if (arr.list == '') {
                    $('.cart-nothing').css('display', 'block');
                    $('.cart-tab').css('display', 'none');
                    $('.carlist').css('display', 'none');
                } else {
                    var html4 = ''
                    $.each(arr.list, function (i, item) {
                        // console.log(item)
                        var zongjia = item.price * item.num;
                        // console.log(zongjia)
                        var html5 = `<div class="cart-item cartBox" style="border: solid 1px #dfdfdf;" data-id="${item.id}">
                            <div>
                            <div class="cart-check">
                                <label class="checkbox radio-box" >
                                    <input type="checkbox" checked="false" style="margin-top:35px" class="checkboxs">
                                </label>
                            </div>
                            <div class="cart-product-box relative">
                                <div class="product">
                                    <a href="" class="block relative fl pro-img-box">
                                        <img src="${item.url}">
                                    </a>
                                    <div class="product-title">
                                        <h5>
                                            <a href="">
                                            ${item.title}
                                            </a>
                                        </h5>
                                        <div class="margin-top"></div>
                                    </div>
                                    <div class="jiuji-server margin-top overflow-hide">
                                        <a href="javascript:;" class="grey-9">
                                            <i class="baoxiu"></i>
                                            选服务
                                        </a>
                                    </div>
                                </div>
                                <div class="unit-price"><b class="yuanjia">${item.price}</b></div>
                                <div class="discount">0.00</div>
                                <div class="count">
                                    <a href="javascript:;" class="cutnum">-</a>
                                    <input type="text" disabled="disabled" class="nownum" value="${item.num}">
                                    <a href="javascript:;" class="addnum">+</a>
                                </div>
                                <div class="sum"><b class="qian red">${zongjia}</b></div>
                                <div class="action">
                                    <a href="javascript:;" class="move-to-favorate">移入收藏夹</a>
                                    <a href="javascript:;" class="good_del">删除</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                `;
                        html4 += html5;
                        // console.log(html4)
                        $('.caritembox').html(html4);
                    })
                    //购物车管理事件
                    //全局的checkbox选中和未选中的样式
                    var $wholeChexbox = $('.checkall');
                    var $cartBox = $('.cartBox'); //每个商铺盒子
                    var $son_check = $('.checkboxs'); //单个商品的checkbox
                    $son_check.prop("checked", false); //先使其未勾选
                    //先封装价钱加减的函数
                    var arr = [];

                    function allNum() {
                        arr = []; //存被选中的复选框的下标
                        $son_check.each(function (i, item) {
                            // console.log(i)
                            if ($son_check.eq(i).prop('checked')) {
                                arr.push(i);
                            }
                        });
                        // console.log(arr);

                        var num = 0; //假设存总数量
                        var priceAll = 0; //存总价的
                        //		console.log($('.good_total').size());
                        //		console.log($('.good_total').eq(0).html().slice(2));
                        //&bnsp; 6位
                        arr.forEach(function (item) { //item值：存的是下标
                            num += $('.nownum').eq(item).val() * 1;
                            priceAll += $('.qian').eq(item).text() * 1; //￥ 99
                        });


                        $('.large-font ').html(num);
                        $('.title-font').html(priceAll);
                    }
                    //小计的改变：数量变就跟着变
                    function goodTotal(now) {
                        var num = now.parent().find('input').val() * 1; //数量
                        var price = now.parent().prev().prev().find('b').text(); //获取价格，减掉单位只要数字
                        var totalPrice = (num * price).toFixed(2); //保留两位小数
                        //		console.log(num,price,totalPrice);
                        now.parent().next().find('b').html(+totalPrice);
                        allNum();
                    }
                    //1.数量加和减
                    $('.count').on('click', '.addnum', function () {
                        // console.log($(this));
                        //点击加一时向数据库发起请求，在该条数据加一
                        var ids = $(this).parent().parent().parent().parent().attr('data-id'); //获取商品id
                        var num = $(this).parent().find('input').val() * 1; //把添加的数量同步到数据库
                        num = num + 1; //默认加一才能达到数据库数量
                        $.ajax({
                            type: "post",
                            url: "../api/orderCar.php",
                            async: true,
                            data: "APItype=orderCarNum&id=" + ids + "&num=" + num,
                            success: function (str) {
                                // console.log(str)
                            }
                        })
                        var num = $(this).prev().val() * 1; //取值
                        num++;
                        if (num >= 100) {
                            //假设库存量
                            num = 100;
                        }
                        $(this).prev().val(num); //赋值
                        //		console.log(num);
                        goodTotal($(this));
                    });
                    //数量减少
                    $('.count').on('click', '.cutnum', function () {
                        var num = $(this).next().val() * 1; //取值
                        num--;
                        if (num <= 1) {
                            //假设库存量
                            num = 1;
                        }
                        $(this).next().val(num); //赋值
                        console.log(num);
                        var ids = $(this).parent().parent().parent().parent().attr('data-id'); //获取商品id
                        var num = $(this).parent().find('input').val() * 1;
                        num = num - 1;
                        //把添加的数量同步到数据库
                        //默认减一才能达到数据库数量
                        $.ajax({
                            type: "post",
                            url: "../api/orderCar.php",
                            async: true,
                            data: "APItype=orderCarNum&id=" + ids + "&num=" + num,
                            success: function (str) {
                                // console.log(str)
                            }
                        })
                        goodTotal($(this));
                    });
                    // console.log($('.qian'))
                    //3.删除当行
                    $('.action').on('click', '.good_del', function () {
                        //jq删除节点   节点.remove()
                        var ids = $(this).parent().parent().parent().parent().attr('data-id'); //获取商品id
                        var res = confirm('您确定要删除吗?');
                        if (res) {
                            $(this).parent().parent().parent().parent().remove();
                            $.ajax({
                                type: "post",
                                url: "../api/orderCar.php",
                                async: true,
                                data: "APItype=orderCarDelete&id=" + ids,
                                success: function (str) {
                                    // console.log(str)
                                }
                            })
                        }
                        update(); //判断一次
                        allNum();
                    });
                    //全部删除事件
                    $('.delall').on('click', function () {
                        // console.log(arr);
                        var res = confirm('您确定要删除全部商品吗？');
                        if (res) {
                            for (var i = arr.length - 1; i >= 0; i--) { //从末尾开始删除元素
                                $('.cartBox').eq(arr[i]).remove();
                            }
                        }
                        arr = []; //删除了记得清空数组
                        update(); //状态改变
                        allNum();
                        $.ajax({
                            type: "post",
                            url: "../api/orderCar.php",
                            async: true,
                            data: "APItype=orderCarDeleteAll",
                            success: function (str) {
                                console.log(str)
                            }
                        })
                    });
                    //删除事件判断函数
                    function update() {
                        if ($('.cartBox').size() <= 0) {
                            $('.cart-nothing').css('display', 'block');
                            $('.cart-tab').css('display', 'none');
                            $('.carlist').css('display', 'none');
                            $('.cart-total').css('display', 'none');
                        } else {
                            $('#del').css('display', 'block');
                        }
                    }
                    //===============================================全局全选与单个商品的关系================================
                    $wholeChexbox.click(function () {
                        var $checkboxs = $cartBox.find('input[type="checkbox"]');
                        if ($(this).is(':checked')) {
                            $checkboxs.prop("checked", true);
                        } else {
                            $checkboxs.prop("checked", false);
                        }
                        // totalMoney();
                        allNum()
                    });
                    //---------------------
                    $son_check.each(function () {
                        $(this).click(function () {
                            if ($(this).is(':checked')) {
                                //判断：所有单个商品是否勾选
                                var len = $son_check.length;
                                var num = 0;
                                $son_check.each(function () {
                                    if ($(this).is(':checked')) {
                                        num++;
                                    }
                                });
                                if (num == len) {
                                    $wholeChexbox.prop("checked", true);
                                }
                            } else {
                                //单个商品取消勾选，全局全选取消勾选
                                $wholeChexbox.prop("checked", false);
                            }
                            allNum()
                        })
                    });
                }
            }
        })
        //个人中心指向事件--------------------------------------
        $('.top_user1').hover(function () {
            $('.top_user').css({
                'display': 'block',
                'border-top': 'none',
            });
            $('.top_user1').css({
                'background': '#fff'
            });
            $('.top_user1 .triangle-down').css({
                '-webkit-transform': 'rotate(180deg)'
            })
        }, function () {
            $('.top_user').css({
                'display': 'none',
            });
            $('.top_user1').css({
                'background': ''
            });
            $('.triangle-down').css({
                '-webkit-transform': ''
            })
        });
        //个人中心指向列表事件
        $('.top_user').hover(function () {
            $('.top_user').css({
                'display': 'block',
                'border-top': 'none',
            });
            $('.top_user1').css({
                'background': '#fff'
            });
            $('.top_user1 .triangle-down').css({
                '-webkit-transform': 'rotate(180deg)'
            })
        }, function () {
            $('.top_user').css({
                'display': 'none',
            });
            $('.top_user1').css({
                'background': ''
            });
            $('.top_user1 .triangle-down').css({
                '-webkit-transform': ''
            })
        });
        //-------------------------结束------------------------------
        //网站导航指向事件--------------------开始---
        $('.nav_show').hover(function () {
            $('.top_item').css({
                'display': 'block',
                'border-top': 'none',
            });
            $('.nav_show').css({
                'background': '#fff'
            });
            $('.nav_show .triangle-down').css({
                '-webkit-transform': 'rotate(180deg)'
            })
        }, function () {
            $('.top_item').css({
                'display': 'none',
                'border-top': 'none',
            });
            $('.nav_show').css({
                'background': ''
            });
            $('.nav_show .triangle-down').css({
                '-webkit-transform': ''
            })
        });
        // 网站2级导航指向事件-----------------
        $('.top_item').hover(function () {
            $('.top_item').css({
                'display': 'block',
                'border-top': 'none',
            });
            $('.nav_show').css({
                'background': '#fff'
            });
            $('.nav_show .triangle-down').css({
                '-webkit-transform': 'rotate(180deg)'
            })
        }, function () {
            $('.top_item').css({
                'display': 'none',
                'border-top': 'none',
            });
            $('.nav_show').css({
                'background': ''
            });
            $('.nav_show .triangle-down').css({
                '-webkit-transform': ''
            })
        });
        // -----------------------结束------------------------------
        //获取地址位置----------------------------------------------
        var settings = $.extend({
            url: "../lib/city/city.min.js",
            prov: null,
            city: null,
            dist: null,
            nodata: null,
            required: true,
        }, settings);
        //选择省份的事件委托判断
        $('.city-tab').on('click', 'a', function (ev) {
            if (ev.target.className == 'city-item1') {
                //获取到省份的数据 将其渲染
                if (typeof (settings.url) == "string") {
                    $.getJSON(settings.url, function (json) {
                        city_json = json;
                        $.each(city_json.citylist, function (i, prov) {
                            var html1 = '';
                            html1 += `<li><a href="javascript:;">${prov.p}</a></li>`
                            $('.sheng').append(html1);
                        });
                    });
                }
                //添加样式
                $('.city-item1').addClass('cur')
                //选择城市的事件然后条状到第二个城市区
                $('.sheng').on('click', 'li', function () {
                    var index = $(this).index() //获取点击的省份的下标拿城市
                    var html1 = $(this).children().html(); //将选取到的城市渲染到上方
                    $('.city-item1').html(html1);
                    //引入选取城市函数
                    location_city(index)
                    //将省份隐藏，改写样式
                    $('.sheng').css({
                        'display': 'none'
                    });
                    $('.city2').css({
                        'display': 'block'
                    });
                    $('.city-item2').addClass('cur').siblings()
                        .removeClass('cur');
                    //开始写城市点击获取城镇

                })
            } else {
                alert('请先选择省份')
            }

        })


        //获取市，镇的函数
        function location_city(index) {
            $('.city2').html('')
            var val = ''
            if (typeof (settings.url) == "string") {
                $.getJSON(settings.url, function (json) {
                    city_json = json;
                    $.each(city_json.citylist[index].c, function (i, item) {
                        var html1 = '';
                        html1 += `<li><a href="javascript:;">${item.n}</a></li>`
                        $('.city2').append(html1);
                    })

                    $('.city2').on('click', 'li', function () {
                        var index1 = $(this).index()
                        var html2 = $(this).children().html();
                        $('.city-item2').html(html2);
                        $.each(city_json.citylist[index].c[index1].a, function (i, item) {
                            // console.log(item.s)
                            let html1 = '';
                            html1 += `<li><a href="javascript:;">${item.s}</a></li>`
                            $('.city2').css({
                                'display': 'none'
                            });
                            $('.city-item3').addClass('cur').siblings()
                                .removeClass('cur');

                            $('.qu').css({
                                'display': 'block'
                            });
                            $('.qu').append(html1);
                        })
                    })

                    $('.qu').on('click', 'li', function () {
                        var html3 = $(this).children().html();
                        $('.city-item3').html(html3);
                        $('.dizhi').append(html3)
                    })
                });
            }
        }

        //-------------------地址位置选取事件---------------------
        $('.top_location').hover(function () {
            $('.city_wrap').css({
                'display': 'block'
            })
        }, function () {
            $('.city_wrap').css({
                'display': 'none'
            })
        })
        //下拉选择事件
        $('.city_wrap').hover(function () {
            $('.city_wrap').css({
                'display': 'block'
            })
        }, function () {
            $('.city_wrap').css({
                'display': 'none'
            })
        })
        //---------------------------结束---------------------------------
    })
}