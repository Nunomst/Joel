import { Product } from './Product.js';  


export async function getAPI()
{
    let headersList = 
    {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://thunderclient.com)",
        "Content-Type": "application/json"
    }

    let response = await fetch("https://fakestoreapi.com/products", 
    {
        method: "GET",
        headers: headersList
    });

    let data = await response.json();
    
    const products = data.map((item) => {
        return new Product(
          item.category,
          item.description,
          item.id,
          item.image,
          item.price,
          item.rating.rate,
          item.title
        );
    });
    
    console.log(products);
    return products;
}
