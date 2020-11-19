var banner = document.getElementsByClassName('hot')[0];
var lis = document.getElementsByClassName('uls')[0].getElementsByTagName('li');
console.log(lis);
var timer = null, timer_ = null;
var num = 1;
banner.scrollLeft = lis[0].offsetWidth;
function auto(){
    timer = setInterval(function () {
        clearInterval(timer_);
        num++;
        if (num >= lis.length) {
            num = 1;
            banner.scrollLeft = 0;
        }
        var step = 0;
        var maxstep = 40;
        var start = banner.scrollLeft;
        var end = lis[0].offsetWidth * num;
        var evestep = (end - start) / maxstep;
        timer_ = setInterval(function () {
            step++;
            if (step >= maxstep) {
                step = 0;
                clearInterval(timer_);
            }
            start = start + evestep;
            banner.scrollLeft = start;
        }, 20);
        for (let h = 0; h < lis.length; h++) {
            lis[h].onmouseenter = function () {
                clearInterval(timer);
                clearInterval(timer_);
                lis[h].onmouseleave = function () {
                    auto();
                }
            }
        }
    }, 2000);
}
auto();


$('#logon').on('click',function(){
    $('.logon').css('display','block');
});

$('#cha').on('click',function(){
    $('.logon').css('display','none');
});


window.onscroll=function(){
    if(document.documentElement.scrollTop===0){
        skip_.style.display ='none';
    }else{
        skip_.style.display ='block';
    }
}
skip_.onclick=function(){
    document.documentElement.scrollTop=0;
    // skip_.style.display ='none';
}


$('.logon-logon').on('click',function(){
    var user = $('input[type=text]').val();
    var pwd = $('input[type=password]').val();
    $.ajax({
        type:"post",
        url:"http://192.168.1.64:3000/users/login",
        data:{
            username:user,
            password:pwd,
        },
        success:function(res){
            console.log(res);
            if(res.msg=='登录成功！'){
               $('.logon').css('display','none'); 
            }else{
                alert(res.msg);
            }
        },
        dataType:'json',
    })
});