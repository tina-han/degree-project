$(document).ready(function(){
  $('.entry').hover(function() {
    $(this).css('background-color',$(this).data('color')); //change color to background
    $('span', this).stop().animate({"opacity": 0});  //hide text
    },function() {
     $(this).css('background-color', '');  //background back to original
    $('span', this).stop().animate({"opacity": 1});  //show text
  });
});
