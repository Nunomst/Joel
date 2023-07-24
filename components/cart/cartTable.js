import { cartRow } from "./cartRow";
import { hrRow } from "./hrRow";
import { getCartFromLocalStorage } from "../../services/localStorage.js";

export function cartTable() {
  let cartTable = document.createElement('div');
  cartTable.classList.add('cart-table');

  let table = document.createElement('table');

  const cart = getCartFromLocalStorage();

  if (cart && cart.length > 0) {
    cart.forEach((product) => {
      table.appendChild(cartRow(product));
      table.appendChild(hrRow());
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
