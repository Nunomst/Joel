import { cartRow } from "./cartRow";
import { hrRow } from "./hrRow";
import { getCartFromLocalStorage } from "../../services/localStorage.js";

export function cartTable() {
  let cartTable = document.createElement('div');
  cartTable.classList.add('cart-table');

  let table = document.createElement('table');
  let hrElements = []; 

  const cart = getCartFromLocalStorage();

  if (cart && cart.length > 0) {
    cart.forEach((product, i) => {
      table.appendChild(cartRow(product));
        // Add hr element after each row except the last one
        if (i < cart.length - 1) 
        {
        let hr = hrRow();
        table.appendChild(hr);
        hrElements.push(hr);
        } 
    });
  } 
  else {
    const emptyCartRow = document.createElement('tr');
    const emptyCartData = document.createElement('td');
    emptyCartData.colSpan = 4;
    emptyCartData.textContent = 'Your cart is empty.';
    emptyCartRow.appendChild(emptyCartData);
    table.appendChild(emptyCartRow);
  }

  cartTable.appendChild(table);

  return cartTable;
}
