

window.onload = function () {
    $(function () {
        //取session storage的数据进行渲染
        var yunlist =sessionStorage.getItem('value');
        var dataobj = JSON.parse(yunlist)
        console.log(dataobj)
        $.each(dataobj,function(i,item){
            console.log(item.id)
            var html4 = '../img/列表页渲染图片/'+item.images;
            $('#previewbox img:nth-child(1)').attr('src',html4);
            $('.procuct-name span').html(item.title);
            $('#yunprice').html(item.price)
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
            url: "lib/city/city.min.js",
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
                            console.log(item.s)
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
        //全部分类下拉显示
        $('.fenlei').hover(function () {
            $('.navmenu').css({
                'display': 'block',
                // 'overflow': 'visible',
            })
        }, function () {
            $('.navmenu').css({
                'display': 'none',
            })
        })
        //下拉详情页指向
        $('.navmenu').hover(function () {
            $('.navmenu').css({
                'display': 'block',
            })
        }, function () {
            $('.navmenu').css({
                'display': 'none',
            })
        })
        //
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
        //回到顶部功能
        $('.tool-top').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        })
    })
    //放大镜开始！！！！！
    var box = document.getElementById("previewbox"); //原图大盒子
    var move = document.getElementById("move"); //鼠标在原图移动时遮罩
    var bimg = document.getElementById("zoomer-pane-container"); //放大镜图片盒子
    var imglist = document.querySelectorAll('.img');
    var imgbox = document.getElementById('thumblist');
    var lis = imgbox.querySelectorAll('.thumb-item');
    var imgnum = 1;

    // console.log(lis)
    // 2、鼠标移 进 显示 遮罩 和 放大镜
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function (ev) {
            var ev = window.event || event;
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.borderColor = '#fff';
                imglist[i].style.display = 'none';
            }
            this.style.borderColor = '#f40';
            imglist[this.index].style.display = 'block';
            var src = ev.srcElement;
            imgnum = src.id;
            var maxX = parseInt(getStyle(imglist[this.index], 'width'));
            var maxY = parseInt(getStyle(imglist[this.index], 'height'));
            boxmove(imgnum, maxX, maxY);
        }
    }
    box.onmouseover = () => {
        bimg.style.display = 'block';
        move.style.display = 'block';
    }
    // 3、鼠标移 出 隐藏 遮罩 和 放大镜
    box.onmouseout = () => {
        bimg.style.display = 'none';
        move.style.display = 'none';
    }
    //所需的封装临界值
    function getOffsetX(offset, min, max) {
        if (offset < min) {
            offset = min;
        } else if (offset > max) {
            offset = max;
        }
        return offset;
    }
    var ev = window.event || event;
    
    function boxmove(num, boxw, boxh) {
        box.onmousemove = (ev) => {
            //做兼容低版本

            //clientX / Y 获取鼠标 水平 和 垂直 相对于  浏览器窗口  的位置
            var X = ev.clientX;
            var Y = ev.clientY;
            //获取box 盒子 距离 body 顶部的距离
            var T = box.offsetTop;
            //获取box 盒子 距离最左侧的距离
            var L = box.offsetLeft;
            //计算遮罩 move 的 水平 位置
            var left = X - L - move.offsetWidth*2;
            //计算遮罩 move 的 垂直 位置
            var top = Y - T - move.offsetHeight*2;
            //左右 临界值 判断
            var left1 = getOffsetX(left, 0, boxw - move.offsetWidth);
            //上下 临界值 判断
            var top1 = getOffsetX(top, 0, boxh - move.offsetHeight);
            //设置move的 Top / Lefe 的位置
            move.style.top = top1 + 'px';
            move.style.left = left1 + 'px';
            //精灵图控制
            bimg.style.background = 'url(../img/liebiao/list1-' + num + '.jpg) no-repeat -' + left1 + 'px -' +
                top1 + 'px';
        }
    }
    boxmove(1, box.offsetWidth, box.offsetHeight)
}