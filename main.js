// select elements
const navToggle = document.querySelector('.nav-toggle');
const toggleBars = document.querySelectorAll('.nav-toggle span');
const linksList = document.querySelector('.links');
const navLinks = document.querySelectorAll('.nav-link');

// toggle button function
function toggleEvent() {
  linksList.classList.toggle('show-links');
  toggleBars.forEach(span => span.classList.toggle('transform'));
}

navToggle.addEventListener('click', toggleEvent);

//to hide navbar when clicking on toggle menu link
navLinks.forEach(link => {
  link.addEventListener('click', toggleEvent);
});
