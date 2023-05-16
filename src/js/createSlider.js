import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

const createSlider = () => {
  tns({
  container: '.products-slider',
  items: 4,
  slideBy: 2,
  autoplay: false,
  controlsContainer: "#customize-controls",
  gutter: 16,
});
}

export default createSlider;