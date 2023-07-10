export function carouselHTML()
{
    let carousel = document.createElement('div');
    carousel.innerHTML = `
    <div class="carousel-container">

    <div class="slides fade">
      <img src="/assets/1.png" style="width:100%">
    </div>
    
    <div class="slides fade">
      <img src="/assets/2.png" style="width:100%">
    </div>
    
    <div class="slides fade">
      <img src="/assets/3.png" style="width:100%">
    </div>
    
    <a class="prev">❮</a>
    <a class="next">❯</a>
    
  </div>
  <br>`;

  return carousel;
}