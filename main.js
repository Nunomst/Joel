let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
       navbar.classList.add('icon');
    } else {
      navbar.classList.remove('icon');
    }
    lastScrollTop = scrollTop;
})


function change(item){
  const buttons = document.querySelectorAll('ion-icon');
  buttons.forEach(function(obj){
      obj.classList.remove("active");
  });
  item.classList.add("active");
}