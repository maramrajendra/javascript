
//summary: array methods
//1. push and unshift
// const status = array1.push('run')
// array1.unshift('sleep')
//unshift adds at index 0. Push at end.

//2. pop and shift
// array1.pop(array1)  from end
// array1.shift(array1) from index 0.


//3. splice to delete and to add in the middle
// hobbies.splice(1,0,'jogging', 'meditation')

//4. splice Delete
// hobbies.splice(1,2)
// At position 2, add 2 elements:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// At position 2, remove 2 items:


//5. slice
// const newNums = nums.slice(0,2)

//9.concat
// const arr1 = arr.concat([4,5])


//10.includes, returns boolean value, will do data type matching like ===

//push, pop, unshift, shift()
//unshift to add at front, shift to delete from front


//1. push and unshift
// const array1 = ['swim', 'walk']
// const status = array1.push('run') // adds at end
// // console.log(status) length of array
// array1.unshift('sleep') //adds at first
// console.log(array1)

//2. pop and shift
// array1.pop(array1) //remove from end
// console.log(array1)
// array1.shift(array1) //removes from front
// console.log(array1)

//push or pop are good as they don't move existing array elements.


//3. splice to delete and to add in the middle
//To add an element in between, we use splice method. Delete also splice method is used.
//here, starting from 1st index, delete 0 number of elements and at that place add jogging.
// const hobbies = ['reading', 'swimming']
// hobbies.splice(1,0,'jogging')
// console.log(hobbies)
// hobbies.splice(1,0,'meditation')
// console.log(hobbies)
//sec example
// //here, starting from 1st index, delete 0 number of elements and at that place add jogging and meditation
// const hobbies = ['reading', 'swimming']
// hobbies.splice(1,0,'jogging', 'meditation')
// console.log(hobbies)

//4. splice Delete
//here, starting from 1st index, delete 2 number of elements 
// const hobbies = [ 'reading', 'meditation', 'jogging', 'swimming' ]
// hobbies.splice(1,2)
// console.log(hobbies)

//5. negative number
// const hobbies = ['reading', 'swimming', 'jogging', 'walking']
// removedItems = hobbies.splice(-1,2)
// console.log(hobbies)
// console.log(removedItems)
//here, -1 says last element and starting from 2 elements to be deleted, but only one element is there so it will get deleted.

//6. slice starting, slice is new array and splice is in existing array
// to copy or get from particular index to the other index not including the last one.
// //starting from 0 index to index 1 getting copied to new array
// const nums = [1,4,5]
// const newNums = nums.slice(0,2)
// console.log(newNums)

//7. starting from negative, starting from -2 to till end
// const nums = [1,4,5]
// const newNums = nums.slice(-2)
// console.log(newNums)

//8.another slice array
// const nums1 = [1,4,5]
// const newNumsRev = nums.slice(-3, -2)
// console.log(newNumsRev)
// //here -3 is 1 and -2 is not inclusive so only -3 i.e 1

//9.concat
//concat creates new array
// const arr = [1,2,3]
// const arr1 = arr.concat([4,5])
// console.log(arr1)
// console.log(arr)

// const arr = ['A','B','C']
// const arr1 = arr.concat([2,'E'])
// console.log(arr1)
// console.log(arr)



//10.includes, returns boolean value, will do data type matching like ===

const arr = ['2', 5, 4, '3']

console.log(arr.includes(5))
console.log(arr.includes(2))
console.log(arr.includes('2'))

console.log(arr.indexOf(5) !== -1)
console.log(arr.indexOf(7) !== -1)