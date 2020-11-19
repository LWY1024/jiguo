$(function(){
    $.ajax({
        url:'http://192.168.1.64:3000/useing/public',
        success:function(res){
            inHtml(res);
        }
    });
});
function inHtml(date){
    var dot_tem = doT.template($('#list_template').text());
    $('.bottom-master ul').html(dot_tem(date));
    console.log(date);
}


// $('#logins').on('click',function(){
//     $.ajax({
//         url:'http://192.168.1.64:3000/useing/public',
//         success:function(res){
//             inHtml(res);
//             // console.log(res);
//         }
//     });
//     function inHtml(date){
//            $('#logins').html('没有更多了');
//            var dot_tems = doT.template($('#list_template').text());
//            $('.bottom-master #list-s').html(dot_tems(date));
//            console.log(date)
//        }
// });

$('.bottom-master li').on('click',function(){
    window.location.href = './use-dateil.html';
});

