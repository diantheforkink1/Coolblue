(function () {
    const JSOPEN = document.querySelectorAll(".js-open");
    const MENUOPEN = document.querySelectorAll(".header-top__nav-toggle__hamburger");
    const MENUCLOSE = document.querySelectorAll(".js-close");
    const MENU = document.querySelector(".mobile-menu");
    const OVERLAY = document.querySelector(".overlay");

    // let category = document.querySelectorAll("[data-category]");
    // let categoryAttribute = "data-category";
    // let submenu = document.querySelectorAll("[data-submenu]");
    let allCategories = document.querySelectorAll(".mobile-menu__category__item.all-categories");

    MENU.addEventListener("click", function(e){

        let category = e.target;
        console.log(category);
        let currentLevel = parseInt(category.dataset.level);
        let submenu = category.querySelector("[data-level='" + (currentLevel + 1) + "'] ");

        submenu.classList.add("open");

    });

    // category.forEach(function (cat) {
    //     cat.addEventListener("click", function (event) {
    //         event.stopPropagation();

    //         if (cat.hasAttribute(categoryAttribute)) {
    //             let currentLevel = parseInt(cat.dataset.level);
    //             // let submenu = cat.querySelector(`[data-level="${currentLevel + 1}"] `);

    //             let submenu = cat.querySelector("[data-level='" + (currentLevel + 1) + "'] ");

    //             submenu.classList.add("open");
    //         }
    //     });
    // });

    // submenu.forEach(function (sub) {
    //     sub.addEventListener("click", function (event) {
    //         event.stopPropagation();
    //         let currentLevel = parseInt(sub.dataset.level);
    //         let submenu = document.querySelector(`[data-level="${currentLevel - 1}"] `);
    //         submenu.classList.remove("open");
    //     });
    // });

    allCategories.forEach(function (allcategories) {
        allcategories.addEventListener("click", function (event) {
            event.stopPropagation();
            let submenu = document.querySelectorAll(".mobile-menu__category__submenu");
            submenu.forEach(function (submenu) {
                submenu.classList.remove("open");
            });
        });
    });

   

    // if (!MENUCLOSE) return;

    MENUCLOSE.forEach(function (elem) {
        elem.addEventListener("click", function () {
            MENU.style.display = "none";
        });
    });

    // if (!MENUOPEN) return;

    MENUOPEN.forEach(function (elem) {
        elem.addEventListener("click", function () {
            MENU.style.display = "flex";
        });
    });

    // if (!JSOPEN) return;

    JSOPEN.forEach(function (elem) {
        elem.addEventListener("click", function () {
            elem.classList.toggle("open");
            // document.body.classList.toggle("overlay");
            OVERLAY.classList.toggle("active");
        });
    });

}());