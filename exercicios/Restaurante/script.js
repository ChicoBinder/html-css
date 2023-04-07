// Add JavaScript to toggle menu items
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('menu-open');
});
