function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
  }


  function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) { // TS knows that null is a type of object meaning that this typof check is not valid (i.e. that strs could be null)
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }