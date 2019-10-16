// caci_main.js

(function($){
const mt =  $('.movetop');
// mt.css({zIndex:'1000'});
const topBtn = $('.movetop').children('a');

// topBtn.css({"backgroundColor":'#fa0', 'position':'relative', 'zIndex':'1000'});
// topBtn.children().hide();


topBtn.on('click',function(event){
   event.preventDefault();
   console.log(event);
   // $(window).scrollTop(0);
   // $(window).animate({'scrollTop':0});
   $('html').animate({'scrollTop':0},1000);
   // $(this).css({"backgroundColor":'#0a0'})
   });

})(jQuery);