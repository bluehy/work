(function($){

   let vList = [
               {title:'레베카',loca:'대극장'},
               {title:'도둑배우',loca:'중극장'},
               {title:'플레이리스트',loca:'소극장'},
               {title:'오드리부띠끄',loca:'소극장'}
               ];

   // ---------------------------------------------------
   const wrap = $('.slide_wrap');

   const slideBtn = wrap.children('.slide_btn');

   const indicator = wrap.children('.indicator');

   const slideGuide = wrap.children('.slide_guide');
   // -----------------------------------------------------
   // 공연 리스트 추가 + 리스트에 이미지 배정
   for(let i = 0; i < vList.length;i++){
      slideGuide.append('<li><a href="#">'+ vList[i].title +'</a></li>');
      if (i < 9){
         j = '0'+ (i + 1) ;
      }
      // slideGuide.children('li').eq(i).find('a').css({backgroundImage:'url("../img/main/viewBox/slideImg'+j+'.jpg")'});
      slideGuide.children('li').eq(i).find('a').css({backgroundImage:'url("../img/main/viewBox/slideImg'+j+'.jpg")'});
   };



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
   






})(jQuery);