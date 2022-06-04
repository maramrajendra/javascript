
//string to arrays and arrays to strings
//2.spread


// string to Array, split method to string
// array to string, join method to array

// const str = 'Raj;40;1980'
// newArr = str.split(';')

// console.log(newArr)

// newStr = newArr.join(' ')
// console.log(newStr)

//2.spread

// const arr = [4,5,6]
// const newArr = [...arr]
// console.log(Math.min(...arr))

//3 need to fine tune.
// const arr = [{1:'raj'}, {2:'raj2'}]

// const newArr = arr.map((item,idx)=> ({item}))
// console.log(newArr)

//3.array destructuring

const fullDetails = ['Raj','maram', 30, 'sycamore']

const [firstName, LastName, ...otherInfo] =fullDetails
console.log(otherInfo)
