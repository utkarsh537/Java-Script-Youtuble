
/*For Loop
syntax :
for(conditions){
....statement...
}*/

//question : print even number 1 to 100

for(i=0;i<=100;i++){
    if(i%2==0){
        console.log("i=",i)
    }
}

//while loop syntax: while(conditions){ ...statement...}

/* question 2: Create a game where you start with any random number . 
Ask the user to keep guessing the game number until the user enter 
correct number.*/

let gameNum = 25
let userNum = prompt("Guess the game number :")
console.log(userNum)

//while loop 
while(userNum!=gameNum){
    let userNum = prompt("you enter wrong number ,Guess again")
    
}
console.log("Congratulation, You entered the correct number")