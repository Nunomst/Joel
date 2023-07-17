import {cartRow } from "./cartRow";
import { hrRow } from "./hrRow";

export function cartTable() {
  let cartTable = document.createElement('div');
  let cart = JSON.parse(localStorage.getItem('cart'));
  cartTable.classList.add('cart-table');
  
  let table = document.createElement('table');



  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let row = cartRow(item.image, item.name, item.price);
    table.appendChild(row);
    if (i < cart.length - 1) {
      table.appendChild(hrRow());
    }
  }


  cartTable.appendChild(table);

  return cartTable;
}