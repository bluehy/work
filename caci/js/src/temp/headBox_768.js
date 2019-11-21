(function($){
   console.log('768버젼 호출');

   const headBox = $('#headBox');
   const headWrap = headBox.children('.head_wrap');
   const navMenu = headWrap.children('#navMenu');
   const sideGnb = navMenu.children('#sideGnb');
   const sideGuide = sideGnb.children('.side_guide');

   const sideUl = sideGuide.children('ul');
   const sideLi = sideUl.children('li');
   const sideDl = sideLi.children('dl');
   const sideDt = sideDl.children('dt');
      const sideDtLink = sideDt.children('a');
   const sideDd = sideDl.children('dd');
      const sideDdLink = sideDd.children('a');

// -------------------------------------------------------------
   // * 브라우저 768 이하일 때, dt클릭시 dd 나타나기 * rwd

   sideDtLink.on('click', function (e) {
      e.preventDefault();
      let has = $(this).parent('dt').hasClass('action');
      if (has) {
         $(this).parent('dt').siblings('dd').stop().slideUp();
         $(this).parent('dt').removeClass('action');
      } else {
         $(this).parent('dt').siblings('dd').stop().slideDown();
         $(this).parent('dt').addClass('action');
         $(this).closest('li').siblings().find('dd').stop().slideUp();
         $(this).closest('li').siblings().find('dt').removeClass('action');
      }
   });

   sideDtLink.on('focus', function () {
      $(this).parent('dt').siblings('dd').stop().slideDown();
      $(this).closest('li').siblings().find('dd').stop().slideUp();
   })

   sideDdLink.on('click', function (e) {
      e.preventDefault();
   });


})(jQuery);
