window.onload = function () {
    $(function () {
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
<<<<<<< HEAD
        // -----------------------结束------------------------------
        //获取地址位置----------------------------------------------
=======
        // -----------------------结束--------------------
        //地址位置----------------------------------------------
>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
        var settings = $.extend({
            url: "lib/city/city.min.js",
            prov: null,
            city: null,
            dist: null,
            nodata: null,
            required: true,
        }, settings);
<<<<<<< HEAD
=======



>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
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


<<<<<<< HEAD
        //获取市，镇的函数
=======

>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
        function location_city(index) {
            $('.city2').html('')
            var val = ''
            if (typeof (settings.url) == "string") {
                $.getJSON(settings.url, function (json) {
                    city_json = json;
<<<<<<< HEAD

=======
                  
>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
                    $.each(city_json.citylist[index].c, function (i, item) {
                        var html1 = '';
                        html1 += `<li><a href="javascript:;">${item.n}</a></li>`
                        $('.city2').append(html1);
                    })

<<<<<<< HEAD
                    $('.city2').on('click', 'li', function () {
=======
                    $('.city2').on('click','li',function(){
>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
                        var index1 = $(this).index()
                        var html2 = $(this).children().html();
                        $('.city-item2').html(html2);
                        $.each(city_json.citylist[index].c[index1].a, function (i, item) {
                            console.log(item.s)
                            let html1 = '';
                            html1 += `<li><a href="javascript:;">${item.s}</a></li>`
                            $('.city2').css({
                                'display': 'none'
                            });
<<<<<<< HEAD
                            $('.city-item3').addClass('cur').siblings()
                                .removeClass('cur');
=======

                            $('.city-item3').addClass('cur').siblings()
                            .removeClass('cur');
>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83

                            $('.qu').css({
                                'display': 'block'
                            });
                            $('.qu').append(html1);
                        })
                    })

<<<<<<< HEAD
                    $('.qu').on('click', 'li', function () {
=======
                    $('.qu').on('click','li',function(){
>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
                        var html3 = $(this).children().html();
                        $('.city-item3').html(html3);
                        $('.dizhi').append(html3)
                    })
                });
            }
        }

<<<<<<< HEAD
=======
        
        // location_qu()
        // function location_qu(){
        //     if (typeof (settings.url) == "string") {
        //         $.getJSON(settings.url, function (json) {
        //             city_json = json;
        //             $.each(city_json.citylist.c, function (i, item) {
        //                 console.log(item.a)
        //             })
        //         });
        //     }
        // }
        //----------------------------------------------------
>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
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
<<<<<<< HEAD
        //---------------------------结束---------------------------------
        //--------购物车的指向事件-------------开始------------------------
        $('.header-cart-a').hover(function () {
            $('.header-cart-box').stop().css({
                'display': 'block',
            })
            $('.header-cart-a').addClass('cur1')
        }, function () {
            $('.header-cart-box').stop().css({
                'display': 'none',
            })
            $('.header-cart-a').removeClass('cur1')
        })
        //购物车详细指向
        $('.header-cart-box').hover(function () {
            $('.header-cart-box').stop().css({
                'display': 'block',
            })
            $('.header-cart-a').addClass('cur1')
        }, function () {
            $('.header-cart-box').stop().css({
                'display': 'none',
            })
            $('.header-cart-a').removeClass('cur1')
        })
        //---------------------------结束---------------------------------
        //nav的旧机回收指向显示事件
        $('.nav .sub_nav:nth-child(2)').hover(function () {
            $('.nav .sub_nav:nth-child(2) div').css({
                'display': 'block',
            })
        }, function () {
            $('.nav .sub_nav:nth-child(2) div').css({
                'display': 'none',
            })
        });
        $('.nav .sub_nav:nth-child(2) div').hover(function () {
            $('.nav .sub_nav:nth-child(2) div').css({
                'display': 'block',
            })
        }, function () {
            $('.nav .sub_nav:nth-child(2) div').css({
                'display': 'none',
            })
        })
        //nav的售后维修指向显示事件
        $('.nav .sub_nav:nth-child(4)').hover(function () {
            $('.nav .sub_nav:nth-child(4) div').css({
                'display': 'block',
            })
        }, function () {
            $('.nav .sub_nav:nth-child(4) div').css({
                'display': 'none',
            })
        });
        $('.nav .sub_nav:nth-child(4) div').hover(function () {
            $('.nav .sub_nav:nth-child(4) div').css({
                'display': 'block',
            })
        }, function () {
            $('.nav .sub_nav:nth-child(4) div').css({
                'display': 'none',
            })
        })
        //nav的丫丫头条向显示事件
        $('.nav .sub_nav:nth-child(5)').hover(function () {
            $('.nav .sub_nav:nth-child(5) div').css({
                'display': 'block',
            })
        }, function () {
            $('.nav .sub_nav:nth-child(5) div').css({
                'display': 'none',
            })
        });
        $('.nav .sub_nav:nth-child(5) div').hover(function () {
            $('.nav .sub_nav:nth-child(5) div').css({
                'display': 'block',
            })
        }, function () {
            $('.nav .sub_nav:nth-child(5) div').css({
                'display': 'none',
            })
        })
        //---------------------------结束---------------------------------
        //------------------二级导航触摸事件-------------------------------
        $('.navmenu dl:nth-child(1)').hover(function () {
            $('.navmenu dl:nth-child(1) dd').css({
                'display': 'block',
                'background': 'pink'
            });
            $('.navmenu dl:nth-child(1)').addClass('cur3').siblings()
                .removeClass('cur3');
        }, function () {
            $('.navmenu dl:nth-child(1) dd').css({
                'display': 'none',
            });
            $('.navmenu dl:nth-child(1)').removeClass('cur3');
        })
        //三级导航详情显示事件
        $('.navmenu dl:nth-child(1) dd').hover(function () {
            $('.navmenu dl:nth-child(1) dd').css({
                'display': 'block',

            })
        }, function () {
            $('.navmenu dl:nth-child(1) dd').css({
                'display': 'none',
            })
        })
        //
        $('.navmenu dl:nth-child(2)').hover(function () {
            $('.navmenu dl:nth-child(2) dd').css({
                'display': 'block',
                'background': '#58bc58'
            });
            $('.navmenu dl:nth-child(2)').addClass('cur3').siblings()
                .removeClass('cur3');
        }, function () {
            $('.navmenu dl:nth-child(2) dd').css({
                'display': 'none',
            });
            $('.navmenu dl:nth-child(2)').removeClass('cur3');
        })
        //三级导航详情显示事件
        $('.navmenu dl:nth-child(2) dd').hover(function () {
            $('.navmenu dl:nth-child(2) dd').css({
                'display': 'block',
            })
        }, function () {
            $('.navmenu dl:nth-child(2) dd').css({
                'display': 'none',
            })
        })
        //
        $('.navmenu dl:nth-child(3)').hover(function () {
            $('.navmenu dl:nth-child(3) dd').css({
                'display': 'block',
                'background': '#f40'
            });
            $('.navmenu dl:nth-child(3)').addClass('cur3').siblings()
                .removeClass('cur3');
        }, function () {
            $('.navmenu dl:nth-child(3) dd').css({
                'display': 'none',
            });
            $('.navmenu dl:nth-child(3)').removeClass('cur3');
        })
        //三级导航详情显示事件
        $('.navmenu dl:nth-child(3) dd').hover(function () {
            $('.navmenu dl:nth-child(3) dd').css({
                'display': 'block',
            })
        }, function () {
            $('.navmenu dl:nth-child(3) dd').css({
                'display': 'none',
            })
        })
        //
        $('.navmenu dl:nth-child(4)').hover(function () {
            $('.navmenu dl:nth-child(4) dd').css({
                'display': 'block',
                'background': 'green'
            });
            $('.navmenu dl:nth-child(4)').addClass('cur3').siblings()
                .removeClass('cur3');
        }, function () {
            $('.navmenu dl:nth-child(4) dd').css({
                'display': 'none',
            });
            $('.navmenu dl:nth-child(4)').removeClass('cur3');
        })
        //三级导航详情显示事件
        $('.navmenu dl:nth-child(4) dd').hover(function () {
            $('.navmenu dl:nth-child(4) dd').css({
                'display': 'block',
            })
        }, function () {
            $('.navmenu dl:nth-child(4) dd').css({
                'display': 'none',
            })
        })
        //
        $('.navmenu dl:nth-child(5)').hover(function () {
            $('.navmenu dl:nth-child(5) dd').css({
                'display': 'block',
                'background': 'yellowgreen'
            });
            $('.navmenu dl:nth-child(5)').addClass('cur3').siblings()
                .removeClass('cur3');
        }, function () {
            $('.navmenu dl:nth-child(5) dd').css({
                'display': 'none',
            });
            $('.navmenu dl:nth-child(5)').removeClass('cur3');
        })
        //三级导航详情显示事件
        $('.navmenu dl:nth-child(5) dd').hover(function () {
            $('.navmenu dl:nth-child(5) dd').css({
                'display': 'block',
            })
        }, function () {
            $('.navmenu dl:nth-child(5) dd').css({
                'display': 'none',
            })
        })
        //
        $('.navmenu dl:nth-child(6)').hover(function () {
            $('.navmenu dl:nth-child(6) dd').css({
                'display': 'block',
                'background': 'yellow'
            });
            $('.navmenu dl:nth-child(6)').addClass('cur3').siblings()
                .removeClass('cur3');
        }, function () {
            $('.navmenu dl:nth-child(6) dd').css({
                'display': 'none',
            });
            $('.navmenu dl:nth-child(6)').removeClass('cur3');
        })
        //三级导航详情显示事件
        $('.navmenu dl:nth-child(6) dd').hover(function () {
            $('.navmenu dl:nth-child(6) dd').css({
                'display': 'block',
            })
        }, function () {
            $('.navmenu dl:nth-child(6) dd').css({
                'display': 'none',
            })
        })
        //---------------------------结束---------------------------------
        //轮播图开始-----------------------------------------------------
        var timer = null;
        var cur = 0;
        var len = $(".img-box li").length;

        //鼠标滑过容器停止播放 点击事件出现
        $(".bannerBox").hover(function () {
            clearInterval(timer);
            $('.prev')
                .stop()
                .animate({
                    'left': 0
                }, 200, 'linear');

            $('.next')
                .stop()
                .animate({
                    'right': 0
                }, 200, 'linear');
        }, function () {
            showImg();
            $('.prev')
                .stop()
                .animate({
                    'left': -50
                }, 200, 'linear');
            $('.next')
                .stop()
                .animate({
                    'right': -50
                }, 200, 'linear');
        });
        // 遍历所有圆点导航实现点击切换至对应的图片
        $(".list-box li").click(function () {
            clearInterval(timer);
            cur = $(this).index();
            $(this).addClass("active")
                .siblings().removeClass("active");

            $(".img-box >li")
                .eq(cur)
                .fadeIn(1000)
                .siblings("li")
                .fadeOut(1000);
        });
        //定义图片切换函数
        function showImg() {
            timer = setInterval(function () {
                cur++;
                if (cur >= len) {
                    cur = 0;
                }
                carousel(cur)
            }, 2000);
        }
        showImg();
        //点击事件
        $('.prev').on('click', function () {
            //切到上一张
            cur = --cur < 0 ? $('.img-box li').size() - 1 : cur;
            // console.log(cur);
            carousel(cur)
        });
        $('.next').on('click', function () {
            //往下切换
            cur = ++cur > $('.img-box li').size() - 1 ? 0 : cur;
            // console.log(cur);
            carousel(cur)
        })
        //轮播切换事件 点击原点切换事件
        $(".img-box >li").css({
            'position': 'absolute',
            'left': 0,
            'top': 0
        });
        function carousel(cur) {

            $(".img-box >li")
                .eq(cur)
                .fadeIn(1000)
                .siblings("li")
                .fadeOut(1000);
            $(".list-box li")
                .eq(cur)
                .addClass("active")
                .siblings()
                .removeClass("active");
        }
        //---------------------------结束---------------------------------
        //轮播图下三个小班快的数据渲染--------开始------------

        var troika = [{
            'id': 1,
            'color': '#4fb99f',
            'logoimg': '手机精品汇.png',
            'img1': '1_1.jpg',
            'img2': '1_2.jpg',
            'img3': '1_3.jpg',
            'img4': '1_4.jpg',
            'img5': '1_5.jpg',
        }, {
            'id': 2,
            'color': '#e76641',
            'logoimg': '电脑办公.png',
            'img1': '1_1.jpg',
            'img2': '1_2.jpg',
            'img3': '1_3.jpg',
            'img4': '1_4.jpg',
            'img5': '1_5.jpg',
        }, {
            'id': 3,
            'color': '#a26644',
            'logoimg': '数码新世界.png',
            'img1': '1_1.jpg',
            'img2': '1_2.jpg',
            'img3': '1_3.jpg',
            'img4': '1_4.jpg',
            'img5': '1_5.jpg',
        }];
        var list = document.getElementById('troika');//获取节点
        var reslist = troika.map(function (item4) {
            return ` <div class="troika-list margin-right" data-id:"${item4.id}">
        <div class="troika_title">
            <a href="">
                <img src="img/${item4.logoimg}" alt="">
            </a>
        </div>
         
        <div class="troika_body">
            <div class="left fl">
                <a href="" class="bigimg anim-left">
                    <img src="img/${item4.img1}" width="160" height="160" alt="">
                    <div class="diy-tip">
                        <h3 style="color:${item4.color}">iPhone XR全网通版</h3>
                        <p>超视网膜显示屏</p>
                    </div>
                </a>
                
                <a href="" title="华为 nova 4 全网通标配版" class="bottom-img anim-left" >
                    <img class="get-src" data-src="645" src="img/${item4.img2}" width="80" height="80">
                    <div class="diy-tip">
                        <h3 style="color:${item4.color}">华为 nova 4 全网通标配版</h3>
                        <p>自拍极点全面屏</p>
                    </div>
                </a>

            </div>
            <div class="right fr">
                <a href="" title="华为 P20 Pro 全网通版" class="anim-left" >
                    <img class="get-src"  src="img/${item4.img3}" width="80" height="80">
                    <div class="diy-tip">
                        <h3 style="color:${item4.color}">华为 P20 Pro 全网通版</h3>
                        <p>4000万徕卡三摄</p>
                    </div>
                </a>
                <a href="" title="小米MIX3 全网通版" class="anim-left" >
                    <img class="get-src"  src="img/${item4.img4}" width="80" height="80">
                    <div class="diy-tip">
                        <h3 style="color:${item4.color}">小米MIX3 全网通版</h3>
                        <p>一面科技 一面艺术</p>
                    </div>
                </a>
                <a href="" title="华为畅享9  4G+全网通高配版" class="anim-left" ">
                    <img class="get-src"  src="img/${item4.img5}" width="80" height="80">
                    <div class="diy-tip">
                        <h3 style="color:${item4.color}">华为畅享9  4G+全网通高配版</h3>
                        <p>大电池 强劲续航</p>
                    </div>
                </a>
            </div>
        </div>
    </div>`
        }).join('');//转化出字符串代码
       list.innerHTML = reslist;//渲染
       //---------------------------结束---------------------------------
       //基友派数据渲染开始----------------------------------------
       
       var floor = [{
        'id': 1,
        'color': '#4fb99f',
        'logoimg': '手机1F.png',
        'img1': 'floor1_1.png',
        'img2': 'floor1_2.jpg',
        'img3': 'floor1_3.jpg',
        
    }, {
        'id': 2,
        'color': '#f29600',
        'logoimg': '2F.png',
        'img1': 'floor1_1.png',
        'img2': 'floor1_2.jpg',
        'img3': 'floor1_3.jpg',
    }, {
        'id': 3,
        'color': '#e73828',
        'logoimg': '3F.png',
        'img1': 'floor1_1.png',
        'img2': 'floor1_2.jpg',
        'img3': 'floor1_3.jpg',
    },
    {
        'id': 4,
        'color': '#c43d7e',
        'logoimg': '4F.png',
        'img1': 'floor1_1.png',
        'img2': 'floor1_2.jpg',
        'img3': 'floor1_3.jpg',
    }, {
        'id': 5,
        'color': '#6d55bd',
        'logoimg': '5F.png',
        'img1': 'floor1_1.png',
        'img2': 'floor1_2.jpg',
        'img3': 'floor1_3.jpg',
    }, {
        'id': 6,
        'color': '#325bb5',
        'logoimg': '6F.png',
        'img1': 'floor1_1.png',
        'img2': 'floor1_2.jpg',
        'img3': 'floor1_3.jpg',
    }];
    var floorlist = floor.map(function(item5){
        return `<div data-id="${item5.id}" class="diy-floor">
        <div class="floor-title">
            <a href="" width="1200" height="54">
                <img class="get-src" src="img/${item5.logoimg}" width="1200" height="54">
            </a>
        </div>

        <div class="floor-main">
            <div class="leftAD">
                <a href="" title="三星 S10 全网通版" class="topAD anim-zoom">
                    <img class="get-src" src="img/${item5.img1}" width="190" height="290">
                    <div class="diy-tip">
                        <h3 style="color:${item5.color}">三星 S10 全网通版</h3>
                        <p class="grey-6">骁龙855 超清4K拍摄</p>
                    </div>
                </a>

                <div class="bottomAD" style="background:${item5.color}">
                    <a href="" class="textAD ellipsis" style="background:${item5.color}">
                        三星 Galaxy S10 全网通版
                        <em>&gt;</em>
                    </a>
                    <dl>
                        <dt>热销榜</dt>
                        <dd><span><a class="white" href="">快速充电</a></span><span><a class="white" href="">拍照神器</a></span><span><a
                                    class="white" href="">全面屏</a></span><span><a class="white" href="">面部解锁</a></span></dd>
                    </dl>
                </div>
            </div>
            <div class="shop-list">
                <ul class="">
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="anim-left">
                            <img class="get-src" src="img/${item5.img2}" width="120" height="120">
                            <div class="diy-tip" style="color:${item5.color}">
                                <h3>iPhone XS 全网通版</h3>
                                <p style="color: #555">超视网膜显示屏</p>
                                <div class="get-price">￥7270.00</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="rightAD">
                <a href="" class="anim-left">
                    <img class="get-src" src="img/${item5.img3}" width="80" height="80">
                    <div class="diy-tip" style="color:${item5.color}">
                        <h3>华为畅享8全网通</h3>
                        <p style="color:#555">柔光自拍 后置双摄</p>
                    </div>
                </a>
                <a href="" class="anim-left">
                    <img class="get-src" src="img/${item5.img3}" width="80" height="80">
                    <div class="diy-tip" style="color:${item5.color}">
                        <h3>华为畅享8全网通</h3>
                        <p style="color:#555">柔光自拍 后置双摄</p>
                    </div>
                </a>
                <a href="" class="anim-left">
                    <img class="get-src" src="img/${item5.img3}" width="80" height="80">
                    <div class="diy-tip" style="color:${item5.color}">
                        <h3>华为畅享8全网通</h3>
                        <p style="color:#555">柔光自拍 后置双摄</p>
                    </div>
                </a>
                <a href="" class="anim-left">
                    <img class="get-src" src="img/${item5.img3}" width="80" height="80">
                    <div class="diy-tip" style="color:${item5.color}">
                        <h3>华为畅享8全网通</h3>
                        <p style="color:#555">柔光自拍 后置双摄</p>
                    </div>
                </a>
            </div>
        </div>
        
        <div class="floor-bottom">
            <div class="link-list">
                    <span class="fl" style="color:${item5.color}">品质推荐</span>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
                    <a href="" style="color:${item5.color}">苹果</a>
            </div>
            <div class="link-bg" style="background:${item5.color}"></div>
        </div>
    </div>`
    }).join('');
    var floorbox = document.getElementById('floor-box')
    // console.log(floorbox)
    floorbox.innerHTML = floorlist;
    //---------------------------结束---------------------------------
    //更多好货------------渲染数据----------开始-----------------------
    var moredata = [{
        'id': 1,
        'moreimg':'more1.jpg',
    },{
        'id': 2,
        'moreimg':'more1.jpg',
    },{
        'id': 3,
        'moreimg':'more1.jpg',
    },{
        'id': 4,
        'moreimg':'more1.jpg',
    },{
        'id': 5,
        'moreimg':'more1.jpg',
    },{
        'id': 6,
        'moreimg':'more1.jpg',
    },{
        'id': 7,
        'moreimg':'more1.jpg',
    },{
        'id': 8,
        'moreimg':'more1.jpg',
    },{
        'id': 9,
        'moreimg':'more1.jpg',
    },{
        'id': 10,
        'moreimg':'more1.jpg',
    }];
    var morelist1= moredata.map(function(item6){
        return ` <li class="anim-top" data-id="${item6.id}">
        <a href="">
            <span class="goodimg">
                <img src="img/${item6.moreimg}">
            </span>
            <div class="row2 margin-top font14" style="max-height:40px;">三星安卓通用快充专用数据线</div>
            <p class="red">￥28</p>
        </a>
    </li>`
    }).join('');
    var morebox = document.getElementById('morelist');
    morebox.innerHTML = morelist1;
    //---------------------------结束---------------------------------
    
=======

        //城市选择事件



>>>>>>> c7d1ca25d767eef6490e466cb9bd0fc480f7ce83
    })


}