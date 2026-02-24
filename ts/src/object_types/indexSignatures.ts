interface StringArray {
    [index: number]: string;
  }
   
  const myArray: StringArray = getStringArray();
  const secondItem = myArray[1];


//   Above, we have a StringArray interface which has an index signature. 
//   This index signature states that when a StringArray is indexed with a number,
//    it will return a string.