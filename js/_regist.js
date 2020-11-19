function send(){
    var num = 5;
    gain.disabled = true;
    gain.innerHTML = num+'秒后获取';
   var time = setInterval(function(){
        num--;
        gain.innerHTML = num+'秒后获取';
        
        if(num==0){
            clearInterval(time);
            gain.innerHTML = '重新获取验证码';
            gain.disabled = false;
        }
    },1000)
}

//手机号
var phoneStr = /^1[3|4|5|7|8][0-9]{9}$/;
//用户名
var userNameStr = /^[0-9a-zA-Z_]{4,8}$/;
//密码
var passwordStr = /^[0-9a-zA-Z_]{6,12}$/;
//数字验证
var num = /^\d[0-9]{2}\d$/g; 

$('#phone').on('blur',function(){
   if($('#phone').val() == '' || phoneStr.test($('#phone').val())==false){
       $('#phone').next().show();
   }else{
       $('#phone').next().hide();
   }
});
$('#img-verify').on('blur',function(){
   if($('#img-verify').val() != 'r2b7'){
       $('#img-verify').next().next('span').show();
   }else{
       $('#img-verify').next().next('span').hide();
   }
});
$('#verify').on('blur',function(){
   if($('#verify').val() == '' || num.test($('#verify').val())==false){
       $('#verify').next().next('span').show();
   }else{
       $('#verify').next().next('span').hide();
   }
});

$('#user').on('blur',function(){
   if($('#user').val() == '' || userNameStr.test($('#user').val())==false){
       $('#user').next().show();
   }else{
       $('#user').next().hide();
   }
});
$('#pwd').on('blur',function(){
   if($('#pwd').val() == '' || passwordStr.test($('#pwd').val())==false){
       $('#pwd').next().show();
   }else{
       $('#pwd').next().hide();
   }
});

$('#repwd').on('blur',function(){
   if($('#repwd').val() != $('#pwd').val() ){
       $('#repwd').next().show();
   }else{
       $('#repwd').next().hide();
   }
});

$('#regist').on('click',function(){
   var phoneNumber = $('#phone').val();
   var imgCode = $('#img-verify').val();
   var code = $('#verify').val();
   var userName=$('#user').val();
   var password=$('#pwd').val();
   var rePassword=$('#repwd').val();
   console.log(userName);
   $.ajax({
       type:"post",
       url: "http://192.168.1.64:3000/users/register",
       data: "&phone=" + phoneNumber + "&code=" + imgCode + "&username=" + userName + "&password=" + password,
       success: function(res){
               console.log(res);
                if(res.status == 200){
                    window.location.href = './index.html';
                }else{
                    alert(res.msg);
                }
               
       }   
   });
});
