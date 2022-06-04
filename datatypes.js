//summary data types

//wip
// https://www.interviewbit.com/javascript-interview-questions/

//1.Data types
// Primitive Data Types

// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof 234567890123456789012345678901234567890n // Returns bigint
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" (kind of a bug in JavaScript)
// typeof Symbol('symbol') // Returns Symbol
// Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous(nameless) and unique value.

// NonPrimitive Datatypes

// Objects and Arrays WV


// 2.Hoisting in Javascript

// All variable and function declarations moved to top -- WV

// b.to avoid hosting, run in "use strict" mode.

// 3. Implicit Type Coercion

// String Coercion

// if number and string are added number get converted to string.

// let x = 3
// let y = 'hello'

// console.log(x + y)
// console.log(typeof (x+y))
// here concatenation takes place because of strings, if it is numbers addition.
// to give x+y preference added in parenthesis

// for - operator string is converted to number

// let a = 3
// let b = '3'

// console.log( (a - b))

//b
// let a = 3
// let b = 'h'

// console.log( (a - b))
//here it will give Nan, it tries to convert string but not a number so it will give NaN ( Not a Number ) as output.




//Boolean Coercion

// if conditions, truthy and false values

// falsy values - 0, null, undefined, Nan, false, 0, -0, ""


// Logical operators:
// Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

// OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

// AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

// var x = 220;
// var y = "Hello";
// var z = undefined;
        
// x | | y    // Returns 220 since the first value is truthy
        
// x | | z   // Returns 220 since the first value is truthy
        
// x && y    // Returns "Hello" since both the values are truthy
        
// y && z   // Returns undefined since the second value is falsy
        
// if( x && y ){ 
//   console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
// }   
        
// if( x || z ){
//   console.log("Code runs");  // This block runs because x || y returns 220(Truthy)



//4 IIFE Function

// (function (){
//     console.log('iife which will have initial parenthesis to tell it is functional expression not declaration and the last parenthesis to invoke.')
// }) ()

//5 Higher Order Functions

// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//a passing as argument
// function higherOrderFunction(fn) {
//     fn()
// }

// higherOrderFunction(function() {console.log('calling from higher order function')})


//b returns the function

// function higherOrderFunction2() {
//     return function() {
//         return 'return from 2nd level'
//     }
// }

// let x = higherOrderFunction2()
// console.log(x())

//6 this


function doSomething() {
    console.log(this);
  }
          
  doSomething();

// not great
// https://mindmajix.com/javascript-interview-questions


// good
// https://www.guru99.com/javascript-interview-questions-answers.html
// https://github.com/sudheerj/javascript-interview-questions
// https://www.edureka.co/blog/interview-questions/javascript-interview-questions/
// https://www.toptal.com/javascript/interview-questions
// https://hackr.io/blog/javascript-interview-questions

