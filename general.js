function toggleMenu() {
  var container = document.querySelector('.container');
  var mobileMenu = document.getElementById('mobileMenu');
  container.classList.toggle('open');
  mobileMenu.classList.toggle('open');
}

  window.addEventListener('resize', function() {
  var container = document.querySelector('.container');
  var mobileMenu = document.getElementById('mobileMenu');
  
  if (window.innerWidth > 991) {
    if (container.classList.contains('open')) {
      container.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  }
});

window.onload = function() {
  document.getElementById("year").textContent = new Date().getFullYear();
};
