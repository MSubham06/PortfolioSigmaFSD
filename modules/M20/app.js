let todo = [];

let req = prompt("Please enter you request!");

while(true) {
    if(req == "quit"){
        console.log("quitting app")
    }

    if(req == "list") {
        console.log("------------------------------")
        for (let i=0; i<todo.length; i++) {
            console.log(i,todo[i]);
        }
        console.log("------------------------------")
    }else if (req == "add") {
        let task = prompt("Please Enter the task you want to add");
        todo.push(task);
        console.log("Task Added!");
    } else if (req == "delete") {
        let idx = prompt("Please Enter the index");
        todo.splice(idx, 1);
        console.log("Task Deleted!")
    } else {
        console.log("Wrong Request!")
    }
    
    req = prompt("Please enter you request!");
}




















// practice 


// for (let i=1;i<=5;i++) {
//     console.log(i);
// }

// for (let i=10;i>=1;i--) {
//     console.log(i);
// }


// console.log("forward");
// for (let i=1;i<=15;i+=2) {
//     console.log(i);
// }
// console.log("backward");
// for (let i=15;i>=1;i-=2) {
//     console.log(i);
// }

// console.log("Printing all the even number (2 to 10)");
// for (let i=2;i<=10;i+=2) {
//     console.log(i);
// }

// let n = prompt("Enter the Number Below!");
// n = parseInt(n)
// for(let i=n;i<=(n*10);i+=n) {
//     console.log(i);
// }
 
// for(let i=1;i<=3;i++) {
//     console.log(`Outer Loop ${i}`);
//     for(let j=1;j<=3;j++) {
//         console.log(j);
//     }
// }


// let i=2;
// while (i<=10){
//     console.log(i);
//     i=i+2;
// }
// console.log("1");


// const fav = "avatar";
// let guess = prompt("Guess the Moive!");
// while (( guess != fav)&&(guess != "quit")) {
//     console.log("Wrong");
//     guess = prompt("Wrong! Guess the Moive again!");
// } 
// if ( guess == fav) {
//     console.log("Congrats!!! ");
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(let i = 0 ; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// let heroes = [ 
//     ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for(let i=0; i<heroes.length; i++) {
//     console.log(`List #${i+1}`);
//     for(let j = 0 ; j<heroes [i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

// let std = [ 
//     ["aman",95],
//     ["shradha",94], 
//     ["karan",100]
// ]

// for(let i=0; i<std.length; i++) {
//     console.log(`Info of Student #${i+1}`);
//     for (let j=0; j<std[i].length; j++){
//         console.log(std [i][j])
//     }
// }

// for (char of "apnacollege") {
//     console.log(char);
// }


// let heroes = [
//     ["ironman", "spideman", "thor"],
//     ["superman", "wonder women", "flash"]
// ];

// for (list of heroes) {
//     for(hero of list) {
//         console.log(hero);
//     }
// }

