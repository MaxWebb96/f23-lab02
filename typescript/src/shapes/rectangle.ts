// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }
import { Shape } from "./shape.js";

function rectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { rectangle }
