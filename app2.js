(function () {
    const JSOPEN = document.querySelectorAll(".js-open");
    const MENUOPEN = document.querySelectorAll(".header-top__nav-toggle__hamburger");
    const MENUCLOSE = document.querySelectorAll(".js-close");
    const MENU = document.querySelector(".mobile-menu");
    const OVERLAY = document.querySelector(".overlay");
    let backButton = document.querySelector(".mobile-menu__category__item.all-categories");

    MENU.addEventListener("click", function (e) {
        let target = e.target;
        let currentLevel = parseInt(target.dataset.level);
        let submenu = target.querySelector("[data-level='" + (currentLevel + 1) + "'] ");

        if (!submenu.classList.contains("open")) {
            submenu.classList.add("open");
            backButton.classList.add("categories-open");
        } else if (submenu.classList.contains("open")) {
            submenu.classList.remove("open");
        }
    });

    backButton.addEventListener("click", function (event) {
        let categories = document.querySelectorAll(".open");
        categories.forEach(function (category) {
            category.classList.remove("open");
        });
        backButton.classList.remove("categories-open");
    });

    MENUCLOSE.forEach(function (elem) {
        elem.addEventListener("click", function () {
            MENU.style.display = "none";
        });
    });

    MENUOPEN.forEach(function (elem) {
        elem.addEventListener("click", function () {
            MENU.style.display = "flex";
        });
    });

    JSOPEN.forEach(function (elem) {
        elem.addEventListener("click", function () {
            elem.classList.toggle("open");
            // document.body.classList.toggle("overlay");
            OVERLAY.classList.toggle("active");
        });
    });

}());