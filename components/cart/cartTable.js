import { cartRow } from "./cartRow";
import { hrRow } from "./hrRow";
import { getCartFromLocalStorage } from "../../services/localStorage.js";

export function cartTable() {
  let cartTable = document.createElement('div');
  cartTable.classList.add('cart-table');

  let table = document.createElement('table');

  const cart = getCartFromLocalStorage();

  cart.forEach((product) => {
    table.appendChild(cartRow(product));
    table.appendChild(hrRow());
  });

  cartTable.appendChild(table);

  return cartTable;
}
