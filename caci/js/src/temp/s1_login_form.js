(function($){
   // 정규표현식 > 회원가입 란에서 활용할 것
   let checkId = /^ $/;
   
   let checkPw = /^(?=.*[a-zA-Z]![0-9])(?=.*[a-zA-Z0-9]|.*[0-9]),{6,15}$/;

   let checkNum = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;

// -------------------------------------
// 요소 선택
   const userId = $('#userId');
   
   const userPw = $('#userPw');
   const pwBtn = userPw.next('button');
// --------------------------------------



// --------------------------------------
// id 검사

   userId.on('focus',function(){
      $(this).closest('li').removeClass('action');
   });

   userId.on('blur',function(){
      let idVal = $(this).val();
      console.log(idVal);

      if(idVal == ""){
         $(this).closest('li').addClass('action');
         $(this).next('.narr').text('아이디를 입력해주세요.');
      }else{
         $(this).closest('li').removeClass('action');
      }
   });



// --------------------------------------



// --------------------------------------
// pw 검사
   userPw.on('focus', function () {
      $(this).closest('li').removeClass('action');
   });

   userPw.on('blur',function(){
      let pwVal = $(this).val();

      if(pwVal == ""){
         $(this).closest('li').addClass('action');
         $(this).closest('li').children('.narr').text('비밀번호를 입력해주세요.');
      }else{
         $(this).closest('li').removeClass('action');
      }
   });

// ------------------------------------------


// ------------------------------------------
// pw text형태로 보기

   pwBtn.on('click',function(){

      let has = $(this).hasClass('action');
   
      if(has){
         $(this).removeClass('action');
         $(this).prev('input').attr({ 'type': 'password' });
         $(this).children('i').attr({ 'class': 'fas fa-eye-slash' });
      }else{
         $(this).addClass('action');
         $(this).prev('input').attr({ 'type': 'text' });
         $(this).children('i').attr({ 'class': 'fas fa-eye' });
      }//if(has)

   })


})(jQuery);