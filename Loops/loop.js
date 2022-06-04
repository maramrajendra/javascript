//summary

// Loops: forEach
//2. const elem of array
//3. normal for loop

//Aum 1

// const arr = [2,4,1]

// arr.forEach((eachEl, ind, arr) => {
//     console.log(eachEl)
// })

// const test = arr.forEach((eachE1, ind, arr) => console.log(eachE1))

//It doesn't matter whether we return or don't return

//2

// const arr = [2,4,1]

// for ( const eachE1 of arr) {
//     console.log(eachE1)
// }
//here, creating new constant every time.

//3

// const arr = [2,4,1]

// for(let i=0; i < arr.length; i++) {
//     console.log('separate by semicolon' + arr[i])
// }
// console.log('In the loop each separated by semi colon')
// console.log('*length is property not function')
// as long as condition is true it will execute.

//b. for in reverse order, descending for loop

const arr = [2, 4, 1]
for (let i = arr.length -1 ; i >= 0; i--) {
  console.log(  arr[i])
}


//4 while

// numbers = [1,2,3]
// numberCopy = []

// i = -1

// while (++i < numbers.length) {
//     numberCopy[i] = numbers[i]
// }

// console.log(numberCopy)
// here, it will execute as long as condition is true.




