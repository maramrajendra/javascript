//summary
//1. index of lastindex of
//2.find, findIndexOf
//3 filter, same like find but new array we will get.

//indexOf based on the value we are going to find the index. second argument optional, from which index it needs to look.
//lastindexof will search from end.
//gives output as the index value, camel case syntax
// const  arr = [1,2,1,1,3]
// console.log(arr.indexOf(1,2))
// console.log(arr.lastIndexOf(1))
// indexOf doesn't work for objects as it stores address than value

//2.find, findIndexOf, here we don't get new array.

// const arr = [{id: 1, name:'Raj1'},{id: 2, name:'Raj2'},{id: 3, name:'Raj3'},{id: 4, name:'Raj4'} ]

//long
// const findRes = arr.find((eachEl, idx, arr)=> {
//     return eachEl.name === 'Raj2'
// })
// console.log(findRes)
//sc

// const findRes = arr.find(eachEl=> eachEl.name === 'Raj2')
// console.log(findRes)

// const findIndes = arr.findIndex(item => item.id === 2)
// console.log(findIndes)

//3 filter, same like find but new array we will get.
// const arr = [{id: 1, name:'Raj1'},{id: 2, name:'Raj2'},{id: 3, name:'Raj3'},{id: 4, name:'Raj4'} ]

// const newArr = arr.filter(item => item.name ==='Raj4' || item.name==='Raj2')
// console.log(newArr)

//4 map function, just display item and idx
// const arr = [4, 2, 3]

// const newArr = arr.map((item, idx) => {
// console.log(item)
// console.log(idx)
// })

//4 map function, convert into object
// const arr = ['Raj4', 'Raj2', 'Raj3']

// const newArr = arr.map((item, idx) => {
// return {id: idx + 1, name:item}
// })

// console.log(newArr)


//sc 
// const arr = ['Raj4', 'Raj2', 'Raj3']

// const newArr = arr.map((item, idx) => return {id: idx + 1, name1:item})

// console.log(newArr)
// for object shortcut doesn't work

//5convert object to array of names

// const arr = [{id: 1, name:'Raj1'},{id: 2, name:'Raj2'},{id: 3, name:'Raj3'},{id: 4, name:'Raj4'} ]

// const newArr = arr.map(item => item.name)
// console.log(newArr)

//6.Reduce

// const arr = [5, 3, 2]

// const sum = arr.reduce((prevVal, currVal)=> prevVal+currVal, 0)
// console.log(sum)

//7. find out the total price
// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

//method1.

// const mapArr = originalArray.map(item => item.price)
// console.log(mapArr)
// const redArr = mapArr.reduce((prevVal, currVal)=> prevVal + currVal, 0)
// console.log(redArr)

//sc
// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

// const sumPrice = originalArray.map(item => item.price).reduce((prevVal, currVal)=> prevVal + currVal , 0)

// console.log(sumPrice)


//without map

const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

const newSum = originalArray.reduce((prevValue, currValue) => prevValue + currValue.price, 0)
console.log(newSum)

