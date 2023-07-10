import {cartRow } from "./cartRow";

export function cartTable() {
  let cartTable = document.createElement('div');
  cartTable.classList.add('cart-table');
  
  let table = document.createElement('table');

  table.appendChild(cartRow());

  table.appendChild(cartRow());

  cartTable.appendChild(table);

  return cartTable;
}
