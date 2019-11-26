(function($){

   let vList = [
               {title:'레베카',loca:'대극장',link:'#1'},
               {title:'도둑배우',loca:'중극장',link:'#2'},
               {title:'플레이리스트',loca:'소극장',link:'#3'},
               {title:'오드리부띠끄',loca:'소극장',link:'#4'}
               ];

   // ---------------------------------------------------
   const wrap = $('.slide_wrap');

   const slideBtn = wrap.children('.slide_btn');
   const next = slideBtn.children('.next');
   const prev = slideBtn.children('.prev');

   const indicator = wrap.children('.indicator');

   const slideGuide = wrap.children('.slide_guide');

   // -------------------------------------------------------


   // -----------------------------------------------------
   // 공연 리스트 data 적용 + 리스트에 이미지 배정
   for(let i = 0; i < vList.length;i++){
      slideGuide.append('<li><a href="#">'+ vList[i].title +'</a></li>');
      if (i < 9){
         j = '0'+ (i + 1) ;
      }
      // slideGuide.children('li').eq(i).find('a').css({backgroundImage:'url("../img/main/viewBox/slideImg'+j+'.jpg")'});
      slideGuide.children('li').eq(i).find('a').css({backgroundImage:'url("../img/main/viewBox/slideImg'+j+'.jpg")'});
   };
   // ------------------------------------------------------
  
   // ------------------------------------------------------
   // 
   slideGuide.children('li').append('<div></div>');
   slideGuide.children('li').children('div').append('<h3></h3>');




   // ------------------------------------------------------


   // ------------------------------------------------------
   // 인디케이터 li 추가 + 첫번째 li에 action추가.
   for(let i = 0; i <vList.length;i++){
      indicator.append('<li><a href="'+ vList[i].link +'"></a></li>');
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





})(jQuery);