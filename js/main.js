const btn_nav = document.getElementById("botao-container");
const nav_secundaria = document.getElementById("nav_secundaria");
const slide_show_container = document.getElementById("slide-show_container");


btn_nav.addEventListener("click", function () {
    if (nav_secundaria.classList.contains("expanded")) {
        nav_secundaria.classList.add("slide-out")
        nav_secundaria.classList.remove("expanded");
        slide_show_container.style.marginTop = "0";
    } else {
        nav_secundaria.classList.remove("slide-out");
        nav_secundaria.classList.add("expanded");
        slide_show_container.style.marginTop = nav_secundaria.clientHeight + "px";
    }
});