document.addEventListener('DOMContentLoaded', function () {
  var openMenuBtn = document.querySelector('.mob-menu-btn');
  var closeMenuBtn = document.querySelector('.close-btn-menu');
  var mobMenuBtn = document.querySelector('.mob-menu-btn');
  var backdrop = document.querySelector('.backdrope');

  openMenuBtn.addEventListener('click', function () {
    backdrop.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', function () {
    backdrop.classList.remove('is-open');
  });

  mobMenuBtn.addEventListener('click', function () {
    backdrop.classList.add('is-open');
  });

  var menuLinks = document.querySelectorAll('.button-btn-link');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      backdrop.classList.remove('is-open');
      var target = this.getAttribute('href');
      var targetElement = document.querySelector(
        "[id='" + target.substring(1) + "']"
      );
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
      event.preventDefault();
    });
  });
});
