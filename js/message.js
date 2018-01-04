
$(function(){

    function message_js(){
        var Tpd = true;
        //判断内容
        $(document).on("click",".submit-btn",function(){

            if(Tpd){
                var name = $('#name').val();
                var phone = $('#phone').val();
                var email = $('#email').val();
                var text = $('#text').val();

                var name_re = name.replace(/\s/g, "").length == 0;
                var text_re = text.replace(/\s/g,"").length == 0;

                var phone_reg = /^0?(13|15|17|18|14)[0-9]{9}$/;
                var sgphone_reg = /^0{0,2}(852|853|886)-?(09|9)?[0-9]{8}$/;
                var email_reg = /^[a-z0-9]+([._-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

                var Tlang = $('meta[name=Tlang]').attr('content');
                if(Tlang == "Eng"){
                    if(name_re){
                        alert("Please enter your name！");
                        return false;
                    }
                    if(!phone_reg.exec(phone) && !sgphone_reg.exec(phone)){
                        alert("Please enter contact number！");
                        return false;
                    }
                    if(!email_reg.exec(email)){
                         alert("Please enter your email!");
                        return false;
                    }
                    if(text_re){
                        alert("Please enter your message！");
                        return false;
                    }
                }else{
                    if(name_re){
                        alert("请输入姓名！");
                        return false;
                    }
                    if(!phone_reg.exec(phone) && !sgphone_reg.exec(phone)){
                        alert("请输入联系电话！");
                        return false;
                    }
                    if(!email_reg.exec(email)){
                        alert("请输入邮箱地址！");
                        return false;
                    }
                    if(text_re){
                        alert("请输入留言内容！");
                        return false;
                    }
                }
               
                // Tpd = false;
                alert("提交成功！！！")
                $('.submit-btn').css('backgroundColor','#757373');
                $('.submit-btn').text('提交成功');
            }
            
        });
    };
    message_js();


});
