
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem("language") || "uz"; // Default to Uzbek
    loadLanguage(currentLang);

    const translateBtn = document.querySelector("#translate-btn");
    translateBtn.addEventListener("click", () => {
        currentLang = currentLang === "uz" ? "ru" : "uz"; // Toggle language
        localStorage.setItem("language", currentLang);
        loadLanguage(currentLang);
    });
});

function loadLanguage(lang) {
    fetch(`../styles/lang/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-key]").forEach(element => {
                const key = element.getAttribute("data-key");
                if (translations[key]) {
                    element.textContent = translations[key]; // Update text
                }
            });

            // Update the button text correctly
            document.querySelector("#translate-btn").textContent = lang === "uz" ? "RU" : "UZ";
        })
        .catch(error => console.error("Error loading translations:", error));
}

const menu = document.querySelector(".mb-menu");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const body = document.querySelector("body");
const html = document.getElementsByTagName("html");

openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
    html[0].style.overflow = "hidden";


});
closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    html[0].style.overflow = "auto";
});
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
        const parent = this.parentElement;
        const previewText = parent.querySelector('.text-preview');
        const fullText = parent.querySelector('.text-full');

        if (fullText.style.display === 'none') {
            fullText.style.display = 'inline';
            setTimeout(() => fullText.classList.add('show'), 10);
            previewText.style.display = 'none';
            this.textContent = 'Скрыть';
        } else {
            fullText.classList.remove('show');
            setTimeout(() => fullText.style.display = 'none', 500);
            previewText.style.display = 'inline';
            this.textContent = 'Показать больше';
        }
    });
});
