(function($){
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


   const navMenu = headWrap.children('#navMenu');
   const openBtn = navMenu.children('.open_side_gnb');
   const sideGnb = navMenu.children('#sideGnb');
   const sideGuide = sideGnb.children('.side_guide');
   const closeBtn = sideGuide.children('.close_side_gnb');


   const gnbUl = gnb.children('ul');
   const gnbLi = gnbUl.children('li');
   const gnbDl = gnbLi.children('dl');
   let gnbDt = gnbDl.children('dt');
   const gnbDtLink = gnbDt.children('a');
   let gnbDd = gnbDl.children('dd');
   const gnbDdLink = gnbDd.children('a');

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
}) // 



// -----------------------------------------------------
// navMenu로 메뉴 오픈하기

sideGuide.append('<div class="member_area"></div>');
const memberArea = sideGuide.children('.member_area');
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

let conAreaLen = $('.con_area').length;
console.log(conAreaLen);

for (let i = 0; i < conAreaLen; i++){
   pageUl.append('<li><a href="#"></a></li>');
   // let conId = $('.con_area').eq(i).id;
   // console.log(conId);
}

const pageLi = pageUl.children('li');

pageUl.css({'height': 2.5 * conAreaLen + 'rem'});
pageLi.css({'height': 100 / conAreaLen + '%'});


pageLi.eq(0).addClass('action');

// ------------------------------------------------------





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