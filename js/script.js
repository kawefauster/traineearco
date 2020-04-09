$(document).ready(function (){
  //SCROL NAS SESSÕES
  $('.jump').click(function(e){
      e.preventDefault();

      const id = $(this).attr('href');
      const targetOffset =$(id).offset().top;
      const menuHeight = $('nav').innerHeight();

      $('html, body').animate({
          scrollTop: targetOffset - menuHeight
      }, 500);
  });

  //ANIMAÇÕES
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }

  $(".js-modal-btn").modalVideo();

  // $(document).scroll(function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 116 ||
  //     document.documentElement.scrollTop > 116
  //   ) {
  //     document.getElementById("header-top").className =
  //       "fixed-top";
  //   } else {
  //     document.getElementById("header-top").className =
  //       "";
  //   }
  // });

});