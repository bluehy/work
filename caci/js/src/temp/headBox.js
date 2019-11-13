(function($){
// ----------------------------------------------------
// data
   const hList = [
                  {title:'공연·전시',
                  sub:[
                     {subTitle:'subT_01',subLink:'sub_01'},
                     {subTitle:'subT_01',subLink:'sub_01'}
                  ]},
                  {title:'문화사업·아카데미',
                  sub:[
                     {subTitle:'subT_02',subLink:'sub_02'},
                     {subTitle:'subT_02',subLink:'sub_02'},
                     {subTitle:'subT_02',subLink:'sub_02'},
                     {subTitle:'subT_02',subLink:'sub_02'},
                     {subTitle:'subT_02',subLink:'sub_02'},
                  ]},
                  {title:'대관안내',
                  sub:[
                     {subTitle:'subT_03',subLink:'sub_03'},
                     {subTitle:'subT_03',subLink:'sub_03'},
                     {subTitle:'subT_03',subLink:'sub_03'},
                     {subTitle:'subT_03',subLink:'sub_03'},
                     {subTitle:'subT_03',subLink:'sub_03'},
                  ]},
                  {title:'시설 이용안내',
                  sub:[
                     {subTitle:'subT_04',subLink:'sub_04'},
                     {subTitle:'subT_04',subLink:'sub_04'},
                     {subTitle:'subT_04',subLink:'sub_04'},
                     {subTitle:'subT_04',subLink:'sub_04'},
                     {subTitle:'subT_04',subLink:'sub_04'},
                  ]},
                  {title:'충무아트센터 소식',
                  sub:[
                     {subTitle:'subT_05',subLink:'sub_05'},
                     {subTitle:'subT_05',subLink:'sub_05'},
                     {subTitle:'subT_05',subLink:'sub_05'},
                     {subTitle:'subT_05',subLink:'sub_05'},
                     {subTitle:'subT_05',subLink:'sub_05'},
                  ]}
                  ];




// -----------------------------------------------------

   const headBox = $('#headBox');
   const headWrap = headBox.children('.head_wrap');
   const gnb = headWrap.children('#gnb');
   const unb = headWrap.children('#unb');
   const navMenu = headWrap.children('#navMenu');


   const gnbUl = gnb.children('ul');
   const gnbLi = gnbUl.children('li');
   const gnbDl = gnbLi.children('dl');
   const gnbDt = gnbDl.children('dt');
   const gnbDtLink = gnbDt.children('a');
   const gnbDd = gnbDl.children('dd');

// -----------------------------------------------------
// gnb Menu 채우기

   let gnbLen = hList.length;
   // console.log(gnbLen);
   for(let i = 0; i < gnbLen ; i++){
      gnbLi.eq(i).find(gnbDtLink).text(hList[i].title);
   }
   


})(jQuery);