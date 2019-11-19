(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.prepend('<header id ="headBox"></header>');
   wrap.append('<section id ="viewBox"></section>');
   wrap.append('<main id="conBox"</main>');
   wrap.append('<footer id ="footBox"></footer>');

   const headBox = wrap.children('#headBox');
   const viewBox = wrap.children('#viewBox');
   const conBox = wrap.children('#conBox');
   const footBox = wrap.children('#footBox');


//------------------------------------------------------------
// load html/append <script></script>
   const jsUrl = '../js/src/temp/';


   // headBox ---------------------------------------------
   headBox.load('./temp/headBox.html', function () {
      let conJs = 'headBox.js';
      body.append('<script src="' + jsUrl + conJs + '"></script>');
   });// headBox.load()

   // viewBox --------------------------------------------
   viewBox.load('./temp/s1_viewBox.html',function(){
      let conJs = 's1_viewBox.js';
      body.append('<script src="'+ jsUrl + conJs +'"></script>');
   })

   // conBox ---------------------------------------------


   // footer ----------------------------------------------
   footBox.load('./temp/footBox.html');


})(jQuery);