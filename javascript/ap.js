// const menu = document.querySelector(".mb-menu");
// const openMenu = document.getElementById("menu");
// const closeMenu = document.getElementById("close");
// const body = document.querySelector("body");
// const html = document.getElementsByTagName("html");




// window.addEventListener("scroll", function () {
//     const navbar = document.querySelector("nav");
//     if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const backToTopButton = document.getElementById("backToTop");

//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 300) {
//             backToTopButton.classList.add("show");
//         } else {
//             backToTopButton.classList.remove("show");
//         }
//     });

//     backToTopButton.addEventListener("click", () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     let currentLang = localStorage.getItem("language") || "uz";
//     loadLanguage(currentLang);

//     const translateBtn = document.querySelector("#translate-btn");
//     translateBtn.addEventListener("click", () => {
//         currentLang = currentLang === "uz" ? "ru" : "uz";
//         localStorage.setItem("language", currentLang);
//         loadLanguage(currentLang);
//     });
// });

// function loadLanguage(lang) {
//     fetch(`../styles/lang/${lang}.json`)
//         .then(response => response.json())
//         .then(translations => {
//             document.querySelectorAll("[data-key]").forEach(element => {
//                 const key = element.getAttribute("data-key");
//                 if (translations[key]) {
//                     element.textContent = translations[key]; // Update text
//                 }
//             });
//             document.querySelector("#translate-btn").textContent = lang === "uz" ? "RU" : "UZ";
//         })
//         .catch(error => console.error("Error loading translations:", error));
// }


// openMenu.addEventListener("click", () => {
//     menu.style.display = "flex";
//     html[0].style.overflow = "hidden";


// });
// closeMenu.addEventListener("click", () => {
//     menu.style.display = "none";
//     html[0].style.overflow = "auto";
// });

// // document.addEventListener("DOMContentLoaded", async () => {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const doctorId = urlParams.get("id");

// //     if (!doctorId) {
// //         console.error("Doctor ID отсутствует в URL");
// //         return;
// //     }

// //     try {
// //         const response = await fetch("../styles/lang/doctors.json");

// //         if (!response.ok) throw new Error("Ошибка загрузки doctors.json");

// //         const doctors = await response.json();
// //         const doctor = doctors.find(d => d.id === doctorId);

// //         if (!doctor) {
// //             document.getElementById("doctor-details").innerHTML = "<p>Доктор не найден.</p>";
// //             return;
// //         }

// //         document.getElementById("doctor-details").innerHTML = `
// //             <div class="doctor-card">
// //                 <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
// //                 <div class="doctor-info">
// //                     <h2 data-key="${doctor.nameTrans}">${doctor.name}</h2>
// //                     <p class="doctor-position" data-key="${doctor.posTrans}">${doctor.position}</p>
// //                     <p class="doctor-description" data-key="${doctor.number}">${doctor.description}</p>
// //                       <div class=" .specs-back-btn-sec">
// //             <a href="./specialists.html" class="specs-back-btn" data-key="back">ortga</a>
// //         </div>

// //                 </div>
// //             </div>
// //         `;
// //     } catch (error) {
// //         console.error("Ошибка загрузки:", error);
// //     }
// // });
// document.addEventListener("DOMContentLoaded", function () {
//     const track = document.querySelector(".carousel-track");
//     const slides = document.querySelectorAll(".carousel-slide");
//     let index = 0;

//     function moveCarousel() {
//         index = (index + 1) % slides.length;
//         track.style.transform = `translateX(-${index * 100}%)`;
//     }

//     setInterval(moveCarousel, 3000);
// });

// document.addEventListener("DOMContentLoaded", async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const doctorId = urlParams.get("id");

//     if (!doctorId) {
//         console.warn("⚠️ Doctor ID отсутствует в URL. Код для загрузки врача не будет выполняться.");
//         return;
//     }

//     try {
//         const response = await fetch("../styles/lang/doctors.json");
//         if (!response.ok) throw new Error("Ошибка загрузки doctors.json");

//         const doctors = await response.json();
//         const doctor = doctors.find(d => d.id === doctorId);

//         if (!doctor) {
//             document.getElementById("doctor-details").innerHTML = "<p>Доктор не найден.</p>";
//             return;
//         }

//         document.getElementById("doctor-details").innerHTML = `
//             <div class="doctor-card">
//                 <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
//                 <div class="doctor-info">
//                     <h2 data-key="${doctor.nameTrans}">${doctor.name}</h2>
//                     <p class="doctor-position" data-key="${doctor.posTrans}">${doctor.position}</p>
//                     <p class="doctor-description" data-key="${doctor.number}">${doctor.description}</p>
//                     <div class="specs-back-btn-sec">
//                         <a href="./specialists.html" class="specs-back-btn" data-key="back">Ortga</a>
//                     </div>
//                 </div>
//             </div>
//         `;
//     } catch (error) {
//         console.error("Ошибка загрузки:", error);
//     }
// });

const menu = document.querySelector(".mb-menu");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const body = document.querySelector("body");
const html = document.documentElement;

// Анимация скролла для Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Кнопка "Back to Top"
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        backToTopButton.classList.toggle("show", window.scrollY > 300);
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Переключение языка
document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem("language") || "uz";
    loadLanguage(currentLang);

    document.querySelector("#translate-btn").addEventListener("click", () => {
        currentLang = currentLang === "uz" ? "ru" : "uz";
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
                if (translations[key]) element.textContent = translations[key];
            });
            document.querySelector("#translate-btn").textContent = lang === "uz" ? "RU" : "UZ";
        })
        .catch(error => console.error("Ошибка загрузки перевода:", error));
}

// Меню на мобильных устройствах
openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
    html.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    html.style.overflow = "auto";
});

// Карусель (автопрокрутка)
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    let index = 0;

    function moveCarousel() {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveCarousel, 3000);
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
        if (!response.ok) throw new Error("Ошибка загрузки doctors.json");

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
