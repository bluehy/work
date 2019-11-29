(function($){

   // let vList = [
   //             {title:'레베카',loca:'대극장',link:'#1'},
   //             {title:'도둑배우',loca:'중극장',link:'#2'},
   //             {title:'플레이리스트',loca:'소극장',link:'#3'},
   //             {title:'오드리부띠끄',loca:'소극장',link:'#4'}
   //             ];

   
   // 공연 정보 추가
   let pList =[
            {place:'대극장',title:'뮤지컬<레베카>',date:'2019-ya-ya~2020-ya-ya',link:'#1'
            ,detail: [
                     {subtitle:'티켓:',
                     subcontent:'화수목 VIP석 14만원, R석 12만원, S석 9만원, A석 6만원<br/>금토일/ 공휴일 VIP석 15만원, R석 13만원, S석 10만원, A석 7만원'},
                     {subtitle:'시간:',
                     subcontent:'화목 7시 / 수, 금 3시, 8시 / 토, 공휴일 2시, 7시 / 일 3시(월 공연 없음)'},
                     {subtitle:'등급:',
                     subcontent:'취학(8세 이상, 2019년_2012년 출생자 / 2020년_2013년)'},
                     {subtitle:'문의:',
                     subcontent:'멜론티켓 1899 - 0042 / 인터파크 1544 - 1555'}
                     ]
            },
            {place:'중극장 블랙',title:'연극<도둑배우>',date:'2019-xz-xz~2020-xz-xz',link:'#2'
            ,detail:'공연정보'},
            {place:'소극장 블루',title:'뮤지컬<플레이리스트>쇼케이스',date:'2019-xy-xy~2020-xy-xy',link:'#3'
            ,detail:'공연정보'},
            {place:'소극장 블루',title:'뮤지컬<오드리부띠끄>쇼케이스',date:'2019-xx-xx~2020-xx-xx',link:'#4'
            ,detail:'공연정보'}
         ];



   // ---------------------------------------------------
   const wrap = $('.slide_wrap');

   const slideBtn = wrap.children('.slide_btn');
   const next = slideBtn.children('.next');
   const prev = slideBtn.children('.prev');

   const indicator = wrap.children('.indicator');

   const slideGuide = wrap.children('.slide_guide');

   const slideInfo = wrap.children('.slide_info');
      const InfoUl = slideInfo.children('ul');
      const infoImg = slideInfo.children('img');
      const infoDl = slideInfo.children('dl');
      let infoDt = infoDl.children('dt');
      let infoDd = infoDl.children('dd');

   // -------------------------------------------------------


   // -----------------------------------------------------
   // 공연 리스트 data 적용 + 리스트에 이미지 배정
   for(let i = 0; i < pList.length;i++){
      slideGuide.append('<li><a href="#">'+ pList[i].title +'</a></li>');
      if (i < 9){
         j = '0'+ (i + 1) ;
      }
      // slideGuide.children('li').eq(i).find('a').css({backgroundImage:'url("../img/main/viewBox/slideImg'+j+'.jpg")'});
      slideGuide.children('li').eq(i).find('a').css({backgroundImage:'url("../img/main/viewBox/slideImg'+j+'.jpg")'});
   };
   // ------------------------------------------------------
  
   // ------------------------------------------------------
   // 슬라이드 html 구조 추가
   slideGuide.children('li').append('<div></div>');
   slideGuide.children('li').children('div').append('<h3></h3>');




   // ------------------------------------------------------


   // ------------------------------------------------------
   // 인디케이터 li 추가 + 첫번째 li에 action추가.
   for(let i = 0; i <pList.length;i++){
      indicator.append('<li><a href="'+ pList[i].link +'"></a></li>');
   };
   const indiLi = indicator.children('li');
   const indiLen = indiLi.length;
   console.log(indiLen);
   indiLi.eq(0).addClass('action');
   // -----------------------------------------------------



   // ------------------------------------------------------
   // 슬라이드 좌우 슬라이드 초기값 구현
   let slideLi = slideGuide.children('li');
   let slideLen = slideLi.length;
   slideLi.eq(-1).clone(true).prependTo(slideGuide);
   slideLi = slideGuide.children('li');
   slideLen = slideLi.length;
   console.log(slideLen);

   slideGuide.css({width: 100 * slideLen +'%',marginLeft:-100 + '%'});
   slideLi.css({width:100 / slideLen + '%'});
   slideLi.children('div').css({ 'width': 100 / slideLen + '%' });
   // ---------------------------------------------------------

   

   // ------------------------------------------------------
   // 자동 슬라이드
   let timed = 5000;
   let myN = 0;
   let go;
   
   const GoSlide = function(){
      go = setInterval(function() {
         myN++;
         if (myN >= slideLen - 1) {
            myN = 0;
            slideGuide.css({ 'left': 100 + '%' });
         }
         slideGuide.stop().animate({ 'left': -100 * myN + '%' });
         indiLi.eq(myN).addClass('action');
         indiLi.eq(myN).siblings().removeClass('action');
      }, timed); // go = setInterval
   }// GoSlide()
   GoSlide();

   const StopSlide = function () {
      clearInterval(go);
   };
   // StopSlide();
   // -----------------------------------------------------------
   


   // --------------------------------------------------------
   // mouseenter _ StopSlide
   wrap.on('mouseenter',function(){
      StopSlide();
   })

   wrap.on('mouseleave',function(){
      GoSlide();
   })
   // ---------------------------------------------------------



   // ----------------------------------------------------------
   // 버튼 조작시 슬라이드 이동 + 인디케이터 조작
   slideBtn.find('button').on('mouseenter focus',function(){
      $(this).addClass('action');
      // $(this).siblings().removeClass('action');
   });
   
   slideBtn.find('button').on('mouseleave blur',function(){
      $(this).removeClass('action');
   });

   next.on('click',function(){
      myN++;
      if(myN >= slideLen - 1){
         myN = 0;
         slideGuide.css({'left':100 +'%'});
      }
      slideGuide.stop().animate({'left': -100 * myN + '%'});
      indiLi.eq(myN).addClass('action');
      indiLi.eq(myN).siblings().removeClass('action');
   });

   prev.on('click',function(){
      myN--;
      slideGuide.stop().animate({'left': -100 * myN + '%'},function(){
         if(myN < 0){
            myN = slideLen -2;
            slideGuide.css({'left':-100 * myN + '%'});
         }
      });
      indiLi.eq(myN).addClass('action');
      indiLi.eq(myN).siblings().removeClass('action');
   });
   // -----------------------------------------------------------------



   // -----------------------------------------------------------------
   // 인디케이터 조작으로 슬라이드 이동
   indiLi.on('click',function(){
      myN = $(this).index();
      slideGuide.stop().animate({'left': -100 * myN + '%'});
      indiLi.eq(myN).addClass('action');
      indiLi.eq(myN).siblings().removeClass('action');
   })
   // --------------------------------------------------------------------

   


   // --------------------------------------------------------------------
   // infoDl의 dt, dd 내용삽입
   let ddLen = pList[myN].detail.length;
   
   console.log('디테일내용갯수', ddLen);
   
   //infoDl 파트 초기값 설정   
   infoDt.text(pList[0].title);
   for(let i = 0; i < ddLen; i++){
      infoDl.append(`<dd><strong>${pList[0].detail[i].subtitle}</strong><span>${pList[0].detail[i].subcontent}</span></dd>`);
   }// 초기값 설정


   

})(jQuery);