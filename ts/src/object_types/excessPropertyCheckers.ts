// Where and how an object is assigned a type can make a difference in 
// the type system. One of the key examples of this is in excess property 
// checking, which validates the object more thoroughly when it is created
//  and assigned to an object type during creation.

interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });