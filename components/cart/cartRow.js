export function cartRow()
{
    let cartRow = document.createElement('tr');
    cartRow.innerHTML = `
    <td>
      <div class="cart-info">
        <img src="assets/images.jpeg" alt="" class="product-image">
        <div class ="product-info">
          <p>Product name</p>
          <small>$29.99</small>
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
    <td>50.00$</td>
  
  `; 

    return cartRow;
}