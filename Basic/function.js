
function addTwoNum (num1,num2){
    return num1+num2
}
const result = addTwoNum(5,8)
console.log("result:",result);



function addThreeNUM (num1,num2,num3){
    let result1= num1+num2+num3
    return result1
}
const result1 = addThreeNUM(5,8,9)
console.log("result:",result1);

function calculateCartPrice (...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,800,1000));


function calculateCartPrice1 (val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,600,800,1000));

const myNewArray = [100,200,400,600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
