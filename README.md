# Mixed Messages

A simple JS project that converts strings to pig latin.
It is written to be module based -- other pretend languages can be written and dropped into the language converter function. The pig latin module is written using Regex to search for vowels.

```
const languageConverter = (str, languageChoice) => {
    const strArr = str.split(" ");
    const newStr = languageChoice(strArr);
    const finalStr = newStr.join(" ");

    return finalStr;
};

const pigLatin = (arr) => {
    // console.log(arr);
    for (const word in arr) {
    const vowelRegex = /[aeiouy]/gi;
    let vowelIndex = arr[word].search(vowelRegex);
    let backSlice = arr[word].slice(0, vowelIndex);
    let frontSlice = arr[word].slice(vowelIndex);

        arr[word] = frontSlice + `-${backSlice}ay`;

    }
    // console.log(arr);
    return arr;
};

const testStr = "Hello my name is Simon.";

console.log(languageConverter(testStr, pigLatin));

```
