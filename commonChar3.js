// public String longestCommonPrefix(String[] strs) {
//     if (strs.length == 0) return "";
//     String prefix = strs[0];
//     for (int i = 1; i < strs.length; i++)
//         while (strs[i].indexOf(prefix) != 0) {
//             prefix = prefix.substring(0, prefix.length() - 1);
//             if (prefix.isEmpty()) return "";
//         }        
//     return prefix;
// }

// This one is perfect one

const commonChar = (strs) => {
    if (strs.length == 0) return "";
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.length = 0) return ""
        }
    }
    return prefix
}


// const commonStr = commonChar()
// const commonStr = commonChar([])
 const strs = ["flower", "flow", "flight"]
// const strs = ["dog", "racecar", "car"]
const commonStr = commonChar(strs)
console.log('Common String is:' + JSON.stringify(commonStr))