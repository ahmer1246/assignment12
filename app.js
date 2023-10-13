//! CHAPTER 35 TO 38 //

//! Q NO 1 //

// function showDate(){
//     var date = new Date();
//     console.log(date)
// }
// showDate()

//! Q NO 2 //

// var fname = "Muhammad ";
// var lname = "Ahmed";

// function concat(){
//     var result=fname+lname;
//     console.log(result)
// }
// concat()

//! Q NO 3 //

// var num1 = +prompt("write first number ");
// var num2 = +prompt("write second number");

// function sum(){
//     var result = num1 + num2;
//     console.log(result);
// }
// sum()

//! Q NO 4 //

// var num1 = +prompt("Enter first Number");
// var operater = +prompt("Enter operator")
// var num1 = +prompt("Enter first Number");


// function calculate(){
//     var result = num1+operater+num1;
//     console.log(result)
// }


// ! Q NO 5 //


// function operate(number){
// var result= number ** 2;
// console.log(result)
// }
// operate(4)
//! Q NO 6 //

// function factorial(n) {
//     // Check if the input is a non-negative integer
//     if (n < 0 || !Number.isInteger(n)) {
//       return "Invalid input. Factorial is defined for non-negative integers only.";
//     }
  
//     // Base case: factorial of 0 is 1
//     if (n === 0) {
//       return 1;
//     }
  
//     // Recursive case: n! = n * (n-1)!
//     return n * factorial(n - 1);
//   }
  
//   // Example usage:
//   let result = factorial(4);
//   console.log(result); // Output: 120

//! Q NO 7 // 

// var startNum = +prompt("write starting number");
// var endingNum = +prompt("write ending number");

// function count(){
//     for(i=startNum ; i<=endingNum ; i++){
//         console.log(i)
//     }
// }
// count()


//! Q NO 8 //

// const x = +prompt("Enter a base value");
// const y = +prompt("Enter a perpendicular")
// function calculateHyp (base,perpendicular){

//     function calculateSquare(x){
//         return x ** 2;
//     }

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;

//     var hypontun = Math.sqrt(hypotenuseSquare);

//     console.log( hypontun) 

// }

// calculateHyp(x,y)


//! Q NO 9 //
//! i //
// function areaOfRectangle(width,height){

//     const area = width*height;
//     console.log("Aera of Rectangle is ",area)
// }

// areaOfRectangle(3,5)
//! ii //

// const width = +prompt("Enter a width");
// const height = +prompt("Enter a height");
// function areaOfRectangle(width,height){

//     const area = width*height;
//     console.log("Aera of Rectangle is ",area)
// }

// areaOfRectangle(width,height);

//! Q NO 10 //
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Compare the original and reversed strings
//     const reversedStr = cleanedStr.split('').reverse().join('');
    
//     return cleanedStr === reversedStr;
// }

// // Example usage:
// const inputString = "madam";
// if (isPalindrome(inputString)) {
//     console.log(inputString + " is a palindrome.");
// } else {
//     console.log(inputString + " is not a palindrome.");
// }

//! Q NO 11 //

// function capitalWord (str){
//     const words = str.split(' ');
//     console.log(words);
//     const wordCapital = words.map(word=>word.charAt(0).toUpperCase() + word.slice(1));
//     console.log(wordCapital)
//     const result = wordCapital.join(' ');
//     console.log(result)
// } 
// capitalWord("lion is the king ");

//! Q NO 12 //
// function findLongestWord(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');

//     // Initialize a variable to store the longest word
//     let longestWord = '';

//     // Iterate through each word to find the longest one
//     words.forEach(word => {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     });

//     return longestWord;
// }

// // Example usage:
// const inputString = 'Web Development Tutorial';
// const longestWord = findLongestWord(inputString);
// console.log("Original String: " + inputString);
// console.log("Longest Word: " + longestWord);

//! Q NO 13 //


// function countOccurrences(str,letter){

//     const lowerStr = str.toLowerCase();
//     const lowerLetter = letter.toLowerCase();

//     let count = 0;

//     for(i=0; i< lowerStr.length ; i++){

//         if(lowerStr[i]===lowerLetter){
//             count++;
//         }
//     }
//     return count;

// }
// const inputString = 'JSResourceS.com';
// const targetLetter = 'o';
// const occurrences = countOccurrences(inputString, targetLetter);
// console.log(`Number of occurrences of '${targetLetter}' in '${inputString}': ${occurrences}`);

//! Q NO 14 //

function calcCirumference(radius){

    const circumference = 2 * Math.PI * radius;
    console.log("The circumference is ", circumference)
}
calcCirumference(5)


function calcAera(radius){

    const aera = Math.PI * Math.pow(radius,2)
    console.log("The area is ", aera )
}
calcAera(5)








