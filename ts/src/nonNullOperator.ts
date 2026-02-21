interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
  }


function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius! ** 2; // the ! is the non-null assertion. It basically says "I know that this value is not null"
    }
  }


  interface Circle {
    kind: "circle";
    radius: number;
  }
   
  interface Square {
    kind: "square";
    sideLength: number;
  }
   
  type ShapeDoneCorrectly = Circle | Square;

  function getArea2(shape: ShapeDoneCorrectly) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
                          
      case "square":
        return shape.sideLength ** 2;
                
    }
  }