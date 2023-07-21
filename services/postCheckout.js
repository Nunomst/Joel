export async function postCheckout(requestBody) {
    const apiUrl = 'http://127.0.0.1:3333/checkout';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
  
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error; 
    }
  }