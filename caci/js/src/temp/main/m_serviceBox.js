(function($){
// -----------------------------------------------------
// rent_service data
ext = ['.jpg','.png','.gif'];

rList =[
         {title: '대극장',imgUrl:'../img/main/serviceBox/grand_01/',
         photo: [
               { subT: 'areaImg_01', subLink: 'grand_01.jpg' },
               { subT: 'areaImg_02', subLink: 'grand_02.gif' },
               { subT: 'areaImg_03', subLink: 'grand_03.jpg' },
               { subT: 'areaImg_04', subLink: 'grand_04.jpg' },
               { subT: 'areaImg_05', subLink: 'grand_05.jpg' },
               ]},
         {title:'중극장 블랙',imgUrl:'../img/main/serviceBox/black_02/',
         photo:[
               {subT:'areaImg_06',subLink:'black_01.gif'},
               {subT:'areaImg_07',subLink:'black_02.jpg'},
               {subT:'areaImg_08',subLink:'black_03.jpg'},
               {subT:'areaImg_09',subLink:'black_04.jpg'},
               {subT:'areaImg_10',subLink:'black_05.jpg'},
               ]},
         {title:'소극장 블루',imgUrl:'../img/main/serviceBox/blue_03/',
         photo:[
               {subT:'areaImg_11',subLink:'blue_01.jpg'},
               {subT:'areaImg_12',subLink:'blue_02.jpg'},
               {subT:'areaImg_13',subLink:'blue_03.jpg'}
               ]},
         {title:'충무갤러리',imgUrl:'../img/main/serviceBox/gallery_04/',
         photo:[
               {subT:'areaImg_16',subLink:'gallery_01.jpg'},
               {subT:'areaImg_17',subLink:'gallery_02.jpg'},
               {subT:'areaImg_18',subLink:'gallery_03.jpg'},
               {subT:'areaImg_19',subLink:'gallery_04.jpg'},
               {subT:'areaImg_20',subLink:'gallery_05.jpg'},
               ]},
         {title:'컨벤션홀',imgUrl:'../img/main/serviceBox/convention_05/',
         photo:[
               {subT:'areaImg_21',subLink:'convention_01.jpg'},
               {subT:'areaImg_22',subLink:'convention_02.jpg'},
               {subT:'areaImg_23',subLink:'convention_03.jpg'},
               {subT:'areaImg_24',subLink:'convention_04.jpg'}
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
console.log(rList.length+'g');
for(let i = 0; i < rList.length; i++){
   // console.log(rList[i].title);
   categoryLi.eq(i).find('span').text(rList[i].title);
}

// 처음 이미지 리스트 추가하기
console.log(rList[0].photo.length + 'dk~');
for (let j = 0; j < rList[0].photo.length; j++) {
   areaUl.append('<li><a href="#">' + rList[0].photo[j].subT +'</a></li>');
   areaUl.children('li').eq(j).css({ backgroundImage: 'url("' + rList[0].imgUrl + rList[0].photo[j].subLink +'")'});
}

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


      // 대관 공간별 이미지 새로 갱신
      areaUl.empty();
      
      for(let j = 0; j <rList[i].photo.length; j++){
         areaUl.append('<li><a href="#">' + rList[i].photo[j].subT +'</a></li>');
         areaUl.children('li').eq(j).css({ backgroundImage: 'url("' + rList[i].imgUrl + rList[i].photo[j].subLink + '")' });
      }
      // areaUl.eq(i).siblings().removeClass('action');
      // areaUl.eq(i).addClass('action');
   }//if(!has)
      
});

// ------------------------------------------------------




// ------------------------------------------------------
// Li갯수에 맞춰 Ul 사이즈 조절하기






// ------------------------------------------------------



// ------------------------------------------------------
// action이 들어간 이미지들 자동슬라이드

let timed = 3000;
// let myN = 0;
let go;


const AreaSlideGo = function(){
   
   go = setInterval(function(){
      let UlAction = areaView.children('.action');
      UlAction.css({'marginLeft': 600 + 'px'});        //768이하에서는 400px
      UlAction.children('li').eq(0).appendTo(UlAction);
      // console.log(myN);
      UlAction.stop().animate({ 'marginLeft': 0});//          
   },timed )//setInterval()
   
}//AreaSlideGo();
AreaSlideGo();

const StopAreaSlide = function(){
   clearInterval(go);
}//StopAreaSlide();

// ------------------------------------------------------

areaUl.on('mouseenter',function(){
   StopAreaSlide();
});


areaUl.on('mouseleave',function(){
   AreaSlideGo();
})


})(jQuery);