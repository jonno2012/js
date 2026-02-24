interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle = Colorful & Circle;




  interface Person {
    name: string;
  }
  interface Person {
    name: number;
  }