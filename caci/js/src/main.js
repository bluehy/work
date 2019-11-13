// main.js
(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.prepend('<header id="headBox"></header>');
   const headBox = wrap.children('#headBox');
   wrap.append('<footer id="footBox"></footBox>');
   const footBox = wrap.children('#footBox');


// ------------------------------------------------
// load html/append <script></script>
   const jsUrl = '../js/src/temp/';


   // headBox
   headBox.load('./temp/headBox.html',function(){

      let conJs = 'headBox.js';

      body.append('<script src="'+jsUrl + conJs+'"></script>');

   });// headBox.load()

   
   // main



   // footer
   footBox.load('./temp/footBox.html');

})(jQuery);