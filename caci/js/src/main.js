// main.js
(function($){
   const wrap = $('#wrap');
   wrap.prepend('<header id="headBox"></header>');
   const headBox = wrap.children('#headBox');
   wrap.append('<footer id="footBox"></footBox>');
   const footBox = wrap.children('#footBox');

   // headBox
   headBox.load('./temp/headBox.html');

   
   // main



   // footer
   footBox.load('./temp/footBox.html');

})(jQuery);