var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
import emojipedia from "../src/emojipedia";
//console.log(emojipedia[0].meaning.substring(0, 50));

let newArray = emojipedia.map(function (x) {
  return x.meaning.substring(0, 50);
});

console.log(newArray);

//console.log(newNumber);
