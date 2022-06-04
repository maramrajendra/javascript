//summary

//1.sort

//2.reverse

// const arr = [5,4,3,2]
// const arrRev = arr.reverse()

// console.log(arrRev)
// console.log(arr)
// // this one mutates the array

//3
// const arr = [5,4,3,2]
// const arrRev1 = [...arr]
// console.log(arrRev1.reverse())
// console.log(arr)

//4
// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
// const newArr = originalArray.reverse()
// console.log(newArr)

// not to disturb original array copy the array.

//copy array1
// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
// const newArr = [...originalArray]
// console.log(newArr)

//copy array2 not working
// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
// const newArr = Object.assign({}, originalArray)
// console.log(newArr)
// { '0': { price: 10.99 }, '1': { price: 5.99 }, '2': { price: 29.99 } }

//copy
// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
// const newArr = originalArray.slice(0)
// const newArr = originalArray.slice()
// const newArr = [...originalArray] //shallow copy, here references are being copied.
// const newArr = originalArray.concat()
// console.log(newArr)

//shallow copy
// const arr = [[1], [5]]
// const newArr = [...arr]
// newArr[1].push(500)
// console.log(arr)
// console.log(newArr)

//deep copy
//convert to string using JSON.stringify and convert back object JSON.parse
// const arr = [[1], [5]]
// console.log(arr)
// const strArr = JSON.stringify(arr)
// console.log(strArr)
// const parseArr = JSON.parse(strArr)
// console.log(parseArr)
// parseArr[0].push(200)
// console.log(parseArr)
// console.log(arr)

//sc
// https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
// const arr = [[1], [5]]
// const newArr = JSON.parse(JSON.stringify(arr))
// newArr[0].unshift(500)
// console.log(newArr)
// console.log(arr)





