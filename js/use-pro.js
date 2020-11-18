// $(function(){
//     $.ajax({
//         url:'http://192.168.1.64:3000/useing/public',
//         success:function(res){
//             inHtml(res);
//         }
//     });
// });
// function inHtml(date){
//     var dot_tem = doT.template($('#list_template').text());
//     $('.bottom-master ul').html(dot_tem(date));
//     console.log(date)
// }


$('#logins').on('click',function(){
    $.ajax({
        url:'http://192.168.1.64:3000/useing/public',
        success:function(res){
            inHtml(res);
        }
    });
});
function inHtml(date){
    $('.jiazai').css('background','none')
    $('#logins').html('没有更多了');
    var dot_tem = doT.template($('#list_template').text());
    $('.bottom-master #lists').html(dot_tem(date));
    console.log(date)
}



// var login = document.getElementById('logins');
// // console.log(login);
// login.onclick=function(){
//     var ajax_=new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
//     ajax_.open('get','http://192.168.1.64:3000/useing/public',true);
//     ajax_.send();
//     ajax_.onreadystatechange=function(){
//         if(ajax_.status===200){
//             if(ajax_.readyState===4){
//                 var datas = ajax_.reponseText;
//                 datas = eval('('+datas+')');
//                 login.innerHTML='没有更多了~';
//                 var dotem = doT.template(document.getElementById('list_template').innerHTML);
//                 list.innerHTML = dotem(datas);
//         }
//     }
// }
// }
