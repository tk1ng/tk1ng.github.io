const returnToTop = document.querySelector(".return-top");

window.onscroll = function () {
  scrollFunctionNavbar();
  scrollFunctionReturnTop();
};

function scrollFunctionReturnTop() {
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

function scrollFunctionNavbar() {
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

// Cross-browser smooth scroll effect

const anchorTags = document.querySelectorAll(".scroll");

anchorTags.forEach((element) =>
  element.addEventListener("click", smoothScroll)
);

function smoothScroll(event) {
  event.preventDefault();

  const targetId =
    event.currentTarget.getAttribute("href") === "#"
      ? "header"
      : event.currentTarget.getAttribute("href");

  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let start = null;

  window.requestAnimationFrame(animationScroll);

  function animationScroll(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    // window.scrollTo(0, distance * (progress / duration) + startPosition);
    window.scrollTo(0, easeScroll(progress, startPosition, distance, duration));

    if (progress < duration) window.requestAnimationFrame(animationScroll);
  }
}

function easeScroll(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
