const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://gradistore-spi.herokuapp.com/products/all"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    const products =  data.products.nodes;
    return products // Devuelve los productos obtenidos desde la API

  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default fetchProducts;