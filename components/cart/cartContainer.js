import { cartTable } from "./cartTable";

// Function to create cart container
export function cartContainer()
{
    let cartContainer = document.createElement('div');
    cartContainer.classList.add('small-container', 'cart-page');
    cartContainer.innerHTML = `<H1>Your Cart</H1>` ; 
    cartContainer.appendChild(cartTable());
    return cartContainer;
}