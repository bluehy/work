(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.prepend('<header id ="headBox"></header>');
   wrap.append('<section id ="viewBox"></section>');
   wrap.append('<section id="formBox"></section>');
   wrap.append('<article id="infoBox"></article>');
   wrap.append('<footer id ="footBox"></footer>');

   const headBox = wrap.children('#headBox');
   const viewBox = wrap.children('#viewBox');
   const formBox = wrap.children('#formBox');
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
   viewBox.load('./temp/sub_viewBox.html',function(){
      let conJs = 's1_viewBox.js';
      body.append('<script src="'+ jsUrl + conJs +'"></script>');
   })

   // formBox ---------------------------------------------
      formBox.load('./temp/s1_login_form.html',function(){
         let conJs = 's1_login_form.js'
         body.append('<script src="'+ jsUrl + conJs +'"></script>');
      })

   // footer ----------------------------------------------
   footBox.load('./temp/footBox.html');


})(jQuery);