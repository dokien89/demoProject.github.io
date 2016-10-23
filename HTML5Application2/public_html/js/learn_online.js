/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){

});




$(document).ready(function () {
    /*css panel show hide*/
    var o=$('.overlayp'),r=$('.revealp'),p=$('.pushp'),ob=$('.overlay'),rb=$('.reveal'),pb=$('.push'),m=$('.main'),panel=$('.panel');
  panel.css('min-height',m.outerHeight());
  
ob.click(function(){
  o.toggleClass('active');
});
rb.click(function(){
  m.toggleClass('ractive');
});
  pb.click(function(){
  m.toggleClass('pactive');
  p.toggleClass('active');
});
  $('.close').click(function(){
    o.removeClass('active');
    p.removeClass('active'); m.removeClass('pactive').removeClass('ractive');
  });
    
    
    
    
    
    
    
    
    /*end*/
    $(".lesson").click(function () {
        var string = "video/" + $(this).attr("href").substring(1) + ".mp4";
        var video = '<video controls> <source src="' + string + '" type="video/mp4"></video>';
        $("#lesson_video").html(video);
    });

$("#tabs_coding" ).tabs();

    $('.ui-content .lesson_collapse').click(function () {
        //$('#overlay').attr("data-role", "panel");
    });

    $(".lesson_mobile").click(function () {
        var string = "video/" + $(this).attr("href").substring(1) + ".mp4";
        var video = '<video controls> <source src="' + string + '" type="video/mp4"></video>';
        $("#lesson_video").html(video);
        $('#overlay').panel('close');
    });

    $(window).resize(function () {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('#overlay').panel('close');
        } else if ($(this).width() < 1280 && $(this).width() >= 980) {

        } else {

        }
    });

    $('#get_excersice').click(function () {
        window.location.hash = "challenge";
    });
    
    $('#runCode').click(function(){
        $('#result_code').html(
                '<style></style><body><p><b>Note:</b> This example does not work in Internet Explorer 9 and earlier versions.</p><div></div></body>');           
    });
    /*
     window.onload = function () {
     if (window.matchMedia('(min-width: 992px)').matches)
     {
     $('#overlay').removeAttr('data-role');
     
     }else{
     //$('#overlay').html('<b>dddh<b/>');
     }
     
     };
     
     
     
     /*
     $('#showmenu').click(function() {
     $('.sidebarmenu').show();
     
     var hidden = $('.sidebarmenu').data('hidden');
     $('#showmenu').text(hidden ? 'Hide Menu' : 'Show Menu');
     if(hidden){
     $('.sidebarmenu').animate({
     left: '0px'
     },500);
     $('.all_video').hide();
     } else {
     $('.sidebarmenu').animate({
     left: '-500px'
     },500);$('.all_video').show();}
     $('.sidebarmenu,.image').data("hidden", !hidden);
     });
     */
});
