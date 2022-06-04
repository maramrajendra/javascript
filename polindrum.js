//1
// const checkPolin = (num) => {
// console.log(num)

// // const numStr = JSON.stringify(num)
// // console.log(numStr)
// const aftersplit = num.split("")
// console.log(aftersplit)
// const afterRev = aftersplit.reverse()
// console.log(afterRev)
// const final = afterRev.join("")
// console.log(final)

// }

//2
const checkPolin = (num) => {
    // if(num <0) { return 'not polindrom'}

// let newNum = JSON.stringify(num).split("").reverse().join("")
let newNum = num.split("").reverse().join("")
// newNum = +newNum

console.log(newNum)

if(num === newNum) {return 'polindrum'} else {return 'not polindrum'}

}

//3
// const checkPolin = (num) => {

//     let newStr = ""

// for(let i=num.length-1; i>=0; i--) {
 
//     newStr = newStr + num[i]
 
// }
// console.log(newStr)

// }

const status1 = checkPolin('MARAM')
 console.log(status1)

//  https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/