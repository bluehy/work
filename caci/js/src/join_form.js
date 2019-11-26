(function(){
   const body = $('body');
   const wrap = $('#wrap');


// --------------------------------------------------
// 기본 html 세팅
   wrap.append('<header id="headBox"></header>');
   wrap.append('<section id="viewBox"></section>');
   wrap.append('<section id="joinBox"></section>');
   wrap.append('<footer id="footBox"></footer>');

   const headBox = wrap.children('#headBox');
   const viewBox = wrap.children('#viewBox');
   const joinBox = wrap.children('#joinBox');
   const footBox = wrap.children('#footBox');

// ---------------------------------------------------
// html, js 파일 로드해서 붙여넣기
   let jsUrl = '../js/src/temp/';


   // headBox
   headBox.load('./temp/headBox.html',function(){
      let conJs = 'headBox.js';
      body.append('<script src="'+ jsUrl + conJs +'"></script>');
   })


   // viewBox
   viewBox.load('./temp/sub_viewBox.html',function(){
      let viewJs = 'sub_viewBox.js';
      let conJs = 's2_viewBox.js';
      body.append('<script src="'+ jsUrl + viewJs +'"></script>');
      body.append('<script src="'+ jsUrl + conJs +'"></script>');
   })


   // joinBox
   joinBox.load('./temp/s2_joinBox.html',function(){
      let conJs = 's2_joinBox.js';
      body.append('<script src="'+ jsUrl + conJs +'"></script>');
   })


   // footBox
   footBox.load('./temp/footBox.html');


})(jQuery);