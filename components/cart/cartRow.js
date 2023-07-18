import { limitString } from "../../logic/limitString";

export function cartRow(image, name, price)
{
    let cartRow = document.createElement('tr');
    cartRow.innerHTML = `
    <td>
      <div class="cart-info">
        <img src=${image} alt="" class="product-image">
        <div class ="product-info">
          <p>${limitString(name, 40)}</p>
          <small>${price}€</small>
        </div>
      </div>
    </td>
    <td>
      <div class="quantity">
        <button class="minusQtd">-</button>
        <input type="number" value="1" class="product-quantity" disabled>
        <button class="plusQtd">+</button>
      </div>
    </td>
    <td>
      <i class="fa-regular fa-trash-can"></i>
    </td>
    <td class="item-total">
    <small class="item-total-price"></small>
    </td>
  
  `; 

    return cartRow;
}