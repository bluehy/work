(function($){
   
   
   const viewBox = $('#viewBox');
   const viewWrap = viewBox.children('.view_wrap');

   const pageBtn = viewWrap.find('.page_btn');
   

// ----------------------------------------
   viewBox.children('h2').text('충무아트센터 회원가입 페이지');

   let imgUrl = "../img/sub2/";
   let viewImgUrl = "viewBox/viewImg";
   
   viewWrap.css({'backgroundImage':'url("'+ imgUrl + viewImgUrl +'.jpg")'});


})(jQuery);