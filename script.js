/* ==================================================
   01 - MOBILE NAVIGATION
================================================== */

// Get the menu button
const menuButton = document.getElementById("menu-btn");

// Get the navigation menu
const navLinks = document.querySelector(".nav-links");


// When the menu button is clicked,
// open or close the navigation menu.

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



/* ==================================================
   02 - CLOSE MOBILE MENU
================================================== */

// Get all navigation links

const links = document.querySelectorAll(".nav-links a");


// Close the mobile menu after
// clicking a navigation link.

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});