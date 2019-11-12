(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.prepend('<header id ="headBox"></header>');
   wrap.append('<section id ="viewBox"></section>');
   wrap.append('<main id="conBox"</main>');
   wrap.append('<footer id ="footBox"></footer>');

   const headBox = wrap.children('#headBox');
   const viewBox = wrap.children('#viewBox');
   const conBox = wrap.children('#conBox');
   const footBox = wrap.children('#footBox');

   headBox.load('./temp/headBox.html');
   footBox.load('./temp/footBox.html');

})(jQuery);