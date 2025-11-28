function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "🌞";
    } else {
        themeToggle.textContent = "🌙";
    }
}


// about section
// COUNTER ANIMATION
const counters = document.querySelectorAll('.stat-number');
let started = false;

window.addEventListener("scroll", () => {
    const sectionPos = document.querySelector(".about").offsetTop;
    const screenPos = window.scrollY + window.innerHeight;

    if (screenPos > sectionPos && !started) {
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;

            const updateCounter = () => {
                if (count < target) {
                    count++;
                    counter.textContent = count + "+";
                    setTimeout(updateCounter, 20);
                }
            };
            updateCounter();
        });
        started = true;
    }
});

// FADE-IN EFFECT ON SCROLL
window.addEventListener("scroll", function () {
    const aboutText = document.querySelector(".about-text");
    const aboutImg = document.querySelector(".about-img");

    const position = aboutText.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;

    if (position < screen) {
        aboutText.style.opacity = "1";
        aboutImg.style.opacity = "1";
    }
});


// services-section
// Scroll Reveal Animation for Services
const cards = document.querySelectorAll('.service-card.animate');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 1.1;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
});






// skill section

// Scroll Reveal + Progress Bars
const skillBoxes = document.querySelectorAll(".skill-box");

window.addEventListener("scroll", () => {
    skillBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (boxTop < trigger && !box.classList.contains('show')) {
            box.classList.add("show");

            const progress = box.querySelector(".progress");
            const percent = box.getAttribute("data-percent");
            progress.style.width = percent + "%";

            const percentText = box.querySelector(".percent");
            let count = 0;
            const counter = setInterval(() => {
                if (count >= percent) { clearInterval(counter); }
                else { count++; percentText.innerText = count + "%"; }
            }, 15);
        }
    });
});




// project section 
const card = document.querySelectorAll('.project-card');

const revealCards = () => {
    const point = window.innerHeight - 120;
    card.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < point) {
            card.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);
// testimonial section 
const tBoxes = document.querySelectorAll('.testimonial-box');

const revealTestimonials = () => {
    const point = window.innerHeight - 100;
    tBoxes.forEach(box => {
        const top = box.getBoundingClientRect().top;
        if (top < point) {
            box.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealTestimonials);
window.addEventListener('load', revealTestimonials);


// contact section


function copyEmail() {
    let email = document.getElementById("emailText").innerText;
    navigator.clipboard.writeText(email);
    alert("Copied: " + email);
}

/* ==========================================================
   FORM SUBMIT SUCCESS POPUP
========================================================== */
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successMsg").style.display = "block";
    setTimeout(() => {
        document.getElementById("successMsg").style.display = "none";
    }, 3000);
});
// footer

AOS.init({ duration: 1200, once: true });

function subscribe() {
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");
    msg.textContent = email ? "✅ Subscribed successfully!" : "⚠️ Please enter your email!";
}
