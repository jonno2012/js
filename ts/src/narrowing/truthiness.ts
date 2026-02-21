/*
In JavaScript, constructs like if first “coerce” their conditions to booleans 
to make sense of them, and then choose their branches depending on whether the 
result is true or false. Values like

0
NaN
"" (the empty string)
0n (the bigint version of zero)
null
undefined
*/

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") { // adds a check to see if strs is not null and is an object
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }