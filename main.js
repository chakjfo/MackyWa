// Function to handle active class on navbar links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each nav-link and add event listener
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// Handle smooth scrolling when navbar links are clicked
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section ID from the link's href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Handle navbar collapse on small screens (for mobile view)
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add event listener to toggle navbar collapse
navbarToggle.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});

// When the page is scrolled, add or remove the 'scrolled' class on the navbar
window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust the scroll threshold
        navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolled down
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
    }
};
