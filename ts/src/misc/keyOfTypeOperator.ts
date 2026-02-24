type Point = { x: number; y: number };
type P = keyof Point;

let w: P = "x";


type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    
type Mapish = { [k: string]: boolean };


let y : Mapish = { "hello": true };