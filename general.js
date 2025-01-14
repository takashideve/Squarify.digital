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


document.addEventListener("DOMContentLoaded", () => {
  const progressValue = document.querySelector(".progress-value");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  progressValue.style.width = "99%";
              }
          });
      },
      {
          threshold: 0.5,
      }
  );

  const progressBar = document.querySelector(".progress");
  observer.observe(progressBar);
});


document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".roadmap_item");

  portfolioItems.forEach((item) => {
      item.style.opacity = 0;
      item.style.transition = "opacity 0.5s ease";
  });

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  triggerPortfolioItems();
              }
          });
      },
      { threshold: 0.5 }
  );

  const progressBar = document.querySelector(".progress");
  observer.observe(progressBar);

  function triggerPortfolioItems() {
      setTimeout(() => (portfolioItems[0].style.opacity = 1), 500);
      setTimeout(() => (portfolioItems[1].style.opacity = 1), 1200);
      setTimeout(() => (portfolioItems[2].style.opacity = 1), 2000);
      setTimeout(() => (portfolioItems[3].style.opacity = 1), 3800);
  }
});
