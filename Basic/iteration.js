
//For Loop

//high order array loops
//1.For Of Loop 

const arr = [1,2,3,4,5,6,7,8]
for (const num of arr) {
   // console.log(num);
    
    
}

const map = new Map()
map.set('IN',"India")
map.set('N',"Nepal")
map.set('SL',"Sri-Lanka")
//console.log(map);
for (const [key,value] of map) {
    console.log(key ,'=>', value);
    
}