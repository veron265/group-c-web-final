
console.log("JavaScript is successfully connected!");


const footerYear = document.getElementById("y2");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}


const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active"); 
    });
}

const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});


const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
