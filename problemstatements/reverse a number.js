function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
      let digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10);
    }
    return reversed;
  }
  let num='23456';
  let result = reverseNumber(num);
  console.log("Reversed number:", result);