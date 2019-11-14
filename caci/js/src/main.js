// main.js
(function($){
   const body = $('body');
   const wrap = $('#wrap');

   // html_ Box 생성 및 선택자 선언
   wrap.prepend('<header id="headBox"></header>');
   const headBox = wrap.children('#headBox');

   wrap.append('<section id="viewBox"></section>');
   const viewBox = wrap.children('#viewBox');

   wrap.append('<main id="mainBox"></main>');
   const mainBox = wrap.children('#mainBox');

   wrap.append('<footer id="footBox"></footBox>');
   const footBox = wrap.children('#footBox');


// ------------------------------------------------
// load html/append <script></script>
   const jsUrl = '../js/src/temp/';


   // headBox ---------------------------------------------
   headBox.load('./temp/headBox.html',function(){
      let conJs = 'headBox.js';
      body.append('<script src="'+jsUrl + conJs+'"></script>');
   });// headBox.load()


   // viewBox ----------------------------------------------
   viewBox.load('./temp/m_viewBox.html',function(){
      let conJs = 'm_viewBox.js';
      body.append('<script src="'+ jsUrl +conJs +'"></script>');
   });

   // main ----------------------------------------------
   mainBox.load('./temp/m_mainBox.html',function(){
      let conJs = 'm_mainBox.js';
      body.append('<script src="'+ jsUrl+ conJs+'"></script>');
   });


   // footer ----------------------------------------------
   footBox.load('./temp/footBox.html');


})(jQuery);