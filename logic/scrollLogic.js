// Function to scroll logic in navbar
export function handleScroll() {
    let lastScrollTop = 0;
    let navbar        = document.getElementById('navbar');
    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.classList.add('icon');
      } else {
        navbar.classList.remove('icon');
      }
      lastScrollTop = scrollTop;
    });
}