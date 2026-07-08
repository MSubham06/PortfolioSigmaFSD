// try {
//     console.log(a);
// } catch {
//     console.log("Variable not found!")
// }

// console.log("Hi There!");
// setTimeout( () => {
//     console.log("Apna College!");
// }, 4000);
// console.log("Welcome!"); 

// setInterval(() => {
//     console.log("Hello Subham!");
// },3000);

// const student = {
//     name : "aman",
//     marks : 95,
//     prop: this, //global scope
//     getName:  function () {
//         console.log(this)
//         return this.name;
//     },
// }

// const a = 3;



// const square = (n) => n * n;


// let id = setInterval( () => {
//     console.log("Hello World!");
// },2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Clear Interval Ran!")
// },10000);



//practice question1
const arrAvg = (arr) => {
    let total = 0;
    for (let number of arr){
        total= total + number;
    }
    return total / arr.length;
};
let arr = [2, 4, 5, 6, 7, 8, 9];
console.log(arrAvg(arr));

//practice question2
const isEven = (n) => {
    if (n%2 == 0) {
        console.log("It's a Even Number!");
    } else {
        console.log("It's Not a Even Number!");
    }
}
let n = 10;
console.log(isEven(n));

//practice question3 & 4
// code based output answers