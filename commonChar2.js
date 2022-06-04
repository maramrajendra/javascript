

const findMinLength = (lenArray) => {    
    return Math.min(...lenArray)
}

const findMaxLength = (lenArray) => {
    return Math.max(...lenArray)
}


const commonChar = (strs) => {
    console.log(strs)
    if (typeof strs === 'undefined') { console.log('strs is not defined'); return "" }

    if (strs.length == 0 || strs.length > 200) {  return "" }

    const lenArray = strs.map(item => item.length)

    const minLen = findMinLength(lenArray)
    const maxLen = findMaxLength(lenArray)   
    
    if(maxLen > 200) {return ""} 

    console.log('Min String length' + minLen)

    let commonStr = ''
    let commonChar = ''

    for(let i=0; i < minLen; i++) {
         for(let j=0; j < strs.length -1; j++) {
            if(strs[j][i] == strs[j+1][i]) {
                commonChar = strs[j][i]
                }
                else{
                    commonChar = ''
                    break
                }
        }
       
       if(commonChar !== '') { commonStr = commonStr + commonChar }
       else
       {
       break
       }
    }
     return commonStr

}



// const commonStr = commonChar()
// const commonStr = commonChar([])
// const strs = ["flower", "flow", "flight"]
const strs = ["dog","racecar","car"]
const commonStr = commonChar(strs)
console.log('Common String is:' + JSON.stringify(commonStr))






// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.
// strs[0][0]
// strs[1][0]
// strs[2][0]


// strs[0][1]
// strs[1][1]
// strs[2][1]

// strs[0][2]
// strs[1][2]
// strs[2][2]

//2 loops needs to be there
//find out the loop length
// const strs = []
// const strs = ["","",""]
// const strs = ["flower", "flow", "flight"]
//strs = ["dog","racecar","car"]
// let minLen = 200
// strs.forEach((elem) => {
//     if (elem.length < minLen) { minLen = elem.length }

// })
// console.log(minLen)

// let minLen = 200

// const minLen = strs.reduce((prevVal, currVal)=> { return currVal.length < prevVal.length? currVal: prevVal}, "")

// if(typeof strs === 'undefined') {console.log('strs is not defined')}
// if(strs.length == 0) {console.log('max common characters: "" ')}


//  const min1 = strs.map(item => item.length)
//  console.log(min1)
//  const minLen = Math.min(...min1)

//  console.log()
// console.log(Math.max(...min1))

// const initMinLen = min1[0]
// const minLen = min1.reduce((prevVal, CurrVal)=> (prevVal > CurrVal? CurrVal : prevVal), initMinLen )
// const maxLen = min1.reduce((prevVal, CurrVal)=> (prevVal < CurrVal? CurrVal : prevVal), initMinLen )

// console.log(minLen)
// console.log(maxLen)

// if(minLen == 0) {console.log('max common characters: "" ')}

// let commonStr = ''
// let commonchar = ''
// for (i = 0; i < minLen; i++) {
//     if (commonchar != '') {
//         commonStr = commonStr + commonchar
//     }
//     for (j = 0; j < strs.length - 1; j++) {
//         // console.log(strs[j][i])
//         if (strs[j][i] === strs[j + 1][i]) {
//             commonchar = strs[j][i]
//         }
//         else {
//             commonchar = ''
//             break
//         }

//     }
// }

// console.log(JSON.stringify(commonStr))


