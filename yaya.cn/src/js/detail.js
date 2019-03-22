window.onload = function () {
    $(function () {
        updata()

        function updata() {
            var uid = getCookie('uid');
            var name = getCookie('username');
            if (uid) { //已经登陆之后cookie会有uid存在 0就是没有登录状态 有就是已登录
                //已登录
                $('#login').css('color','#58bc58').html(name);
                $('#reg').css('color','red').html('退出');
                $('#reg').attr('href','javascript:;');
                $('#userInfo p').html(name);
                $('#userInfo p').next().html('');
                $('#userInfo p').next().next().css('color','red').html('退出');
                $('#userInfo p').next().next().css('color','red').attr('href','javascript:;');
                $('#reg').on('click',function(){
                    $.ajax({
                        type: "post",
                        url: "../api/guestbook/index.php",
                        async: true,
                        data: "m=index&a=logout",
                        success: function (str) {
                            console.log(str);
                            var arr = JSON.parse(str);
                            alert(arr.message);
                            setTimeout(function(){
                                window.location.reload()
                            },1000)
                        }
                    })
                })
            } else {
                //这里是未登录状态
                
            }
        }
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
        //获取list的数据---------33 22 11 act -------------------------
        var listbox = document.getElementById('listBox');
        var btnnext = document.getElementById('btnnext');
        var btnprev = document.getElementById('btnprev');
        var ipage = 1; //第一页
        var inum = 16; //每页5条
        var url = '../api/04page.php';
        var data = 'page=' + ipage + '&qty=' + inum;
        //开始使用ajax获取数据
        //封装ajax获取数据函数
        ajax('post', url, data, function (str) {
            // sessionStorage.setItem('value',str);
            // console.log(str)
            var lis = JSON.parse(str);
            var arr = lis.data;
            //获取数据源进行渲染
            var res = arr.map(function (item) {
                return ` <li data="${item.id}">
                <a href="javascript:;" class="main-pic-link">
                    <img src="../img/列表页渲染图片/${item.images}" alt="" class="main-pic">
                </a>

                <div class="sku-color flex mt-5 overflow-hide">
                    <a href="" class="flex-child-noshrink">
                        <img src="../img/列表页渲染图片/${item.images}" alt="">
                    </a>
                    <a href="" class="flex-child-noshrink">
                        <img src="../img/列表页渲染图片/${item.images}" alt="">
                    </a>
                    <a href="" class="flex-child-noshrink">
                        <img src="../img/列表页渲染图片/${item.images}" alt="">
                    </a>
                    <a href="" class="flex-child-noshrink">
                        <img src="../img/列表页渲染图片/${item.images}" alt="">
                    </a>
                    <a href="" class="flex-child-noshrink">
                        <img src="../img/列表页渲染图片/${item.images}" alt="">
                    </a>
                </div>

                <a href="" title="${item.title}"
                    class="lines-2 mt-5">${item.title}
                </a>
                <div class="price mt-5 mb-5 flex">
                    <span>
                        <b class="red font-14">￥${item.price}</b>
                    </span>
                </div>
                <p class="grey-9">
                    已有
                    <a href="" class="grey-9">
                        4
                    </a> 人评价
                </p>
            </li>`
            }).join('');

            listbox.innerHTML = res;
            // console.log(arr)
            var total = lis.total;
            var html4 = '共' + total + '条'
            $('.el-pagination__total').html(html4)
            //渲染按钮进行分页处理
            var pageBtn = document.getElementById('pager');
            var pages = Math.ceil(lis.total / lis.num);
            var html = '';
            for (var i = 0; i < pages; i++) {
                html += ` <li class="number">${i+1}</li>`;
            }
            pageBtn.innerHTML = html;
            // pageBtn.children[0].className = 'active';
            //jq控制排他按钮颜色
            $('#pager li:nth-child(1)').addClass('active')
            //下一页的按钮触发
            next()

            function next() {
                btnnext.onclick = function () {
                    listbox.innerHTML = '';
                    ipage++
                    var num = 16;
                    var data = 'page=' + ipage + '&qty=' + num;
                    ajax('post', url, data, function (str) {

                        var lis = JSON.parse(str);
                        var arr = lis.data;
                        // console.log(lis)
                        var res = arr.map(function (item) {
                            return ` <li data="${item.id}">
                        <a href="javascript:;" class="main-pic-link">
                            <img src="../img/列表页渲染图片/${item.images}" alt="" class="main-pic">
                        </a>
        
                        <div class="sku-color flex mt-5 overflow-hide">
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                        </div>
        
                        <a href="" title="${item.title}"
                            class="lines-2 mt-5">${item.title}
                        </a>
                        <div class="price mt-5 mb-5 flex">
                            <span>
                                <b class="red font-14">￥${item.price}</b>
                            </span>
                        </div>
                        <p class="grey-9">
                            已有
                            <a href="" class="grey-9">
                                4
                            </a> 人评价
                        </p>
                    </li>`
                        }).join('');

                        listbox.innerHTML = res;
                        $('#pager').find('li').eq(ipage - 1).addClass('active').siblings().removeClass('active')

                    })

                }
            }

            //上一页的按钮触发分页
            btnprev.onclick = function () {
                listbox.innerHTML = '';
                ipage--;
                var data = 'page=' + ipage + '&qty=' + inum;
                ajax('post', url, data, function (str) {
                    var lis = JSON.parse(str);
                    var arr = lis.data;
                    // console.log(lis)
                    var res = arr.map(function (item) {
                        return ` <li data="${item.id}">
                        <a href="javascript:;" class="main-pic-link">
                            <img src="../img/列表页渲染图片/${item.images}" alt="" class="main-pic">
                        </a>
        
                        <div class="sku-color flex mt-5 overflow-hide">
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                        </div>
        
                        <a href="" title="${item.title}"
                            class="lines-2 mt-5">${item.title}
                        </a>
                        <div class="price mt-5 mb-5 flex">
                            <span>
                                <b class="red font-14">￥${item.price}</b>
                            </span>
                        </div>
                        <p class="grey-9">
                            已有
                            <a href="" class="grey-9">
                                4
                            </a> 人评价
                        </p>
                    </li>`
                    }).join('');

                    listbox.innerHTML = res;
                    $('#pager').find('li').eq(ipage - 1).addClass('active').siblings().removeClass('active')

                })
            }
        })
        //降序排序按钮触发事件
        $('.price-ascending').on('click', function () {

            $.ajax({
                type: "post",
                url: "../api/goodlist.php",
                async: true,
                data: "APItype=goodlistdown&page=" + ipage + "&qty=" + inum,
                success: function (str) {
                    var arr = JSON.parse(str);
                    var html6 = '';
                    $.each(arr.list, function (i, item) {
                        var html5 = ` <li data="${item.id}">
                        <a href="javascript:;" class="main-pic-link">
                            <img src="../img/列表页渲染图片/${item.images}" alt="" class="main-pic">
                        </a>
        
                        <div class="sku-color flex mt-5 overflow-hide">
                            <a href="/" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                        </div>
        
                        <a href="" title="${item.title}"
                            class="lines-2 mt-5">${item.title}
                        </a>
                        <div class="price mt-5 mb-5 flex">
                            <span>
                                <b class="red font-14">￥${item.price}</b>
                            </span>
                        </div>
                        <p class="grey-9">
                            已有
                            <a href="" class="grey-9">
                                4
                            </a> 人评价
                        </p>
                    </li>`;
                        html6 += html5
                        $('#listBox').html(html6)
                    })

                }

            })
        })
        //升序按钮触发事件
        $('.price-descending').on('click', function () {
            $.ajax({
                type: "post",
                url: "../api/goodlist.php",
                async: true,
                data: "APItype=goodlistup&page=" + ipage + "&qty=" + inum,
                success: function (str) {
                    var arr = JSON.parse(str);
                    var html7 = '';
                    $.each(arr.list, function (i, item) {
                        var html8 = ` <li data="${item.id}">
                        <a href="javascript:;" class="main-pic-link">
                            <img src="../img/列表页渲染图片/${item.images}" alt="" class="main-pic">
                        </a>
                        <div class="sku-color flex mt-5 overflow-hide">
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                            <a href="" class="flex-child-noshrink">
                                <img src="../img/列表页渲染图片/${item.images}" alt="">
                            </a>
                        </div>
                        <a href="" title="${item.title}"
                            class="lines-2 mt-5">${item.title}
                        </a>
                        <div class="price mt-5 mb-5 flex">
                            <span>
                                <b class="red font-14">￥${item.price}</b>
                            </span>
                        </div>
                        <p class="grey-9">
                            已有
                            <a href="" class="grey-9">
                                4
                            </a> 人评价
                        </p>
                    </li>`;
                        html7 += html8
                        $('#listBox').html(html7)
                    })
                }
            })
        })
        //回到顶部功能
        $('.tool-top').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        })
        var ipage = 1; //第一页
        var inum = 16; //每页5条
        //点击获取商品id发起数据库查询
        $('#listBox').on('click', 'li', function () {
            console.log($(this).attr('data'))
            var dataid = $(this).attr('data');
            
            $.ajax({
                type: "get",
                url: "../api/06find_id.php",
                async: true,
                data: "id=" + dataid,
                success: function (str) {
                    console.log(str)
                    sessionStorage.setItem('value',str);
                    window.open('detailPages.html')
                }
            })
        })
    })
}