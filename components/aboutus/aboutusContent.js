export function aboutus () {
    let aboutus = document.createElement('div');
    aboutus.innerHTML = `<div class="aboutus" id="aboutus">
    <div class="container">
      <div class="section-heading">
        <h1>About us</h1>
        <hr>
      </div>
      <div class="aboutus-item">
        <div class="aboutus-img">
          <img src="assets/img5.jpg" alt="">
        </div>
        <div class="aboutus-description-left">
          <h1>Our Vision</h1>
          <p>
            At our jewelry business, our vision is to inspire and adorn individuals with exquisite and timeless pieces that celebrate their unique style and enhance their inner beauty. We strive to be a symbol of elegance, craftsmanship, and innovation, constantly pushing the boundaries of design to create captivating and meaningful jewelry that stands the test of time.
          </p>
        </div>
      </div>
      <div class="aboutus-item">
        <div class="aboutus-description-right">
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide an extraordinary jewelry experience with exceptional craftsmanship, unparalleled quality, and personalized service. We curate a diverse collection of handcrafted jewelry, reflecting our passion for artistry, attention to detail, and commitment to sustainability. Discover and cherish the perfect piece that reflects your individuality and special moments with us.
            </p>
        </div>
        <div class="aboutus-img">
          <img src="assets/img6.jpg" alt="">
        </div>
      </div>
      <div class="aboutus-item">
        <div class="aboutus-img ourvalues">
          <img src="assets/img7.jpg" alt="">
        </div>
        <div class="aboutus-description-left">
          <h1>Our Values</h1>
          <p>
            At our jewelry business, we are guided by core values. With uncompromising craftsmanship and ethically sourced materials, we prioritize quality. Honest, transparent relationships built on integrity are paramount. Our creativity drives innovative designs that inspire. Personalization celebrates individuality through tailored service. Sustainability is a priority, preserving our planet.
          </p>
        </div>
      </div>
    </div>
  </div>`;
    return aboutus;
}