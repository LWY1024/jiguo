$(function(){

    // $('._content').on('mouseenter',function(){
    //     $(this).find('._text').css('display','block');
    // });
    // $('._content').on('mouseleave',function(){
    //     $(this).find('._text').css('display','none');
    // });

    $('._content').hover(function(){
        $(this).find('._text').fadeToggle('normal');
    },function(){
        $(this).find('._text').fadeToggle('normal');
    });

    // $('._content').hover(function(){
    //     $(this).find('._text').toggle(showOrHide);
    //     if (showOrHide) {
    //         $('#foo').show();
    //       } else {
    //         $('#foo').hide();
    //       } 
    // },function(){
    //     $(this).find('._text').toggle(showOrHide);
    //     if (showOrHide) {
    //         $('#foo').show();
    //       } else {
    //         $('#foo').hide();
    //       } 
    // });



});