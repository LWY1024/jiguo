$(function(){
    $.ajax({
        url:'http://192.168.1.64:3000/useing/master',
        success:function(res){
            inHtml(res);
        }
    });
});
function inHtml(date){
    var dot_tem = doT.template($('#list_template').text());
    $('.bottom-master ul').html(dot_tem(date));
    console.log(date)
}