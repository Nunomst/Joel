export async function getProducts() {
    //    let response = await fetch("http://localhost:3333/products", {
    //         headers: {
    //             "Content-Type": "application/json",
    //             mode: "no-cors",}
    //             });
    //     let data = await response.json();
    //     console.log(data);

        try {
            const response = await fetch('http://localhost:3333/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors',
                },
            });
            let data = await response.json();
          } catch (error) {
            console.log('There was an error', error);
          }

    return data;
}