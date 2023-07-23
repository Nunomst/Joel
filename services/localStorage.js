// Function gets the cart from local storage
export function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart'));
}

// Function to save the cart in local storage
export function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new CustomEvent('cartUpdated', { detail: cart });
    window.dispatchEvent(event);
}

// Function to add product to cart
export function addToCart(product) {
    let cart = getCartFromLocalStorage();

    if(!cart){
        cart = [];
    }

    // Verifying if product exists in cart and increment
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].totalQuantity += 1;
    }
    else {
        cart.push({...product, totalQuantity: 1 });
    }

    saveCartToLocalStorage(cart);
}

// Function to remove product from cart
export function removeFromCart(productId) {
    const cart = getCartFromLocalStorage();

    const updateCart = cart.filter(item => item.id !== productId);

    saveCartToLocalStorage(updateCart)
}

// Function to update the quantity of products in cart
export function updateQuantity(productId, newQuantity) {
    const cart = getCartFromLocalStorage();

    const updateCart = cart.map(item => {
        if (item.id === productId) {
            return {...item, totalQuantity: newQuantity};
        }
        return item;
    });
    saveCartToLocalStorage(updateCart);
}

// This next two functions are about the cart info in navbar

// Function to calculate the total quantity
function calculateTotalQuantity(cart){
    let totalCart = 0;
  
    if (cart) {
      for (const item of cart) {
        totalCart += item.totalQuantity;
      }
    }

    return totalCart;
  }
  
// Function to update the quantity in navbar
export function updateCartQuantity() {
    let cart = getCartFromLocalStorage();
    let cartTotal = calculateTotalQuantity(cart);
    let cartQuantityElement = document.getElementById('lblCartCount');

    if (cartQuantityElement) {
        cartQuantityElement.textContent = cartTotal.toString();
    }
}
  
updateCartQuantity();

// Function to calculate the full price cart
export function calculateFullPrice(cart) {
    let total = 0;

    for (const product of cart) {
        total += product.price * product.totalQuantity;
    }

    return total;
}
