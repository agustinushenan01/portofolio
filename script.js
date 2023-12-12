document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".nav-list");

    hamburgerMenu.addEventListener("click", function () {
        navList.classList.toggle("show");
    });

    // Close the navigation if a menu item is clicked
    document.querySelectorAll(".nav-list a").forEach(function (item) {
        item.addEventListener("click", function () {
            navList.classList.remove("show");
        });
    });

});