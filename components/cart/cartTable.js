import {cartRow } from "./cartRow";
import { hrRow } from "./hrRow";
import { updateCartCount } from "../../logic/updateCartCount";

export function cartTable() {
  let cartTable = document.createElement('div');
  let cart = JSON.parse(localStorage.getItem('cart'));
  cartTable.classList.add('cart-table');
  
  let table = document.createElement('table');

  let hrElements = []; 
  let  totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let row = cartRow(item.image, item.name, item.price);
    table.appendChild(row);
  
    if (i < cart.length - 1) {
      let hr = hrRow();
      table.appendChild(hr);
      hrElements.push(hr);
    }

  
    let deleteButton = row.querySelector(".fa-trash-can");
    deleteButton.addEventListener("click", () => {
      cart.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
      updateCartCount(cart.length);
      row.remove();
      if (i < cart.length) {
        
        let hr = hrElements[i];
        if (hr) hr.remove();
      }
     
      if (i === cart.length && hrElements.length > cart.length) {
        let lastHr = hrElements[cart.length];
        if (lastHr) lastHr.remove();
      }
      console.log(cart);
    });
    
    let inputQuantity = row.querySelector(".product-quantity");

    inputQuantity.addEventListener("change", () => {
      if (inputQuantity.value < 1) {
        inputQuantity.value = 1;
      }
      if (inputQuantity.value > item.quantity) {
        inputQuantity.value = item.quantity;
      };
      
      // Calculate the updated item total price and update totalPrice
      let quantity = parseInt(inputQuantity.value);
      let price = item.price;
      let total = quantity * price;
      itemTotalPrice.innerHTML = `€ ${total.toFixed(2)}`;
      totalPrice += total - (item.price * item.quantity);
      
      // Update localStorage with the updated totalPrice
      localStorage.setItem('totalPrice', totalPrice);
    });

    let itemTotalPrice = row.querySelector(".item-total-price");
    itemTotalPrice.innerHTML = `${item.price * inputQuantity.value}€`;
    totalPrice += item.price * inputQuantity.value;
    console.log(totalPrice);

    let minusButton = row.querySelector(".minusQtd");
    minusButton.addEventListener("click", () => {
      if (inputQuantity.value > 1) {
        inputQuantity.value--;
        itemTotalPrice.innerHTML = `${item.price * inputQuantity.value}€`;
        
        // Update localStorage with the updated totalPrice
        localStorage.setItem('totalPrice', totalPrice);
      }
    });

    let plusButton = row.querySelector(".plusQtd");
    plusButton.addEventListener("click", () => {
      if (inputQuantity.value < item.quantity) {
        inputQuantity.value++;
        itemTotalPrice.innerHTML = `${item.price * inputQuantity.value}€`;
        
        // Update localStorage with the updated totalPrice
        localStorage.setItem('totalPrice', totalPrice);
      }
    });
  }
  
  // Store the final totalPrice in localStorage after all event listeners are set up
  localStorage.setItem('totalPrice', totalPrice);

  cartTable.appendChild(table);

  return cartTable;
}
