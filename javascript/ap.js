const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const body = document.querySelector("body");
const html = document.documentElement;


window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
});
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");


    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";


    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            backToTopButton.classList.toggle("show", window.scrollY > 300);
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem("language") || "uz";
    loadLanguage(currentLang);

    const translateBtn = document.querySelector("#translate-btn");
    if (translateBtn) {
        translateBtn.addEventListener("click", () => {
            currentLang = currentLang === "uz" ? "ru" : "uz";
            localStorage.setItem("language", currentLang);
            loadLanguage(currentLang);
        });
    }
});

function toggleCards() {
    const hiddenCards = document.getElementById("hidden-cards");
    const toggleBtn = document.getElementById("toggle-btn");

    if (hiddenCards && toggleBtn) {
        if (hiddenCards.style.display === "none") {
            hiddenCards.style.display = "flex";
            toggleBtn.textContent = "Yopish";
        } else {
            hiddenCards.style.display = "none";
            toggleBtn.textContent = "Qolganlarini ko'rsatish";
        }
    }
}

function loadLanguage(lang) {
    fetch(`../styles/lang/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-key]").forEach(element => {
                const key = element.getAttribute("data-key");
                if (translations[key]) element.textContent = translations[key];
            });

            const translateBtn = document.querySelector("#translate-btn");
            if (translateBtn) {
                translateBtn.textContent = lang === "uz" ? "RU" : "UZ";
            }
        })
        .catch(error => console.error("Ошибка загрузки перевода:", error));
}

// Проверяем, существуют ли элементы меню
if (!window.openMenu) {
    let openMenu = document.getElementById("menu");
    let closeMenu = document.getElementById("close");
    let menu = document.querySelector(".mb-menu");

    if (openMenu && closeMenu && menu) {
        openMenu.addEventListener("click", () => {
            menu.style.display = "flex";
            document.documentElement.style.overflow = "hidden";
        });

        closeMenu.addEventListener("click", () => {
            menu.style.display = "none";
            document.documentElement.style.overflow = "auto";
        });
    }

    window.openMenu = openMenu;
}

// Карусель (автопрокрутка)
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");

    if (track && slides.length > 0) {
        let index = 0;

        function moveCarousel() {
            index = (index + 1) % slides.length;
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(moveCarousel, 3000);
    }
});

// Загрузка информации о враче (если есть ID в URL)
document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get("id");

    if (!doctorId) {
        console.warn("⚠️ Doctor ID отсутствует в URL.");
        return;
    }

    try {
        const response = await fetch("../styles/lang/doctors.json");
        const doctors = await response.json();
        const doctor = doctors.find(d => d.id === doctorId);

        if (!doctor) {
            document.getElementById("doctor-details").innerHTML = "<p>Доктор не найден.</p>";
            return;
        }

        document.getElementById("doctor-details").innerHTML = `
            <div class="doctor-card">
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
                <div class="doctor-info">
                    <h2 data-key="${doctor.nameTrans}">${doctor.name}</h2>
                    <p class="doctor-position" data-key="${doctor.posTrans}">${doctor.position}</p>
                    <p class="doctor-description" data-key="${doctor.number}">${doctor.description}</p>
                    <div class="specs-back-btn-sec">
                        <a href="./specialists.html" class="specs-back-btn" data-key="back">Ortga</a>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Ошибка загрузки данных о враче:", error);
    }
});
