export function cartWork(productsData){
let cart = [];

  if (localStorage.getItem('cart') !== null) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }

  function changeNumberOfUnits(action, id) {
    let bigCart = cart.map((product) => {
      if (product.id === id) {
        let numberOfUnits = product.numberOfUnits;

        if (action === "minus" && numberOfUnits > 1) {
          numberOfUnits--;
        } else if (action === "plus" && numberOfUnits < product.quantity) {
          numberOfUnits++;
        }

        return {
          ...product,
          numberOfUnits,
        };
      }

      return product;
    });

    cart = bigCart;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function addToCart(product) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === product.name) {
        changeNumberOfUnits("plus", product.id);
        return;
      }
    }
    // if the product isn't in the cart, it adds the numberOfUnits equal to 1
    product.numberOfUnits = 1;
    cart.push(product);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    const cartLength = cart.reduce((total, product) => total + (product.numberOfUnits || 0), 0);
    console.log(cartLength);
    let cartCountLabel = document.getElementById('lblCartCount');
    cartCountLabel.style.visibility = 'visible';
    cartCountLabel.textContent = cartLength.toString();
  }

  function handleAddToCartClick(index, productsData) {
    const product = productsData[index];
    addToCart(product);
  }

  const addToCartButton = document.querySelectorAll(".cart-grid-item");
  addToCartButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      handleAddToCartClick(index, productsData);
    });
  });

  const addToCartModal = document.querySelectorAll('.product-add-cart')
      addToCartModal.addEventListener("click", () => {
        console.log("testetetete")
        handleAddToCartClick(index, productsData);
    })
}