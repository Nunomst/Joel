export async function getProducts() {
       let response = await fetch("http://localhost:3333/products");
        let data = await response.json();
        console.log(data);



    return data;
}