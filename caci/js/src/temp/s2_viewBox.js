(function($){
   
   pList = [
      { title: '01.약관동의' },
      { title: '02.실명확인' },
      { title: '03.정보입력' },
      { title: '04.가입완료' }
   ];


// -------------------------------------------------

   const viewBox = $('#viewBox');
   const viewWrap = viewBox.children('.view_wrap');

   const pageBtn = viewWrap.find('.page_btn');
   

   const pageIndi = viewBox.find('.page_indicator');
   const indiHead = pageIndi.children('h3');
   const indiUl = pageIndi.children('ul');
   let indiLi = indiUl.children('li');

   const joinBox = $('#joinBox');

// ----------------------------------------
   pageBtn.hide();





// ----------------------------------------
// viewBox title 변경
   viewBox.children('h2').text('충무아트센터 회원가입 페이지');

   let imgUrl = "../img/sub2/";
   let viewImgUrl = "viewBox/viewImg";
   
   viewWrap.css({'backgroundImage':'url("'+ imgUrl + viewImgUrl +'.jpg")'});


// ---------------------------------------------------
// 현재 서브페이지 목록 만들기
   
   for (let i = 0; i < pList.length; i++) {
      indiUl.append('<li><a href="#"></a></li>');
      indiLi = indiUl.children('li');
      indiLi.eq(i).children('a').text(pList[i].title);
      indiLi.css({ 'width': 100 / pList.length + '%' });
   };


   indiLi = indiUl.children('li');
   indiLi.eq(0).addClass('action');

// ---------------------------------------------------
// 서브페이지 클릭시 이동 및 반응
   
   
   indiLi.on('click',function(){
      $(this).addClass('action');
      $(this).siblings().removeClass('action');
   });

//----------------------------------------------------




//----------------------------------------------------
   // jQuery device 사이즈 측정
   // 각 디바이스별 기준 사이즈 지정
   let mob = 480, tab = 768, tab2 = 968, laptop = 1280, pc = 1920;

   let nowSize;
   // 사이즈 범주별 디바이스 명칭
   const device = ['mobile', 'tablet', 'tabletFull' ,'laptop', 'pc', 'pcfull'];

   let beforeW = $(window).outerWidth(true);

   //디바이스별 data 처리
   const DeviceData = function (wid) {
      switch (wid) {
         case device[0]:

         case device[1]:
         case device[2]:
            indiLi.css({ 'width': '100%' });
            break;
         case device[3]:
         case device[4]:
         case device[5]:
            break;
      }//switch

   };//DeviceData();


   // ------------------------------------------------
   //디바이스 크기 체크 및 명칭 판단.
   const DeviceSet = function (winW) {
      if (winW <= mob) {
         nowSize = device[0];
      } else if (winW > mob && winW <= tab) {
         nowSize = device[1];
      } else if (winW > tab && winW <= tab2) {
         nowSize = device[2];
      }else if(winW > tab2 && winW <= laptop){
         nowSize = device[3];
      } else if (winW > laptop && winW <= pc) {
         nowSize = device[4];
      } else {
         nowSize = device[5];
      }
      return nowSize;
   };//DeviceSet()
   let beforeDevice = DeviceSet(beforeW);



   // ------------------------------------------------
   //브라우저가 파이어폭스인지 검증
   let browser = navigator.userAgent.toLowerCase();
   let nowb;

   if (browser.indexOf('firefox') !== -1) {
      nowb = 'firefox';
   } else {
      nowb = 'other';
   };
   // ------------------------------------------------
   // 브라우저 사이즈 변경시, 기준 디바이스 변경.
   $(window).on('resize', function () {
      let afterW = $(window).outerWidth(true);
      let afterDevice = DeviceSet(afterW);

      if (beforeDevice !== afterDevice) {
         if (nowb == 'firefox') {
            window.location = window.location;
         } else {
            location.reload();
         }//if(nowb == 'firefox')
      }//if(beforeDevice !== afterDevice)
   })//$(window).on('resize')


   DeviceData(beforeDevice);






})(jQuery);