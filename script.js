function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("show");

}


// Animasi sederhana saat halaman dibuka

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero-text");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(30px)";

        setTimeout(function () {

            hero.style.transition = "0.8s";

            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";

        }, 200);
    }

});
