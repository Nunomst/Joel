export async function getProducts() {
       let response = await fetch("http://localhost:3333/products", {
            headers: {
                "Content-Type": "application/json",}
                });
        let data = await response.json();
        console.log(data);


    return data;
}