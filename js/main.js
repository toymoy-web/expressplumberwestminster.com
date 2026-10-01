(function(){
  var BREAKPOINT = 900; // must match CSS .navlinks/.hamburger breakpoint
  var burger = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');
  var closeBtn = document.querySelector('.mm-close');
  function openMenu(){
    menu.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeMenu(){
    menu.classList.remove('open');
    document.documentElement.style.overflow = '';
  }
  if (burger && menu) {
    burger.addEventListener('click', openMenu);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }
  if (menu) {
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', closeMenu);
    });
  }
  window.addEventListener('resize', function(){
    if (window.innerWidth > BREAKPOINT) closeMenu();
  });
})();
