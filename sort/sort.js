//summary sort

//  const arr = [7, 5, 5,  4, 9, 2]

//  const arr = [{id: 5, name2: 'Raj5'}, {id: 2,  name2: 'Raj2'}, {id: 3}, {id: 1}]

//desceding less than symbol
// const newArr = [...arr].sort((a, b) => {
//     if(a < b) return 1 
//     else if (a == b) return 0
//     else if ( a > b) return -1
// })

//ascending greater than symbol
// const newArr = [...arr].sort((a, b) => {
//     if(a > b) return 1 
//     else if (a == b) return 0
//     else if ( a < b) return -1
// })


// ascending greater than symbol
// const newArr = [...arr].sort((a, b) => {
//     if(a.id > b.id) return 1 
//     else if (a.id == b.id) return 0
//     else if ( a.id < b.id) return -1
// })

// console.log(arr, newArr)

//sort algorithm is dependent on browser.

//using - operator
const arr = [7, 5, 5,  4, 9, 2]

const newArr = arr.sort((a,b) => a - b)
console.log(newArr)