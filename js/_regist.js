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

