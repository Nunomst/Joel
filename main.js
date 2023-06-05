
            fetch('https://fakestoreapi.com/products',{
              method:"POST",
              body:JSON.stringify(
                  {
                      category: 'electronic',
                      description: 'lorem ipsum set',
                      image: 'https://i.pravatar.cc',
                      price: 13.5,
                      rating: {
                          rate: 4.5,
                          count: 12
                      },
                      title: 'test product'
                      
                  }
              )
          })
              .then(res=>res.json())
              .then(json=>console.log(json))
  

let cartIcon = document.getElementById("cart-icon");

cartIcon.addEventListener("mouseover", function(){
    cartIcon.style.color = "#DEBC42"
    cartIcon.classList.add("fa-beat");
});

cartIcon.addEventListener("mouseout", function() {
  cartIcon.classList.remove("fa-beat");
  cartIcon.style.color = "black";
});