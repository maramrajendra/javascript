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

 const strs = ["flower", "flow", "flight"]
//strs = ["dog","racecar","car"]
let minLen = 200
strs.forEach((elem) => {
    if (elem.length < minLen) { minLen = elem.length }

})
console.log(minLen)

let commonStr = ''
let commonchar = ''
for (i = 0; i < minLen; i++) {   
    if (commonchar != '') {
        commonStr = commonStr + commonchar
    }
    for (j = 0; j < strs.length - 1; j++) {
        // console.log(strs[j][i])
        if (strs[j][i] === strs[j + 1][i]) {
            commonchar = strs[j][i]
        }
        else {
            commonchar = ''
            break
        }

    }
}

console.log(JSON.stringify(commonStr))


