const CAROUSELCONTAINER = document.getElementById("slides-container");
const CAROUSEL = document.querySelector(".carousel-slider");
const ALLSLIDES = document.querySelectorAll(".carousel-item");
var currentSlide = 0;
var currentWidth;
var maxSlide = ALLSLIDES.length;

// CREATE BUTTONS
var prevBtn = document.createElement("button");
var nextBtn = document.createElement("button");
var carouselActions = document.createElement("div");

prevBtn.classList.add("carousel-button", "carousel-button-prev");
prevBtn.innerHTML = "<";
nextBtn.classList.add("carousel-button", "carousel-button-next");
nextBtn.innerHTML = ">";
carouselActions.classList.add("carousel-actions");

CAROUSEL.appendChild(carouselActions);
carouselActions.appendChild(prevBtn);
carouselActions.appendChild(nextBtn);

var btn = document.querySelectorAll(".carousel-button");

// GET WIDTH OF SINGLE SLIDE
function getOffsetLeftOfSingleSlide() {
  for (let i = 0; i < ALLSLIDES.length; i++) {
    var offSetLeftOfCurrentSlide = ALLSLIDES[currentSlide].offsetLeft;
  }
  return offSetLeftOfCurrentSlide;
}

// function getWidthOfCarousel() {
//   let widthOfCarousel = SLIDESCONTAINER.offsetWidth;
//   return widthOfCarousel;
// }

// ONE FUNCTION FOR 2 BUTTONS
btn.forEach((element) => {
  element.addEventListener("click", function () {

    if (element.classList.contains("carousel-button-next")) {
      if (currentSlide === maxSlide) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
    }
    if (element.classList.contains("carousel-button-prev")) {
      if (currentSlide === 0) {
        currentSlide = maxSlide;
      } else {
        currentSlide--;
      }
    }
    CAROUSELCONTAINER.style.transform = `translateX(${- (getOffsetLeftOfSingleSlide())}px)`;
  });
});


(function () {
  let productInfo = document.querySelector(".product-info__inner");
  let productSpecs = document.querySelector("#accordion_info_description .attribute-groups");
  let tableRow = document.querySelectorAll(".product-info__table-row");

  if ((!productInfo) || (!productSpecs)) {
    return;
  }

  let needles = ["Dekton", "Graniet"];

  needles.forEach((needle) => {
    if (productInfo.innerText.includes(needle) || productSpecs.innerText.includes(needle)) {
      for (let i = 0; i < tableRow.length; i++) {
        if (tableRow[i].innerText.includes("af te halen")) {
          tableRow[i].style.display = "none";
          break;
        }
      };
      return;
    }
  });

})();