(function($){
// ----------------------------------------------------
// data
   const hList = [
                  {title:'공연·전시',
                  sub:[
                     {subTitle:'공연안내',subLink:'sub_01'},
                     {subTitle:'전시안내',subLink:'sub_01'}
                  ]},
                  {title:'문화사업·아카데미',
                  sub:[
                     {subTitle:'축제사업',subLink:'sub_02'},
                     {subTitle:'문화나눔사업',subLink:'sub_02'},
                     {subTitle:'구립예술단체',subLink:'sub_02'},
                     {subTitle:'사회공헌협력사업',subLink:'sub_02'},
                     {subTitle:'아카데미',subLink:'sub_02'},
                  ]},
                  {title:'대관안내',
                  sub:[
                     {subTitle:'대관절차',subLink:'sub_03'},
                     {subTitle:'대관시설',subLink:'sub_03'},
                     {subTitle:'대관료',subLink:'sub_03'},
                     {subTitle:'대관규정',subLink:'sub_03'},
                     {subTitle:'대관신청양식',subLink:'sub_03'},
                  ]},
                  {title:'시설 이용안내',
                  sub:[
                     {subTitle:'좌석배치도',subLink:'sub_04'},
                     {subTitle:'층별안내',subLink:'sub_04'},
                     {subTitle:'오시는길',subLink:'sub_04'},
                     {subTitle:'편의시설',subLink:'sub_04'}
                  ]},
                  {title:'충무아트센터 소식',
                  sub:[
                     {subTitle:'공지사항',subLink:'sub_05'},
                     {subTitle:'센터소개',subLink:'sub_05'},
                     {subTitle:'후원회안내',subLink:'sub_05'}
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