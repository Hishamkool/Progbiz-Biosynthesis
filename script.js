function toggleNavBar() {
    const navLinks = document.getElementById("nav-items");
    navLinks.classList.toggle("active");
}

/* closing drawer when clicking outside of the screen */
document.addEventListener("click", function (event) {
    const navLinks = document.getElementById("nav-items");
    const handburger = document.querySelector(".hamburger");

    if (navLinks.classList.contains("active") &&
        !navLinks.contains(event.target) /* not clicked nav items */ &&
        !handburger.contains(event.target)/* not clicked handburger */) {
        navLinks.classList.remove("active");
    }
})

/* adding scroll effect on slides */

document.addEventListener("DOMContentLoaded", () => {
    const rightBtn = document.querySelector(".get-started .slide-navigations .right");
    const leftBtn = document.querySelector(".get-started .slide-navigations .left");
    const carouselSlider = document.querySelector(".slides");

    const scrollAmount = 150; // pixels

    rightBtn.addEventListener("click", () => {
        carouselSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftBtn.addEventListener("click", () => {
        carouselSlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});

