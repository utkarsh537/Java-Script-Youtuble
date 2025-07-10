
let arr = [1,2,3,4,5]
console.log(arr.length)
arr.push(6)
arr.push(7)
arr.pop()
arr.unshift(8)
console.log(arr)
arr.shift()
console.log(arr)
arr.includes(9)
console.log(arr)
arr.indexOf(9)
console.log(arr)

const newArr = arr.join()
console.log(newArr)
console.log(arr)

arr.slice(1,4)
console.log("A",arr)

arr.splice(1,4)
console.log("B",arr)
