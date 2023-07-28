import {Product} from '../models/product.js';

// this is the function that gets the products from the server

export async function getProducts() {

        try {
            let response = await fetch('http://localhost:3333/products');
            let data = await response.json();
            const products = data.map((productData) => {
              return new Product({
                id: productData.id,
                name: productData.name,
                price: productData.price,
                image: productData.image,
                description: productData.description,
                quantity: productData.quantity,
                rating: productData.rating,
              });
            });
            return products;
          } catch (error) {
            console.log('Error - ', error);
            return [];
          }
}