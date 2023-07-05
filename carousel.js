function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");


  if (n > slides.length) 
  {
    slideIndex = 1
  }  

  if (n < 1) 
  {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}

let slideIndex = 1;

const next = document.getElementsByClassName("next");
const prev = document.getElementsByClassName("prev");

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

next[0].onclick = function() {
  plusSlides(1);
};

prev[0].onclick = function() {
  plusSlides(-1);
};

showSlides(slideIndex);
