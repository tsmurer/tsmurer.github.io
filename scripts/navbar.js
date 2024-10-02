document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) { // Check if elements exist
        menuToggle.addEventListener('click', function() {
            console.log("click");
            nav.classList.toggle('mobile-nav');
            this.classList.toggle('is-active');
        });
    } else {
        console.error("Menu toggle or nav element not found.");
    }
});