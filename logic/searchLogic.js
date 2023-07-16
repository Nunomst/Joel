import { getProducts } from '../services/getProducts';
import { createProductCard } from '../components/productsGrid/ProductsGrid.js';

export async function searchProducts(name) {
    const products = await getProducts();
  
    const filteredProducts = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchQuery = name.toLowerCase();
      return productName.includes(searchQuery);
    });
  
    const productsGridContainer = document.querySelector('.products-grid-container');
    productsGridContainer.innerHTML = '';
  
    filteredProducts.forEach((product) => {
      const { image, name, price, description } = product;
      const productCard = createProductCard(image, name, price, description);
      productsGridContainer.appendChild(productCard);
    });
  }
