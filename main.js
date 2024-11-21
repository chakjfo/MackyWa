const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        this.classList.add('active');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});

window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
};
