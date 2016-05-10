$(document).ready(function(){

  $('.entry').each(function() {
    $(this).css('background-color',$(this).data('color'));
  });
  $('.text').each(function(){
    $(this).css('opacity','0');
  });

  $('.entry').hover(function() {
    $(this).css('background-color','');
    $(this).addClass('outline');
    $('span', this).stop().animate({"opacity": 1});
    },function() {
    $(this).css('background-color', $(this).data('color'));
    $(this).removeClass('outline');
    $('span', this).stop().animate({"opacity": 0});
  });
});
