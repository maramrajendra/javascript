const factorial = (num) =>  {
if(num < 1) return 0

if(num === 1) {
    return 1
}
else {
    return num * factorial(--num)
}

}

const result = factorial(5)
console.log(result)