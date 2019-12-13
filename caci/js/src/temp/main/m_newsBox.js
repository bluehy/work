(function($){
   const newsBox = $('#newsBox');
   const newsWrap = newsBox.children('.news_wrap');
   const newsLi = newsWrap.children('li');
   let newsDl = newsLi.children('dl');
   let newsDt = newsDl.children('dt');
   let newsDd = newsDl.children('dd');

   const newsBtn = newsBox.children('.news_slide_btn');
   const newsBtnEach = newsBtn.children('button');
   const newsNext = newsBtn.children('.next');
   const newsPrev = newsBtn.children('.prev');

   let winScroll = $(window).scrollTop();
// ------------------------------------------------


// ------------------------------------------------
// newsDl 클론
newsDl.eq(-1).clone(true).prependTo(newsLi);
newsDl = newsLi.children('dl');


// -------------------------------------------------
// 뉴스 자동슬라이드
let timed = 3000;
let newsN = 0;
let go;
const NewsSliding = function(){
   go =setInterval(function(){
      newsN++;
      if(newsN >= newsDl.length-1){
         newsN = 0;
         newsLi.css({top:'100%'});
      }
      newsLi.stop().animate({top:'-100'* newsN +'%'});
   },timed)
};//
NewsSliding();

const StopSliding = function(){
   clearInterval(go);
};//


// -------------------------------------------------
// 뉴스박스에 마우스가 올라가 있을 때, 자동슬라이드 멈추기
newsBox.on('mouseenter focus',function(){
   StopSliding();
})

newsBox.on('mouseleave blur',function(){
   NewsSliding();
})


// ------------------------------------------------
// 버튼 클릭시 뉴스 이동

newsBtnEach.on('click',function(){
   let has = $(this).hasClass('next');
   if(has){
      newsN++;
      if(newsN>=newsDl.length-1){
         newsN = 0;
         newsLi.css({top:'100%'});
      }
   }else{
      newsN--;
   }
   newsLi.stop().animate({top:'-100' * newsN + '%'},function(){
      if(newsN <= -1){
         newsN = newsDl.length - 2;
         newsLi.css({top:'-100' * newsN + '%'});
      }
   });
})




// ------------------------------------------------
// 스크롤 내리기 시작하면, 뉴스박스 사라지기
   $(window).on('scroll',function(){
      let rel;
      winWidth = $(window).outerWidth();
      console.log(winWidth);
      if(winWidth <= 960){
         rel=false;
      }else{
         rel=true;
      }
      if(rel){
         winScroll = $(window).scrollTop();
         if(winScroll > 10){
            newsBox.slideUp();
         }else{
            newsBox.slideDown();
         }
      }      
   });



})(jQuery);