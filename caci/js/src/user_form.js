(function($){
   const wrap = $('#wrap');
   wrap.prepend('<header id ="headBox"></header>');

   const headBox = wrap.children('#headBox');

   headBox.load('./temp/headBox.html');


})(jQuery);