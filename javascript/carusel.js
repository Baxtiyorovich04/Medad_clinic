document.addEventListener("DOMContentLoaded", function () {
    const teamCarousel = document.querySelector(".team-carousel");

    if (!teamCarousel) return; // Останавливаем код, если карусель отсутствует

    const teamSlides = document.querySelectorAll(".team-carousel .carousel-slide");
    let teamIndex = 0;

    function showTeamSlide(index) {
        teamSlides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextTeamSlide() {
        teamIndex = (teamIndex + 1) % teamSlides.length;
        showTeamSlide(teamIndex);
    }

    setInterval(nextTeamSlide, 3000);
    showTeamSlide(teamIndex);
});
