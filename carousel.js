export function carousel() {
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const images = carousel.getElementsByTagName('img');
  let currentIndex = 0;
  let timer;

  function showImage(index) {
    if (index < 0 || index >= images.length) {
      return;
    }

    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = `translateX(${i - index * 101}%)`;
    }
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  }

  function startCarousel() {
    timer = setInterval(nextImage, 3000);
  }

  function stopCarousel() {
    clearInterval(timer);
  }

  prevBtn.addEventListener('click', () => {
    stopCarousel();
    prevImage();
  });

  nextBtn.addEventListener('click', () => {
    stopCarousel();
    nextImage();
  });

  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);

  showImage(currentIndex);
  startCarousel();
}
