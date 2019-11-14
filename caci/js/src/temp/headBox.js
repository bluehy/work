(function($){
// ----------------------------------------------------
// data
   const hList = [
                  {title:'공연·전시',
                  sub:[
                     {subTitle:'공연안내',subLink:'#'},
                     {subTitle:'전시안내',subLink:'#'}
                  ]},
                  {title:'문화사업·아카데미',
                  sub:[
                     {subTitle:'축제사업',subLink:'#'},
                     {subTitle:'문화나눔사업',subLink:'#'},
                     {subTitle:'구립예술단체',subLink:'#'},
                     {subTitle:'사회공헌협력사업',subLink:'#'},
                     {subTitle:'아카데미',subLink:'#'},
                  ]},
                  {title:'대관안내',
                  sub:[
                     {subTitle:'대관절차',subLink:'#'},
                     {subTitle:'대관시설',subLink:'#'},
                     {subTitle:'대관료',subLink:'#'},
                     {subTitle:'대관규정',subLink:'#'},
                     {subTitle:'대관신청양식',subLink:'#'},
                  ]},
                  {title:'시설 이용안내',
                  sub:[
                     {subTitle:'좌석배치도',subLink:'#'},
                     {subTitle:'층별안내',subLink:'#'},
                     {subTitle:'오시는길',subLink:'#'},
                     {subTitle:'편의시설',subLink:'#'}
                  ]},
                  {title:'충무아트센터 소식',
                  sub:[
                     {subTitle:'공지사항',subLink:'#'},
                     {subTitle:'센터소개',subLink:'#'},
                     {subTitle:'후원회안내',subLink:'#'}
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
   let gnbDt = gnbDl.children('dt');
   const gnbDtLink = gnbDt.children('a');
   let gnbDd = gnbDl.children('dd');

// -----------------------------------------------------
// gnb Menu 채우기

   let gnbLen = hList.length;
   // console.log(gnbLen);
   for(let i = 0; i < gnbLen ; i++){
      gnbLi.eq(i).find(gnbDtLink).text(hList[i].title);
      // console.log(hList[i].sub.length);
      for(let j = 0; j <hList[i].sub.length; j++){
         gnbLi.eq(i).find(gnbDd).append('<a href="'+ hList[i].sub[j].subLink +'">'+hList[i].sub[j].subTitle+'</a>');
      }//for j
   }//for i




})(jQuery);