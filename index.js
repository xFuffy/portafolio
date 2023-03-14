const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const links = document.querySelector(".navbar__links");
const sections = document.querySelectorAll("section");
const config = {
    rootMargin: "0px",
    threshold: [0.6, 0.9],
};

function handleLlinks() {
    if (window.innerWidth <= 678) {
        links.classList.toggle("visible");
    }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
    window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`); //rgba(0,0,0,0.9)
    window.scrollY < 100 && (navbar.style.background = `black`); //transparent
});

let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        intersectionHandler(entry);
        console.log(entry);
        }
    });
}, config);

sections.forEach((section) => {
    observer.observe(section);
});

function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector(".navbar__links .active");
    const shouldBeActive = document.querySelector(
    ".navbar__links [data-ref=" + id + "]"
    );

    if (currentlyActive) {
        currentlyActive.classList.remove("active");
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add("active");
    }
}