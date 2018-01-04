(function($){
    $.fn.cc = function(){
        var $header = $(this);
        /*包裹节点*/
        $header.wrapInner("<div class='hd-fixed-top'></div>");
        var hd_offsettop = $header.offset().top;
        $(window).scroll(function(){

            var s = $(window).scrollTop();
            if(s <= hd_offsettop){
                $('.hd-fixed-top').removeClass('hd-fixed-fix');
            }
            else{
                $('.hd-fixed-top').addClass('hd-fixed-fix');
            }
        })
    }
})(jQuery);

$(function(){
    //先判断中英文
    function header_add(){
        var Tlang = $('meta[name=Tlang]').attr('content');

        if(Tlang == "Eng"){
            /*************
                英文
            ****************/
            var index = "index_E.html";
            var about = "about_E.html";
            var product = "product_E.html";
            var news = "news_E.html";
            var message = "index_E.html#message";
            var contact = "contact_E.html";
            var index_l = "index_C.html";

            var sanbou = "http://www.sunbou.net";
            var beian = "http://www.miitbeian.gov.cn";

            var header_add = "<div class='hd-top clearfix wrap'>"+
                                "<div class='top-r'>"+
                                    "<p><i class='iconfont ico-dh'></i>Phone：<span>0754-89939678</span></p>"+
                                "</div>"+
                                "<div class='top-l'>"+
                                    "<p><i class='iconfont ico-fz'></i>Welcome to the official website of shantou dmao plastic industrial co., LTD.</p>"+
                                "</div>"+
                            "</div>"+
                            "<div class='hd-bottom'>"+
                                "<div class='wrap'>"+
                                    "<div class='hd-nav'>"+
                                        "<ul class='clearfix'>"+
                                            "<li><a href="+index+">Home</a></li>"+
                                            "<li><a href="+about+">About</a></li>"+
                                            "<li><a href="+product+">Products</a></li>"+
                                            "<li><a href="+news+">News</a></li>"+
                                            "<li><a href="+message+">Message</a></li>"+
                                            "<li><a href="+contact+">Contact</a></li>"+
                                            "<li><a href="+index_l+">China</a></li>"+
                                        "</ul>"+
                                    "</div>"+
                                    "<div class='hd-logo'>"+
                                        "<a href="+index+">"+
                                            "<img src='image/hd-logo.jpg' />"+
                                        "</a>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";


            var footer_add = "<p>"+
                                "<a href="+beian+">Shantou mausen plastic industrial co. LTD © All rights reserved：粤ICP备XXX</a>"+
                                "<a href="+sanbou+">Technical Support：SanBou</a>"+
                            "</p>";

            $(".header").append(header_add);
            $(".footer").append(footer_add);
            
        }else{
            /********************
                中文
            ***********************/
            var index = "index_C.html";
            var about = "about_C.html";
            var product = "product_C.html";
            var news = "news_C.html";
            var message = "index_C.html#message";
            var contact = "contact_C.html";
            var index_l = "index_E.html";

            var sanbou = "http://www.sunbou.net";
            var beian = "http://www.miitbeian.gov.cn";

            var header_add = "<div class='hd-top clearfix wrap'>"+
                                "<div class='top-r'>"+
                                    "<p><i class='iconfont ico-dh'></i>热线电话：<span>0754-89939678</span></p>"+
                                "</div>"+
                                "<div class='top-l'>"+
                                    "<p><i class='iconfont ico-fz'></i>欢迎访问汕头市德茂森塑胶实业有限公司官方网站！</p>"+
                                "</div>"+
                            "</div>"+
                            "<div class='hd-bottom'>"+
                                "<div class='wrap'>"+
                                    "<div class='hd-nav'>"+
                                        "<ul class='clearfix'>"+
                                            "<li><a href="+index+">网站首页</a></li>"+
                                            "<li><a href="+about+">企业简介</a></li>"+
                                            "<li><a href="+product+">产品中心</a></li>"+
                                            "<li><a href="+news+">新闻动态</a></li>"+
                                            "<li><a href="+message+">在线留言</a></li>"+
                                            "<li><a href="+contact+">联系我们</a></li>"+
                                            "<li><a href="+index_l+">English</a></li>"+
                                        "</ul>"+
                                    "</div>"+
                                    "<div class='hd-logo'>"+
                                        "<a href="+index+">"+
                                            "<img src='image/hd-logo.jpg' />"+
                                        "</a>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";


            var footer_add = "<p>"+
                                "<a href="+beian+">汕头市德茂森塑胶实业有限公司 © 版权所有 备案号：粤ICP备XXX</a>"+
                                "<a href="+sanbou+">技术支持：汕头市三互科技有限公司</a>"+
                            "</p>";

            $(".header").append(header_add);
            $(".footer").append(footer_add);   
        }
    };
    header_add();




     /*************************************
        导航样式添加
     ************************************/
    function nav_act(n){
        $(".hd-nav ul li").eq(n).addClass('active').siblings('li').removeClass('active');
    };
    function nav_reg(){
        //获取文件名
        var filename=window.location.href;
        filename=filename.substr(filename.lastIndexOf("/")+1);

        //判断是文件名还是端口号进入
        if(filename.indexOf("html")>=0 || filename.indexOf("aspx")>=0){
            
            //获取文件名的头几个字符
            filename = filename.substr(0,filename.indexOf("_",2))
        }
        else{
            filename = "index";
        }

        //循环判断文件名对应的导航
        $(".hd-nav ul li a").each(function(){
            var Tn = $(this).attr("href");

            if(Tn.indexOf(filename)>=0){
                var Tindex = $(this).parent().index();
                nav_act(Tindex);

                return false;
            }
        });
    };
    nav_reg();


    /***********************
        导航置顶
    ***********************/
    // function hd_fixed_top(){
    //     var $header = $(".hd-bottom");

    //     /*包裹节点*/
    //     $header.wrapInner("<div class='hd-fixed-top'></div>");

    //     var hd_offsettop = $header.offset().top;
    //     var ss = $(window).scrollTop();
    //     $(window).scroll(function(){

    //         var s = $(window).scrollTop();
    //         if(s <= hd_offsettop){
    //             $('.hd-fixed-top').removeClass('hd-fixed-fix');
    //         }
    //         else{
    //             $('.hd-fixed-top').addClass('hd-fixed-fix');
    //         }
    //     })
    // }
    // hd_fixed_top();

    $(".hd-bottom").cc();
});

