document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");

    // Проверяем, найден ли элемент
    if (!track) {
        console.warn("⚠️ Элемент .carousel-track не найден.");
        return;
    }

    const slides = document.querySelectorAll(".carousel-slide");
    let index = 0;

    function moveCarousel() {
        if (!track) return; // Защита от ошибки
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveCarousel, 3000);
});
