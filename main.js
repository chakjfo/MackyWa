// Select all the navbar links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each link and add an event listener
navLinks.forEach(link => {
    // When a link is clicked
    link.addEventListener('click', function () {
        // Remove the 'active' class from all links to reset the active state
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link to highlight it
        this.classList.add('active');
    });
});

// Another event listener for smooth scrolling when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent the default action (jumping to the section) on link click
        event.preventDefault();

        // Get the target section's ID from the link's 'href' attribute
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from the href value
        const targetSection = document.getElementById(targetId); // Get the section element by ID

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Select the navbar toggle button and the navbar collapse (for mobile view)
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add an event listener to the toggle button for expanding or collapsing the navbar on mobile
navbarToggle.addEventListener('click', function () {
    // Toggle the 'show' class on the navbar collapse to show or hide the menu
    navbarCollapse.classList.toggle('show');
});

// Add an event listener for the scroll event to modify the navbar's appearance
window.onscroll = function () {
    // Select the navbar element
    const navbar = document.querySelector('.navbar');

    // Check if the page has been scrolled more than 50 pixels
    if (window.scrollY > 50) {
        // Add the 'scrolled' class to the navbar when the user scrolls down
        navbar.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class when the user scrolls back up
        navbar.classList.remove('scrolled');
    }
};

// Smooth scroll to sections
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    // Stop video when the modal is closed
    videoModal.addEventListener('hidden.bs.modal', function () {
        videoFrame.src = ''; // Clear the iframe src to stop the video
        setTimeout(() => {
            videoFrame.src = 'https://streamable.com/e/a8ioe3'; // Reset the src for playback when reopened
        }, 300); // Slight delay to avoid issues with instant reload
    });
});
