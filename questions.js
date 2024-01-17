// roman to numeric

function romanToInteger(romanLetter) {
  let romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
  };
  let total = 0;

  for (let i = 0; i < romanLetter.length; i++) {
    let currentNumeral = romanNumerals[romanLetter[i]];
    let nextNumeral = romanNumerals[romanLetter[i + 1]];

    if (nextNumeral > currentNumeral) {
      total += nextNumeral - currentNumeral;
      i++;
    } else {
      total += currentNumeral;
    }
  }
  return total;
}
console.log(romanToInteger("XVI"));

//longest common prefix

function longestCommonPrefix(array) {
  if (!array.length) {
    return "";
  }

  let min = array[0];
  let max = array[array.length - 1];
  let prefix = "";

  for (let i = 0; i < min.length; i++) {
    if (min[i] === max[i]) {
      prefix += min[i];
    } else {
      break;
    }
  }
  return prefix;
}
console.log(longestCommonPrefix(["trick", "trip", "tri-cycle"]));

//valid parenthesis
function isValidParentheses(str) {
    let stack = [];
    let parentheses = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
  
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
  
      if (parentheses[currentChar]) {
        let topElement = stack.length === 0 ? '#' : stack.pop();
        if (topElement !== parentheses[currentChar]) {
          return false;
        }
      } else {
        stack.push(currentChar);
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValidParentheses('()'));
  
  //merge Sorted lists

  function mergeSortedLists(list1,  list2){
    let result = [];
   let i = 0;
   let j = 0;
   while(i< list1.length && j < list2.length){
    if(list1[i] < list2[j]){
        result.push(list1[i]);
    }
   }  
    }
  