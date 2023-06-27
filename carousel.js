export function carousel() {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = carousel.getElementsByTagName('img');
    let currentIndex = 0;
  
    function showImage(index) {
        if (index < 0 || index >= images.length) {
          return;
        }
      
        for (let i = 0; i < images.length; i++) {
          if (i === index) {
            images[i].style.transform = `translateX(${-index * 100}%)`;
          } else {
            images[i].style.transform = 'translateX(100%)';
          }
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
  
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
  
    showImage(currentIndex);
  }
  