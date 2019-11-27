(function($){
   const coopBox = $('#coopBox');
   const coopArea = coopBox.children('.coop_area');

   const coopUl = coopArea.children('ul');
   const coopLi = coopUl.children('li');

   let imgUrl = "../img/main/coopBox/coopImg_";
// --------------------------------------------------

   let coopLen = coopLi.length;
   
   for(let i = 0 ; i < coopLen; i++){
      coopLi.eq(i).css({backgroundImage:'url("' + imgUrl +'0'+ (i + 1) + '.jpg")'});
   }


})(jQuery);