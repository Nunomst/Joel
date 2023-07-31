export function gallery () {
    let gallery = document.createElement('div');
    gallery.innerHTML = `
    <div class="header-gallery">
      <h1>Our Gallery</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores magni id?</p>
    </div>
    <div class="gallery">
      <img src="assets/img1.jpg" alt="Imagem 1" class="img1">
      <img src="assets/img2.jpg" alt="Imagem 2" class="img2">
      <img src="assets/img3.jpg" alt="Imagem 3" class="img3">
      <img src="assets/img4.jpg" alt="Imagem 4" class="img4">
      <img src="assets/img5.jpg" alt="Imagem 5" class="img5">
      <img src="assets/img6.jpg" alt="Imagem 6" class="img6">
      <img src="assets/img7.jpg" alt="Imagem 7" class="img7">
      <img src="assets/img8.jpg" alt="Imagem 8" class="img8">
    </div> `;
    return gallery;
}