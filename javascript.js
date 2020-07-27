let returnToTop = document.querySelector(".return-top");

window.onscroll = function () {
  scrollFunctionNav();
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1100 ||
    document.documentElement.scrollTop > 1100
  ) {
    returnToTop.classList.remove("return-top");
    returnToTop.classList.add("show-top");
  } else {
    returnToTop.classList.add("return-top");
    returnToTop.classList.remove("show-top");
  }
}

function scrollFunctionNav() {
  const navBar = document.querySelector(".navbar-container");
  if (
    document.body.scrollTop > 1115 ||
    document.documentElement.scrollTop > 1115
  ) {
    navBar.style.top = 0;
    navBar.classList.add("show-nav");
  } else {
    navBar.style.top = "-80px";
    navBar.classList.remove("show-nav");
  }
}

(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
