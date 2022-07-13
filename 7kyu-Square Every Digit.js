// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let digitArray = String(num).split("").map((num) => {
    return Number(num)
  });
  digitArray.forEach((digit, index) => digitArray[index] *= digit);
  digitArray = Number(digitArray.join(''));
  return digitArray;
}
