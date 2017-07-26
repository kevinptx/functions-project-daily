// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){

    if (num1 > num2) {
     return "Max number is " + num1
    }
    else if (num1 < num2) {
     return "Max number is " + num2
    }
    else {
      return "The two numbers are equal."
    }
}
console.log(max(4,6))
console.log(max(6,4))
console.log(max(4,4))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
      return "Max number is " + num1;
    }
    else if (num2 > num3) {
      return "Max number is " + num2;
    }
    else {
      return "Max number is " + num3
    }
}
console.log(maxOfThree(2, 3, 4))
console.log(maxOfThree(4, 2, 3))
console.log(maxOfThree(3, 4, 2))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      return true;
    } else {
    return false;
  }
}
console.log(isVowel("e"))

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (num1, num2){
  let answer = num1 + num2;
  return answer;
}

console.log(sum(2,5))
console.log(sum(5,-5))
console.log(sum(10,2.5))

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (num1, num2, num3){
  let answer = (num1 + num2 + num3)/3;
  return answer;
}
console.log(avg(4,3,2))


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string){
  let answer = string.length;
  return answer;
}
let string = "test";

console.log(getLength(string))

//another method

function getLength(string){
  return string.length
}

console.log(getLength("Kevin"))
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1, num2){
  if (num2 > num1){
  return true;
} else {
  return false;
  }
}
console.log(greaterThan())

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
  return "Hello, " + name + "!"
}
console.log(greet("Kevin"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (word1, word2, word3, word4){
  return 'The ' + word1 + ' bird ' + word2 + ' late ' + word3 + ' the '  + word4
}

console.log(madlib('blue', 'sings', 'into', 'night'))
