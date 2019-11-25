(function($){

   $('html, body').stop().animate({scrollTop: 0 }, 500); //새로고침시 최상단으로 이동
// ----------------------------------------------------
// data
   const hList = [
                  {title:'공연·전시',
                  sub:[
                     {subTitle:'공연안내',subLink:'#'},
                     {subTitle:'전시안내',subLink:'#'}
                  ]},
                  {title:'문화사업·아카데미',
                  sub:[
                     {subTitle:'축제사업',subLink:'#'},
                     {subTitle:'문화나눔사업',subLink:'#'},
                     {subTitle:'구립예술단체',subLink:'#'},
                     {subTitle:'사회공헌협력사업',subLink:'#'},
                     {subTitle:'아카데미',subLink:'#'},
                  ]},
                  {title:'대관안내',
                  sub:[
                     {subTitle:'대관절차',subLink:'#'},
                     {subTitle:'대관시설',subLink:'#'},
                     {subTitle:'대관료',subLink:'#'},
                     {subTitle:'대관규정',subLink:'#'},
                     {subTitle:'대관신청양식',subLink:'#'},
                  ]},
                  {title:'시설 이용안내',
                  sub:[
                     {subTitle:'좌석배치도',subLink:'#'},
                     {subTitle:'층별안내',subLink:'#'},
                     {subTitle:'오시는길',subLink:'#'},
                     {subTitle:'편의시설',subLink:'#'}
                  ]},
                  {title:'충무아트센터 소식',
                  sub:[
                     {subTitle:'공지사항',subLink:'#'},
                     {subTitle:'센터소개',subLink:'#'},
                     {subTitle:'후원회안내',subLink:'#'}
                  ]}
                  ];



// -----------------------------------------------------
   const body = $('body');
   const headBox = $('#headBox');
   const headWrap = headBox.children('.head_wrap');
   const gnb = headWrap.children('#gnb');

   
   const unb = headWrap.children('#unb');
   const userBtn = unb.children('.user_btn');
   const userForm = unb.children('form');
   const formClose = userForm.children('button');
   const formUl = userForm.children('ul');
   const formBtn = userForm.children('.btn_form');


   const navMenu = headWrap.children('#navMenu');
   const openBtn = navMenu.children('.open_side_gnb');
   const sideGnb = navMenu.children('#sideGnb');
   const sideGuide = sideGnb.children('.side_guide');
   const closeBtn = sideGuide.children('.close_side_gnb');


   const gnbUl = gnb.children('ul');
   const gnbLi = gnbUl.children('li');
   const gnbDl = gnbLi.children('dl');
   let gnbDt = gnbDl.children('dt');
   let gnbDtLink = gnbDt.children('a');
   let gnbDd = gnbDl.children('dd');
   let gnbDdLink = gnbDd.children('a');
// -----------------------------------------------------
// gnb Menu 채우기

   let gnbLen = hList.length;
   // console.log(gnbLen);
   for(let i = 0; i < gnbLen ; i++){
      gnbLi.eq(i).find(gnbDtLink).text(hList[i].title);
      // console.log(hList[i].sub.length);
      for(let j = 0; j <hList[i].sub.length; j++){
         gnbLi.eq(i).find(gnbDd).append('<a href="'+ hList[i].sub[j].subLink +'">'+hList[i].sub[j].subTitle+'</a>');
      }//for j
   }//for i


// -----------------------------------------------------
// gnb Dl.children 재정의
   gnbDt = gnbDl.children('dt');
   gnbDtLink = gnbDt.children('a');
   gnbDd = gnbDl.children('dd');
   gnbDdLink = gnbDd.children('a');
// -----------------------------------------------------



// -----------------------------------------------------
// headBox영역 마우스 진입시 gnb메뉴 show
gnb.on('mouseenter',function(){
   gnbUl.addClass('action');
   gnbDd.stop().slideDown();
});

gnb.on('mouseleave',function(){
   gnbUl.removeClass('action');
   gnbDd.stop().slideUp();
});
// -------------------------------------------------------



// -----------------------------------------------------
// headBox영역 focus시 gnb메뉴 show
gnbDtLink.on('focus',function(){
   gnbUl.addClass('action');
   gnbDd.stop().slideDown();
});



gnbDdLink.eq(-1).on('blur',function(){
   gnbUl.removeClass('action');
   gnbDd.stop().slideUp();
});

// -----------------------------------------------------



// -----------------------------------------------------
// unb 조작_ 로그인/회원가입창 나타나기

userBtn.on('click',function(){
   let has = userBtn.hasClass('action');
   if(has){
      $(this).removeClass('action');
   }else{
      $(this).addClass('action');
   }
}); //userBtn.on('click')


// -----------------------------------------------------


// -----------------------------------------------------
// navMenu로 메뉴 오픈하기

sideGuide.append('<div class="member_area"></div>');
const memberArea = sideGuide.children('.member_area');
memberArea.append('<ul><li><a href="">로그인</a></li><li><a href="">회원가입</a></li></ul>');
unb.children('ul').clone(true).appendTo(memberArea);
gnb.children('ul').clone(true).appendTo(sideGuide);
closeBtn.hide();

const sideUl = sideGuide.children('ul');
const sideLi = sideUl.children('li');
const sideDl = sideLi.children('dl');
const sideDt = sideDl.children('dt');
   const sideDtLink = sideDt.children('a');
const sideDd = sideDl.children('dd');
   const sideDdLink = sideDd.children('a');


openBtn.on('click',function(e){
   e.preventDefault();
   closeBtn.show();
   sideGnb.addClass('action');
   navMenu.addClass('action');
});

closeBtn.on('click',function(e){
   e.preventDefault();
   closeBtn.hide();
   sideGnb.removeClass('action');
   navMenu.removeClass('action');
});

closeBtn.on('focus', function () {
   closeBtn.addClass('action');
});

closeBtn.on('blur', function () {
   closeBtn.removeClass('action');
});

sideGnb.find('a').eq(-1).on('blur',function(){
   closeBtn.focus();
});

// -----------------------------------------------------





// -----------------------------------------------------
// 페이지 네비게이션 추가
headWrap.append('<nav id="pageNav"><h2 class="hidden">현재 페이지 네비게이션</h2><ul></ul></nav>');

const pageNav = headWrap.children('#pageNav');
const pageUl = pageNav.children('ul');

let conAreaLen = $('.con_area').length - 1; // footer 제외한 con_area의 갯수만큼 인디케이터 나타나게 수치 조절
console.log(conAreaLen);

for (let i = 0; i < conAreaLen; i++){
   pageUl.append('<li><a href="#"></a></li>');
}

const pageLi = pageUl.children('li');

pageUl.css({'height': 2.5 * conAreaLen + 'rem'});
pageLi.css({'height': 100 / conAreaLen + '%'});


pageLi.eq(0).addClass('action');



// ------------------------------------------------------
// 페이지 내비게이션 스크롤되는 요소 추출, 위치값 배열화
   const scroll = $('.con_area');
   const scVal = [];

   let scrTop;

   for(let i = 0; i < scroll.length; i++){
      let scrTop = scroll.eq(i).offset().top;
      scVal.push(scrTop);
   };
   console.log('con_area의 offset_top');
   console.log(scrTop);
   console.log(scVal);
// ----------------------------------------------------



// -----------------------------------------------------------
// viewBox벗어난 후에 페이지내비게이션 색상 전환
   let winScroll = $(window).scrollTop();// 현재 스크롤의 위치 계산용 변수
   console.log(winScroll + '스크롤위치_초기값');

   $(window).on('scroll', function () {
      winScroll = $(window).scrollTop();
      console.log(winScroll + '스크롤위칫');

      if (winScroll > 200) {// 페이지내 위치 인디케이터 표시 전환
         pageUl.css({ backgroundColor: 'rgba(169, 31, 43, 0.5)' });
         pageLi.children('a').css({ backgroundColor: 'rgba(169, 31, 43, 1)' });
      } else {
         pageUl.css({ backgroundColor: 'rgba(255,255,255,0.5)' });
         pageLi.children('a').css({ backgroundColor: 'rgba(255,255,255, 1)' });
      }

   });
// --------------------------------------------------------------

   console.log(scVal[scVal.length-1]+'엥');

// -----------------------------------------------------------
// 스크롤 내리면 아래로, 올리면 위로 이동하는 효과

   let rel = true;
      if(scVal.length == 0){
         rel = false;
      } // 스크롤 이벤트가 적용되지 않는 페이지용
   let wheelN = 0;

   // if (winScroll >= scVal[scVal.length - 1]) {
   //    rel = false;
   // }// 스크롤이 con_area영역을 넘어섰을 경우에는, 스크롤 이벤트X

   $(window).on('mousewheel DOMMouseScroll',function(e){
      let oe = e.originalEvent;
      let oeDelta = oe.wheelDelta;
      let delta = null;
      
      if(!oeDelta){
         delta = oe.detail * 40;
      }else{
         delta = oeDelta * -1;
      };
      console.log(delta);
     

      if (rel) {
         rel = false;
         if (delta > 0) {
            wheelN++;
            if (wheelN >= scVal.length) {
               wheelN = scVal.length - 1;
            }
         } else {
            wheelN--;
            if (wheelN <= 0) {
               wheelN = 0;
            }
         }//if(delta)

         $('html, body').stop().animate({ scrollTop: scVal[wheelN] + 'px' }, 500, function () {
            rel = true; // 중복실행방지
            pageLi.eq(wheelN).addClass('action');  // 페이지내 위치 인디케이터 표시 전환
            pageLi.eq(wheelN).siblings().removeClass('action');
         });
      }//if(rel)
      
   });//windowscroll
// ---------------------------------------------------------
// 페이지 인디케이터로 이동
   const pageLink = pageLi.children('a');
   pageLink.on('click',function(){
      wheelN = $(this).parent().index();
      $('html, body').stop().animate({ scrollTop: scVal[wheelN] + 'px' });
      $(this).parent().addClass('action');
      $(this).parent().siblings().removeClass('action');
   });



// -----------------------------------------------------------

// ------------------------------------------------------
// // * 브라우저 768 이하일 때, dt클릭시 dd 나타나기 * rwd

   // jQuery device 사이즈 측정
   // 각 디바이스별 기준 사이즈 지정
   let mob = 480, tab = 768, laptop = 1280, pc = 1920;

   let nowSize;
   // 사이즈 범주별 디바이스 명칭
   const device = ['mobile', 'tablet', 'laptop', 'pc', 'pcfull'];

   let beforeW = $(window).outerWidth(true);

   //디바이스별 data 처리
   const DeviceData = function (wid) {
      switch (wid) {
         case device[0]:

         case device[1]:
            body.append('<script src="../js/src/temp/headBox_768.js"></script>');
            break;

         case device[2]:
         case device[3]:
         case device[4]:
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
      } else if (winW > tab && winW <= laptop) {
         nowSize = device[2];
      } else if (winW > laptop && winW <= pc) {
         nowSize = device[3];
      } else {
         nowSize = device[4];
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