// pig latin generator
// takes a string as a parameter
// within function:
//  split words into array
//  iterate
//  if any are a number, change to string
// TODO: looking for way to detect numerals -- typeof = "number" does not work as the numeral is within a string
// map through new array with pig latin function

// pig latin function
//  if begins with consonant
//      find index of first vowel
//      slice [0:first vowel] and set to var
//      append slice to end of string
//
//  TODO: find and avoid sentence punctuation
//  append "ay" to end of new string
//  return newString

const languageConverter = (str, languageChoice) => {
  const strArr = str.split(" ");
  const newStr = languageChoice(strArr);
  const finalStr = newStr.join(" ");

  return finalStr;
};

const pigLatin = (arr) => {
  //   console.log(arr);
  for (const word in arr) {
    const vowelRegex = /[aeiouy]/gi;
    let vowelIndex = arr[word].search(vowelRegex);
    let backSlice = arr[word].slice(0, vowelIndex);
    let frontSlice = arr[word].slice(vowelIndex);

    arr[word] = frontSlice + `-${backSlice}ay`;
  }
  //   console.log(arr);
  return arr;
};

const testStr = "Hello my name is Simon.";

console.log(languageConverter(testStr, pigLatin));
