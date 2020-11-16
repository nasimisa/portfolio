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

// adjust links for correct navigation
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // to prevent default navigation
    e.preventDefault();

    // to choose link id-s
    const id = e.currentTarget.getAttribute('href').slice(1); //use index 1 to skip # (index 0)
    const element = document.getElementById(id);

    // calculate height of nav
    const navbar = document.querySelector('nav');
    const navHeight = navbar.getBoundingClientRect().height;

    //deduct navheight from link's position, in order to navigate to exact section
    const position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
