let numbers1 = [5,7,14,18,25,32]; //1. Create two arrays of numbers called numbers1 and numbers2
let numbers2 = [5,7,14,18,25,32]; 

let numbers = [...numbers1, ...numbers2]; //2. Spread operator ... to combine in a new array

//3. Define an arrow function called square that accepts a number as an argument and returns the square of the number.
const square = (num) => num * num;
//console.log(square(7)); test arrow function

//4. Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
const squares = numbers.map(square);
//console.log(squares); test map function

//5.Define an arrow function called isEven that accepts a number as an argument 
//and returns true if the number is even, otherwise false.
const isEven = (num) => num %2 == 0; //boolean checks if there is a remainder
//console.log(isEven(3));

//6.Use the filter method to create a new array called evenSquares 
//that contains only the even squares from the squares array.
const evenSquares = squares.filter(isEven); //filters by isEven
//console.log(evenSquares);prints the evens in squares array

//7. Use destructuring assignment to extract the first and second elements 
//of the evenSquares array 
//into constants firstEvenSquare and secondEvenSquare.
const [firstEvenSquare, secondEvenSquare] = evenSquares; 
//console.log(` ${firstEvenSquare} ${secondEvenSquare}`); checks if 2 evens got assigned

//8. Use a template literal to log the original numbers array, 
//the squares array, the evenSquares array, 
//and the extracted even squares.

console.log(`original numbers array: ${numbers}, the squares array: ${squares}, the evenSquares array: ${evenSquares}, the first two even squares:  ${firstEvenSquare} ${secondEvenSquare} `);