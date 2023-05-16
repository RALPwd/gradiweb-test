import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

// Función para crear un slider con TinySlider
const createSlider = () => {
  tns({
    container: '.products-slider', // Selector del contenedor del slider
    items: 1, // Número de elementos visibles por slide
    slideBy: 1, // Número de elementos a deslizar por vez
    autoplay: false, // Reproducir automáticamente el slider
    controlsContainer: "#customize-controls", // Selector del contenedor de controles personalizados
    gutter: 16, // Espacio (en píxeles) entre los elementos del slider
    nav: false, // Mostrar o ocultar la navegación del slider
    edgePadding: 50, // Espacio adicional (en píxeles) agregado al principio y al final del slider
    responsive: { // Configuración para pantallas con diferentes tamaños
      1200: { // Pantallas con un ancho mayor o igual a 1200px
        items: 4,
        slideBy: 4,
      },
      768: { // Pantallas con un ancho mayor o igual a 768px
        items: 3,
        slideBy: 3,
      },
      576: { // Pantallas con un ancho mayor o igual a 576px
        items: 2,
        slideBy: 2,
      },
    },
  });
}

export default createSlider;
