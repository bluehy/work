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

      mainBox.append('<section id="newsBox" class="con_area"></section>');
      mainBox.append('<section id="infoBox" class="con_area"></section>');
      mainBox.append('<section id="coopBox" class="con_area"></section>');
      mainBox.append('<section id="serviceBox" class="con_area"></section>');

      const newsBox = mainBox.children('#newsBox');
      const infoBox = mainBox.children('#infoBox');
      const coopBox = mainBox.children('#coopBox');
      const serviceBox = mainBox.children('#serviceBox');


   wrap.append('<footer id="footBox"></footBox>');
   const footBox = wrap.children('#footBox');
   // ------------------------------------------------

// jQuery device 사이즈 측정
// 각 디바이스별 기준 사이즈 지정
let mob = 480, tab = 768, laptop = 1280, pc = 1920;

let nowSize;
// 사이즈 범주별 디바이스 명칭
const device = ['mobile','tablet','laptop','pc', 'pcfull'];

let beforeW = $(window).outerWidth(true);

//디바이스별 data 처리
const DeviceData = function(wid){
   switch(wid){
      case device[0] :

      case device[1] :
         body.append('<script src="../js/src/temp/headBox_768.js"></script>');
      break;
      
      case device[2] :
      case device[3] :
      case device[4] :
      break;
   }//switch

};//DeviceData();


// ------------------------------------------------
//디바이스 크기 체크 및 명칭 판단.
const DeviceSet = function(winW){
   if(winW <= mob){
      nowSize = device[0];
   }else if(winW > mob && winW <= tab){
      nowSize = device[1];
   }else if(winW > tab && winW <= laptop){
      nowSize = device[2];
   }else if(winW > laptop && winW <= pc){
      nowSize = device[3];
   }else{
      nowSize = device[4];
   }
   return nowSize;
};//DeviceSet()
let beforeDevice = DeviceSet(beforeW);



// ------------------------------------------------
//브라우저가 파이어폭스인지 검증
let browser = navigator.userAgent.toLowerCase();
let nowb;

if(browser.indexOf('firefox') !== -1){
   nowb = 'firefox';
}else{
   nowb = 'other';
};
// ------------------------------------------------
// 브라우저 사이즈 변경시, 기준 디바이스 변경.
$(window).on('resize',function(){
   let afterW = $(window).outerWidth(true);
   let afterDevice = DeviceSet(afterW);

   if(beforeDevice !== afterDevice){
      if(nowb == 'firefox'){
         window.location = window.location;
      }else{
         location.reload();
      }//if(nowb == 'firefox')
   }//if(beforeDevice !== afterDevice)
})//$(window).on('resize')


// ------------------------------------------------
// load html/append <script></script>
   const jsUrl = '../js/src/temp/';
   const jsUrlM = 'main/';


   // headBox ---------------------------------------------
   headBox.load('./temp/headBox.html',function(){
      let conJs = 'headBox.js';
      body.append('<script src="'+jsUrl + conJs+'"></script>');
      DeviceData(beforeDevice);
   });// headBox.load()


   // viewBox ----------------------------------------------
   viewBox.load('./temp/main/m_viewBox.html',function(){
      let conJs = 'm_viewBox.js';
      body.append('<script src="'+ jsUrl + jsUrlM + conJs +'"></script>');
   });

   // main ----------------------------------------------
   mainBox.load('./temp/main/m_mainBox.html',function(){
      let conJs = 'm_mainBox.js';
      body.append('<script src="' + jsUrl + jsUrlM +conJs+'"></script>');
   });
      // newsBox {}
      newsBox.load('./temp/main/m_newsBox.html',function(){
         let conJs = 'm_newsBox.js';
         body.append('<script src="'+ jsUrl+ jsUrlM +conJs +'"></script>');
      });

      // infoBox {}
      // coopBox {}
      // serviceBox {}

   // footer ----------------------------------------------
   footBox.load('./temp/footBox.html');




})(jQuery);