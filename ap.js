window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const body = document.body;
    const html = document.documentElement;

    // Block scrolling
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
        // Unblock scrolling
        body.style.overflow = "auto";
        html.style.overflow = "auto";
    }, 500);
}); 