(function($){


   const serviceBox = $('#serviceBox');
   const serviceWrap = serviceBox.children('.service_wrap');

   const category = serviceWrap.children('ul');
   let categoryLi = category.children('li');
   
   const areaView = serviceWrap.children('.area_view');
   const areaUl = areaView.children('ul');

// ------------------------------------------------------



// ------------------------------------------------------
// 카테고리 선택시 변경(탭메뉴형식)
categoryLi.eq(0).addClass('action');



categoryLi.children('a').on('click',function(e){
   e.preventDefault();
   let has = $(this).parent().hasClass('action');
   let i = $(this).parent().index();

   if(!has){
      categoryLi.eq(i).addClass('action');
      categoryLi.eq(i).siblings().removeClass('action');
      areaUl.eq(i).siblings().removeClass('action');
      areaUl.eq(i).addClass('action');
   }//if(!has)
      
});

// ------------------------------------------------------



// ------------------------------------------------------
// action이 들어간 이미지들 자동슬라이드

let timed = 3000;
let myN = 0;
let go;

const AreaSlideGo = function(){
   
   let go = setInterval(function(){
      let UlAction = areaView.children('.action');
      myN++;
      UlAction.stop().animate({'marginLeft':'-20%'},function(){
         UlAction.children('li').eq(0).appendTo(UlAction);
         UlAction.css({'marginLeft':'0'});
      });      
   },timed )//setInterval()
   
}//AreaSlideGo();
AreaSlideGo();

const StopAreaSlide = function(){
   clearInterval(go);
}//StopAreaSlide();


// ------------------------------------------------------






})(jQuery);