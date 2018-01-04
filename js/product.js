    $(function(){

        /******************
            产品详情弹框
        ********************/
        function tk(){
            var $zhizhao = $(".zhizhao");
            var $doc = $("html body");
            var $pd = $(".product-details");

            /**********************
                计算滚动条偏移量弹框弹出时使body不偏移
            *************************/
            function sorll_margin(){
                var H = $('html')
                w1 = $(window).width();
                H.addClass('fancybox-lock-test');
                w2 = $(window).width();
                H.removeClass('fancybox-lock-test');
                $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
            }
            sorll_margin();

            $(".product-menu").on("click","a",function(){
                $pd.removeClass('product-details-close');
                $zhizhao.removeClass('zhizhao-close');
                $doc.addClass('fancybox-margin');

            });
            $(".main").on("click",".tkgb",function(){
                $pd.addClass('product-details-close');
                $zhizhao.addClass('zhizhao-close');
                $doc.removeClass('fancybox-margin');
            });
        }
        tk();


        /**********************
            添加产品导航样式
        **********************/

        //获取地址栏参数
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]); return null;
        }
        //获取a标签的链接的参数组成数组    (a标签地址参数名，a标签对象)
        function TString(name,obja) {
            var arr = [];
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

            $.each(obja, function () {
                var Tindex = $(this).parent().index();
                var Ts = $(this).attr('href');
                var Tb = Ts.substring(Ts.indexOf('?'), Ts.length);
                var r = Tb.substr(1).match(reg);
                if(r != null){
                    //可不要用json数组
                    arr.push({name:decodeURI(r[2]),p_index:Tindex});
                    //组成数组
                    // arr.push(decodeURI(r[2]));
                }
            })
            return arr;
        }

        /******************** a链接添加一级导航判断 ******************/
        function addTpdone(Tobj,index){
            var Turl = Tobj.attr("href");
            if(!Turl.indexOf("?") < 0){
                Turl += "?"
            }
            Turl += "&Tpone=" + index
            Tobj.attr("href",Turl);
        }

        function Tpdfirst(){
            $(".product-nav .p-nav").on("click","li a",function(){
                var $li = $(this).parent();
                $li.addClass('active').siblings().removeClass('active');
                var index = $li.index();
                addTpdone($(this),index);
            });

        };
        Tpdfirst();

        function Tactive() {
            var Tname = getQueryString("fl");
            var Tpone = getQueryString("Tpone");

            var $Tponeli = $(".product-nav .p-nav li");
            var $Tptwoul = $(".product-nav .psub-nav");
            //分类一
            if(Tpone == null){
                Tpone = 0;
            }
            $Tponeli.eq(Tpone).addClass('active');
            $Tptwoul.on("click","li a",function(){
                addTpdone($(this),Tpone)
            });

            //分类二
            if(Tname != null){
                var Tarr = TString('fl',$('.psub-nav li a'));

                for(var i=0;i<Tarr.length;i++){
                    if (Tarr[i].name == Tname) {
                        var Tindex = Tarr[i].p_index
                        $('.psub-nav li').eq(Tindex).addClass('active');
                        return false;
                    }
                }
            }
        }
        Tactive();

    });