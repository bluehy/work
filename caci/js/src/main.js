// main.js
(function($){
   const body = $('body');
   const wrap = $('#wrap');

   // html_ Box 생성 및 선택자 선언
   wrap.prepend('<header id="headBox"></header>');
   const headBox = wrap.children('#headBox');

   wrap.append('<section id="viewBox" class="con_area"></section>');
   const viewBox = wrap.children('#viewBox');

   wrap.append('<main id="mainBox"></main>');
   const mainBox = wrap.children('#mainBox');

      mainBox.append('<section id="newsBox"></section>');
      mainBox.append('<section id="infoBox" class="con_area"></section>');
      mainBox.append('<section id="coopBox" class="con_area"></section>');
      mainBox.append('<section id="serviceBox" class="con_area"></section>');

      const newsBox = mainBox.children('#newsBox');
      const infoBox = mainBox.children('#infoBox');
      const coopBox = mainBox.children('#coopBox');
      const serviceBox = mainBox.children('#serviceBox');


   wrap.append('<footer id="footBox" class="con_area"></footBox>');
   const footBox = wrap.children('#footBox');
   // ------------------------------------------------


// ------------------------------------------------
// load html/append <script></script>
   const jsUrl = '../js/src/temp/';
   const jsUrlM = 'main/';


   // viewBox ----------------------------------------------
   viewBox.load('./temp/main/m_viewBox.html',function(){
      let conJs = 'm_viewBox.js';
      body.append('<script src="'+ jsUrl + jsUrlM + conJs +'"></script>');
   });


   // main ----------------------------------------------
      // newsBox {}
      newsBox.load('./temp/main/m_newsBox.html',function(){
         let conJs = 'm_newsBox.js';
         body.append('<script src="'+ jsUrl+ jsUrlM +conJs +'"></script>');
      });

      // infoBox {}
      infoBox.load('./temp/main/m_infoBox.html',function(){
         
      });
      // coopBox {}
      coopBox.load('./temp/main/m_coopBox.html',function(){

      });
      // serviceBox {}
      serviceBox.load('./temp/main/m_serviceBox.html',function(){

      });

      
   // footer ----------------------------------------------
   footBox.load('./temp/footBox.html');


   // headBox ---------------------------------------------
   headBox.load('./temp/headBox.html', function () {
      let conJs = 'headBox.js';
      body.append('<script src="' + jsUrl + conJs + '"></script>');

   });// headBox.load()



})(jQuery);