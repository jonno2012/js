// when you need to pass a function as a parameter to another function

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) {
    console.log(s);
  }
   
  greeter(printToConsole);

  // we can also use type aliases here:

type GreetFunction = (a: string) => void;

function greeter2(fn: GreetFunction) {
  fn("Hello, World");
}