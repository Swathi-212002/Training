//Find the First Non-Repeating Character
function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("swiss"));



//count occurance of specific character
function countSpecificChar(str, target) {
    let count = 0;
  
    for (let char of str) {
      if (char === target) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countSpecificChar("hello world", "l"));



//reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello"));