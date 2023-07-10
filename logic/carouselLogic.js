export function carousel()
{
  let timer;
  let slideIndex = 1;

  const next = document.getElementsByClassName("next")[0];
  const prev = document.getElementsByClassName("prev")[0];
  const slidesContainer = document.getElementsByClassName("carousel-container")[0];

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function startCarousel() {
    timer = setInterval(function() {
      plusSlides(1);
    }, 4000);
  }

  function stopCarousel() {
    clearInterval(timer);
  }

  next.onclick = function() {
    plusSlides(1);
    stopCarousel();
  };

  prev.onclick = function() {
    plusSlides(-1);
    stopCarousel();
  };

  slidesContainer.addEventListener("mouseover", function() {
    stopCarousel();
  });

  slidesContainer.addEventListener("mouseout", function() {
    startCarousel();
  });

  showSlides(slideIndex);
  startCarousel();
}