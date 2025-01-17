import { newRenderer } from "./renderer.js"
import { rectangle } from "./shapes/rectangle.js";
import { Shape } from "./shapes/shape.js";

const newRectangle: Shape = rectangle(2, 3);
const renderer = newRenderer(newRectangle);
renderer.draw();