(function($){



// ----------------------------------------
   const viewBox = $('#viewBox');
   const viewWrap = viewBox.children('.view_wrap');

   const pageBtn = viewWrap.find('.page_btn');


   const pageIndi = viewBox.find('.page_indicator');
   const indiHead = pageIndi.children('h3');
   const indiUl = pageIndi.children('ul');
   let indiLi = indiUl.children('li');


// ----------------------------------------

   pageBtn.hide();
   pageIndi.hide();


// -----------------------------------------



// ----------------------------------------
// viewBox title 변경
   viewBox.children('h2').text('충무아트센터 로그인 페이지');

   let imgUrl = "../img/sub1/";
   let viewImgUrl = "viewBox/viewImg";

   viewWrap.css({ 'backgroundImage': 'url("' + imgUrl + viewImgUrl + '.jpg")' });

// ---------------------------------------------------


})(jQuery);