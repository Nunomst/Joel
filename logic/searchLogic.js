import { getProducts } from '../services/getProducts';
import { createProductCard } from '../components/shop/productsgrid.js';

export async function searchProducts(name) 
{
  const products = await getProducts();

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(name.toLowerCase().trim());
  });

  const productsGridContainer = document.querySelector('.products-grid-container');
  productsGridContainer.innerHTML = '';

  if (filteredProducts.length === 0) 
  {
    const noResultMessage = document.createElement('p');
    noResultMessage.textContent = "Nenhum resultado encontrado.";
    productsGridContainer.appendChild(noResultMessage);
  } 
  else 
  {
    filteredProducts.forEach((product) => {
      const { image, name, price, description } = product;
      const productCard = createProductCard(image, name, price, description);
      productsGridContainer.appendChild(productCard);
    });
  }
}