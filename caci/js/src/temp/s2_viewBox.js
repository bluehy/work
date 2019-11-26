(function($){
   
   pList = [
      { title: '01.약관동의' },
      { title: '02.실명확인' },
      { title: '03.정보입력' },
      { title: '04.가입완료' }
   ];


// -------------------------------------------------

   const viewBox = $('#viewBox');
   const viewWrap = viewBox.children('.view_wrap');

   const pageBtn = viewWrap.find('.page_btn');
   

   const pageIndi = viewBox.find('.page_indicator');
   const indiHead = pageIndi.children('h3');
   const indiUl = pageIndi.children('ul');
   let indiLi = indiUl.children('li');

   const joinBox = $('#joinBox');

// ----------------------------------------
// viewBox title 변경
   viewBox.children('h2').text('충무아트센터 회원가입 페이지');

   let imgUrl = "../img/sub2/";
   let viewImgUrl = "viewBox/viewImg";
   
   viewWrap.css({'backgroundImage':'url("'+ imgUrl + viewImgUrl +'.jpg")'});


// ---------------------------------------------------
// 서브페이지 목록 만들기
   pageBtn.hide();


   for (let i = 0; i < pList.length; i++) {
      indiUl.append('<li><a href="#"></a></li>');
      indiLi = indiUl.children('li');
      indiLi.eq(i).children('a').text(pList[i].title);
      indiLi.css({ 'width': 100 / pList.length + '%' });
   };

   indiLi.eq(0).addClass('action');

// ---------------------------------------------------
// 서브페이지 클릭시 이동 및 반응

   indiLi = indiUl.children('li');
   
   indiLi.on('click',function(){
      $(this).addClass('action');
      $(this).siblings().removeClass('action');
   });

   

})(jQuery);