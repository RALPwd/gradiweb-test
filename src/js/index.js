import Splide from "../../node_modules/@splidejs/splide";

new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
}).mount();

fetch('https://gradistore-spi.herokuapp.com/products/all')
  .then(response => response.json())
  .then(data => console.log(data));