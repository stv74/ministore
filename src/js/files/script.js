// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
import { bodyLock } from "./functions.js";
import { bodyUnlock } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Opening and closing the second level menu
document.addEventListener("DOMContentLoaded", function () {
    if (document.documentElement.classList.contains("touch")) {
        let arrow = document.querySelectorAll(".arrow");
        for (let i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i].previousElementSibling;
            let subMenu = arrow[i].nextElementSibling;
            let thisArrow = arrow[i];

            thisLink.classList.add("parent");
            arrow[i].addEventListener("click", function () {
                subMenu.classList.toggle("open");
                thisArrow.classList.toggle("active");
            });
        }
    }
});

// Opening and closing the Search form
let htmlElement = document.documentElement;
let searchButton = document.querySelector(".button-search");
let searchCloseButton = document.querySelector(".search__close");

searchButton.addEventListener("click", openSearch);
searchCloseButton.addEventListener("click", closeSearch);

function openSearch() {
    if (!htmlElement.classList.contains("menu-open")) {
        bodyLock();
    }
    htmlElement.classList.add("search-open");
}

function closeSearch() {
    if (!htmlElement.classList.contains("menu-open")) {
        bodyUnlock();
    }
    htmlElement.classList.remove("search-open");
}
