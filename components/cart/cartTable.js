import {cartRow } from "./cartRow";

export function cartTable() {
  let cartTable = document.createElement('div');
  cartTable.classList.add('cart-table');
  
  let table = document.createElement('table');

  let hr = document.createElement('tr')

  table.appendChild(cartRow());
  hr.innerHTML = `<td colspan = 4> <hr> <td>`;
  table.appendChild(hr);
  table.appendChild(cartRow());

  cartTable.appendChild(table);

  return cartTable;
}