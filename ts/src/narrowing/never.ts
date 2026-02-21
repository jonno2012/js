interface Circle {
    kind: "circle";
    radius: number;
  }
   
  interface Square {
    kind: "square";
    sideLength: number;
  }

  interface Rect {
    kind: "rect";
    width: number;
    height: number;
  }
   
  type Shape = Circle | Square | Rect;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape; // now if the switch is passed a value that is not a circle or square, TS will throw an error
      return _exhaustiveCheck;
  }
}

const rectangle: Rect = {
  kind: "rect",
  width: 10,
  height: 20,
};

getArea(rectangle); // will throw an error because rectangle is not a circle or square because the default case is never