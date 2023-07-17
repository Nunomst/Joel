export function cartRow(image, name, price)
{
    let cartRow = document.createElement('tr');
    cartRow.innerHTML = `
    <td>
      <div class="cart-info">
        <img src=${image} alt="" class="product-image">
        <div class ="product-info">
          <p>${name}</p>
          <small>${price}</small>
        </div>
      </div>
    </td>
    <td>
      <div class="quantity">
        <button>-</button>
        <input type="number" value="1" class="product-quantity">
        <button>+</button>
      </div>
    </td>
    <td>
      <i class="fa-regular fa-trash-can"></i>
    </td>
    <td>50$</td>
  
  `; 

    return cartRow;
}