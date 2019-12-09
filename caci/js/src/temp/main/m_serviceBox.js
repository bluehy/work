(function($){
// -----------------------------------------------------
// rent_service data
ext = ['.jpg','.png','.gif'];

rList =[
         {title: '대극장',imgUrl:'../img/main/serviceBox/grand_01/',
         photo: [
               { subT: 'areaImg_01', subLink: 'grand_01.jpg' },
               { subT: 'areaImg_02', subLink: 'grand_02.jpg' },
               { subT: 'areaImg_03', subLink: 'grand_03.jpg' },
               { subT: 'areaImg_04', subLink: 'grand_04.jpg' },
               { subT: 'areaImg_05', subLink: 'grand_05.jpg' },
               { subT: 'areaImg_05', subLink: 'grand_06.jpg' }
               ]},
         {title:'중극장 블랙',imgUrl:'../img/main/serviceBox/black_02/',
         photo:[
               {subT:'areaImg_06',subLink:'black_01.jpg'},
               {subT:'areaImg_07',subLink:'black_02.jpg'},
               {subT:'areaImg_08',subLink:'black_03.jpg'},
               {subT:'areaImg_09',subLink:'black_04.jpg'},
               {subT:'areaImg_10',subLink:'black_05.jpg'}
               ]},
         {title:'소극장 블루',imgUrl:'../img/main/serviceBox/blue_03/',
         photo:[
               {subT:'areaImg_11',subLink:'blue_01.jpg'},
               {subT:'areaImg_12',subLink:'blue_02.jpg'},
               {subT:'areaImg_13',subLink:'blue_03.jpg'},
               {subT:'areaImg_13',subLink:'blue_04.jpg'}
               ]},
         {title:'충무갤러리',imgUrl:'../img/main/serviceBox/gallery_04/',
         photo:[
               {subT:'areaImg_16',subLink:'gallery_01.jpg'},
               {subT:'areaImg_17',subLink:'gallery_02.jpg'},
               {subT:'areaImg_18',subLink:'gallery_03.jpg'},
               {subT:'areaImg_19',subLink:'gallery_04.jpg'},
               {subT:'areaImg_19',subLink:'gallery_05.jpg'}
               ]},
         {title:'컨벤션홀',imgUrl:'../img/main/serviceBox/convention_05/',
         photo:[
               {subT:'areaImg_21',subLink:'convention_01.jpg'}
               ]},
         {title:'스튜디오 (연습실)',imgUrl:'../img/main/serviceBox/studio_06/',
         photo:[
               {subT:'areaImg_26',subLink:'studio_01.jpg'}
               ]}
         ];
// --------------------------------------------------------




// --------------------------------------------------------
   const serviceBox = $('#serviceBox');
   const serviceWrap = serviceBox.children('.service_wrap');

   const category = serviceWrap.children('ul');
   let categoryLi = category.children('li');
   
   const areaView = serviceWrap.children('.area_view');
   const areaUl = areaView.children('ul');
   let areaLi =areaUl.children('li');
// ------------------------------------------------------




// ------------------------------------------------------
// .탭메뉴에 타이틀 집어넣기
console.log(rList.length+'대관시설 갯수');
for(let i = 0; i < rList.length; i++){
   // console.log(rList[i].title);
   categoryLi.eq(i).find('span').text(rList[i].title);
}

// 처음 이미지 리스트 추가하기
console.log(rList[0].photo.length + '이미지 갯수');
for (let j = 0; j < rList[0].photo.length; j++) {
   // areaLi 갯수만큼 추가
   areaUl.append('<li><a href="#">' + rList[0].photo[j].subT +'</a></li>');
   // areaUl 사이즈 조절
   // if(rList[0].photo.length/2){} -> 짝수 홀수로 조절
   areaUl.css({ 'width': 600 * rList[0].photo.length + 'px'});
   // areaLi 백그라운드 이미지 삽입
   areaUl.children('li').eq(j).css({ backgroundImage: 'url("' + rList[0].imgUrl + rList[0].photo[j].subLink +'")'});
}

// 이미지 갯수에 따라 Ul의 위치 변환
let rel = (areaUl.children('li').length) % 2 == 1; // 리스트의 갯수가 짝수인지 확인.
console.log('rel' + rel);
if (rel) {
   areaUl.css({'left':50 + '%',transform:'translate(-50%)'});
}else{
   for (let l = 0; l < 3; l++) {
      areaUl.children('li').eq(l).clone().appendTo(areaUl);
   }
   // 추가된 Li갯수에 맞춰 Ul 사이즈 조절하기
   liLen = areaUl.children('li').length;
   areaUl.css({ 'width': 600 * liLen + 'px', 'left': 50 + '%', transform: 'translate(-50%)' });
}


// ------------------------------------------------------



// ------------------------------------------------------



// ------------------------------------------------------




// ------------------------------------------------------
// 이미지 자동슬라이드 기능

let timed = 3000;
// let myN = 0;
let go;


const AreaSlideGo = function () {

   go = setInterval(function () {
      // let areaUl = areaView.children('.action');
      areaUl.css({ 'marginLeft': 600 + 'px' });        //768이하에서는 400px
      areaUl.children('li').eq(0).appendTo(areaUl);
      // console.log(myN);
      areaUl.stop().animate({ 'marginLeft': 0 });//          
   }, timed)//setInterval()

}//AreaSlideGo();
AreaSlideGo();

const StopAreaSlide = function () {
   clearInterval(go);
}//StopAreaSlide();

// ------------------------------------------------------
// 마우스 이벤트 발생시, 슬라이드 멈추거나 재생
areaUl.on('mouseenter', function () {
   StopAreaSlide();
});


areaUl.on('mouseleave', function () {
   if(areaUl.children('li').length <= 1){// 리스트가 1개인 경우에는,
      StopAreaSlide();                   // mouseleave이벤트가 발생해도 움직이지 않는다.
   }else{
      AreaSlideGo();                     // 다른 경우엔 자동슬라이드 재개
   }
})
// ---------------------------------------------------




// ------------------------------------------------------
// 카테고리 선택시 변경(탭메뉴형식)
categoryLi.eq(0).addClass('action');
// 첫번째 카테고리에 클래스 추가 (색상, 폰트굵기 변환)


categoryLi.children('a').on('click',function(e){
   e.preventDefault();
   let has = $(this).parent().hasClass('action');
   let i = $(this).parent().index();

   if(!has){
      categoryLi.eq(i).addClass('action');
      categoryLi.eq(i).siblings().removeClass('action');

      // 대관 공간별 이미지 새로 갱신
      areaUl.empty();
      
      for(let j = 0; j <rList[i].photo.length; j++){
         areaUl.append('<li><a href="#">' + rList[i].photo[j].subT +'</a></li>');
         
         // areaUl 사이즈 조절
         areaUl.css({ 'width': 600 * rList[i].photo.length + 'px' });
         areaUl.children('li').eq(j).css({ backgroundImage: 'url("' + rList[i].imgUrl + rList[i].photo[j].subLink + '")' });
      }

      let liLen = areaUl.children('li').length;
      // 1개인 경우,
      if (liLen <= 1) {
         StopAreaSlide();
         console.log(go);
      }else{
         StopAreaSlide();
         setTimeout(() => {
            AreaSlideGo();
         }, 10);
      }

      // 3개 이하인 경우, 
      let len = liLen == 3; // 리스트의 갯수가 3개인 경우,

      if(len){
         for(let l = 0; l < 2; l++){
            areaUl.children('li').clone().prependTo(areaUl);
         }
         liLen = areaUl.children('li').length;
         areaUl.css({ 'width': 600 * liLen + 'px' });
      }//if(len)

      // 총 리스트의 개수가 짝수인 경우, 두번째 이미지를 임의로 복사해 끝에 추가할 것.
      rel = liLen % 2 == 1; // 리스트의 갯수가 홀수인지, 짝수인지 확인.
      
      if(rel){//홀수인 경우,
         areaUl.css({ left: '50%', transform: 'translate(-50%)'});
      }else {//짝수인 경우,
         for (let l = 0; l < 3; l++) {
            areaUl.children('li').eq(l).clone().appendTo(areaUl);
         }
         // 추가된 Li갯수에 맞춰 Ul 사이즈 조절하기
         liLen = areaUl.children('li').length;
         areaUl.css({'width':600 * liLen + 'px'});
      }//if(rel)
      
   }//if(!has)

});
// ---------------------------------------------------------------------------


})(jQuery);