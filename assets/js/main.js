/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
    headerShadow();
};
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// ---------- DUPLICATE LOGOS INFINITE LOOP --------
var logosDuplicate = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(logosDuplicate);

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
});

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/* ------------ ALERT BUTTON CV ----------*/

function alertBtn() {
    alert("Sorry, it is not uploaded yet :(\nYou can check my social links");
}

// ------------------ PDF CV DOWNLOAD -----------------
function openCV() {
    // let url = "https://files.fm/f/8rpwvxjfvr";
    window.open("https://files.fm/f/8rpwvxjfvr");
}
