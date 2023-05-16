import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

export default createSlider = () => {
  tns({
  container: '.products-slider',
  items: 4,
  slideBy: 2,
  autoplay: false,
  controlsContainer: "#customize-controls",
});
}