(function($){
   const coopBox = $('#coopBox');
   const coopArea = coopBox.children('.coop_area');

   const coopUl = coopArea.children('ul');
   const coopLi = coopUl.children('li');

   let imgUrl = "../img/main/coopBox/coopImg_";
// --------------------------------------------------

   let coopLen = coopLi.length;
   
   for(let i = 0 ; i < coopLen; i++){
      coopLi.eq(i).children('a').css({backgroundImage:'url("' + imgUrl +'0'+ (i + 1) + '.png")'});
   }


   coopLi.on('mouseenter',function(){
      let index = $(this).index();
      $(this).children('a').css({backgroundImage:'url("' + imgUrl +'0'+ (index + 1) + '.jpg")'});
      $(this).siblings().removeClass('action');
      $(this).addClass('action');
      $(this).find('dt').stop().fadeOut();
      $(this).find('dd').stop().fadeOut();
      $(this).find('dd').eq(-1).stop().fadeIn();
   });

   coopLi.on('mouseleave',function(){
      let index =$(this).index();
      $(this).children('a').css({backgroundImage:'url("' + imgUrl +'0'+ (index + 1) + '.png")'});
      $(this).removeClass('action');
      $(this).find('dt').stop().fadeIn();
      $(this).find('dd').stop().fadeIn();
      $(this).find('dd').eq(-1).hide();
   })

})(jQuery);