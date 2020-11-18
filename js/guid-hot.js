// var click_ = document.getElementById('click_');
// console.log(click_)
var jia_ = document.getElementsByClassName('jia_')[0];
click_.onclick=function(){
    jia_img.style.display = 'none';
    click_.innerHTML = '请稍等正在加载中'
    if (window.XMLHttpRequest) {
        var ajax_ = new XMLHttpRequest();
    } else {
        var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
    }
    ajax_.open('get', 'http://192.168.1.64:3000/guid/hot', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState === 4) {
            if (ajax_.status === 200) {
                var data = ajax_.responseText;
                data = eval('(' + data + ')');
                console.log(data);
                click_.innerHTML = '没有更多~';
                var dot_tem = doT.template(document.getElementById('list_template').innerText);
                list.innerHTML = dot_tem(data);
            }
        }
    }
}



