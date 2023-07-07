export function cartTable()
{
    let cartTable = document.createElement('div');
    cartTable.innerHTML = `   
    <main>
    <div class="cart-checkout-container">
    <div class="small-container cart-page">
    <H1>Your Cart</H1>
    <div class="cart-table">
  <table>
    <tr>
      <td>
        <div class="cart-info">
          <img src="/public/assets/logos/images.jpeg" alt="" class="product-image">
          <div>
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
          <td><i class="fa-regular fa-trash-can"></i></td>
        </div>
      </td>
      <td>50.00$</td>
    </tr>
    <tr>
      <td colspan="4"><hr></td>
    </tr>
    <tr>
      <td>
        <div class="cart-info">
          <img src="/public/assets/logos/images.jpeg" alt="" class="product-image">
          <div>
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
          <td><i class="fa-regular fa-trash-can"></i></td>
        </div>
      </td>
      <td>50.00$</td>
    </tr>
    <tr>
      <td colspan="4"><hr></td>
    </tr>
    <tr>
      <td>
        <div class="cart-info">
          <img src="/public/assets/logos/images.jpeg" alt="" class="product-image">
          <div>
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
          <td><i class="fa-regular fa-trash-can"></i></td>
        </div>
      </td>
      <td>50.00$</td>
    </tr>
    <tr>
      <td colspan="4"><hr></td>
    </tr>
    <tr>
      <td>
        <div class="cart-info">
          <img src="/public/assets/logos/images.jpeg" alt="" class="product-image">
          <div>
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
          <td><i class="fa-regular fa-trash-can"></i></td>
        </div>
      </td>
      <td>50.00$</td>
    </tr>
    <tr>
      <td colspan="4"><hr></td>
    </tr>
    <tr>
      <td>
        <div class="cart-info">
          <img src="/public/assets/logos/images.jpeg" alt="" class="product-image">
          <div>
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
          <td><i class="fa-regular fa-trash-can"></i></td>
        </div>
      </td>
      <td>50.00$</td>
    </tr>
    <tr>
      <tr>
        <td colspan="4"><hr></td>
      </tr>
      <tr>
        <td>
          <div class="cart-info">
            <img src="/public/assets/logos/images.jpeg" alt="" class="product-image">
            <div>
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
            <td><i class="fa-regular fa-trash-can"></i></td>
          </div>
        </td>
        <td>50.00$</td>
      </tr>
      <tr>
        <tr>
          <td colspan="4"><hr></td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="/public/assets/logos/images.jpeg" alt="" class="product-image">
              <div>
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
              <td><i class="fa-regular fa-trash-can"></i></td>
            </div>
          </td>
          <td>50.00$</td>
        </tr>
        <tr>
    </table>
  </div>
 </div> `;

    return cartTable;
}