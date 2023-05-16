import createSlider from "./createSlider";
import fetchProducts from "./fetchProducts";

// Función para calcular el rating y generar el string de estrellas
const calculateRating = (rating) => {
  const stars = Math.floor((rating + 100) / 100);

  if (rating >= 0 && rating <= 500) {
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  } else {
    return "invalid rating";
  }
}


// Función para generar el HTML de un producto
const createHTML = (product) => {
  if(product) {
    console.log(product.tags)
    let rating = 0;
    let numberOfRatings = 0;
    let meanRating = 0;

    for (const tag of product.tags) {
      const value = parseInt(tag);
      if (!isNaN(value)) {
        numberOfRatings++;
        rating += value;
        meanRating = rating / numberOfRatings;
        break;
      }
    }

    const stars = calculateRating(meanRating);

    return `
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
            <span class="stars">${stars}</span>
            <span class="rating">(${meanRating})</span>
          </div>
          <div class="product-card__stars-price__price">
            <span class="product-card__stars-price__price--before">
              &euro;${product.prices.min.amount}
            </span>
            <span class="product-card__stars-price__price--after">
              &euro;${product.prices.max.amount}
            </span>
          </div>
        </div>
      </div>
  `
  } else {
    return "invalid product"
  }
}

// Función para popular los productos
const populateProducts = async () => {
  const products = await fetchProducts();
  const carousel = document.getElementById("carousel");
    products.forEach((product) => {
      const li = document.createElement("li");
      const slideInner = createHTML(product);
      li.innerHTML = slideInner;
      carousel.appendChild(li);
    });
	createSlider();
}

populateProducts();
