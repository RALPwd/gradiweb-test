import createSlider from "./createSlider";

export default fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://gradistore-spi.herokuapp.com/products/all"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    const products =  data.products.nodes;
    const carousel = document.getElementById("carousel");
    products.forEach((product) => {
      const li = document.createElement("li");
      const slideInner = `
        <div class="product-card">
            <figure class="product-card__image-container">
              <img
                class="product-card__image-container__image"
                src=${product.featuredImage.url}
                alt="${product.title}"
              />
              <div
                class="product-card__image-container__button-container"
              >
                <button
                  class="product-card__image-container__button-container__button"
                >
                  Add to cart
                </button>
              </div>
            </figure>
            <p class="product-card__title">${product.title}</p>
            <div class="product-card__stars-price">
              <div class="product-card__stars-price__stars">
                5 stars (32)
              </div>
              <div class="product-card__stars-price__price">
                &euro;${product.prices.min.amount}
                &euro;${product.prices.max.amount}
              </div>
            </div>
          </div>
      `
      li.innerHTML = slideInner;
      carousel.appendChild(li);
    });

    createSlider();
  } catch (error) {
    console.log("Error:", error.message);
  }
};