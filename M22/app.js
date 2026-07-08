function hello() {
    console.log("Hello!");
}

function print1to5() {
    for(let i=1;i<=5; i++) {
        console.log(i);
    }
}

// print1to5()


function dice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}
// dice()

function printName(name) {
    console.log(name);
}


//average of 3 numbers
function calcAvg(a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg)
}
// calcAvg(3,3,3);

function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}


//sum
function sum(a,b) {
    let sum = a+b;
    return sum;
}
// console.log(sum(2,3));

// Practice question 1
let arr1 = [8,9,10,1,2,3,4,5,6,7];
let num1 = 5;

function getElements(arr1,num1) {
    for (let i=0;i < arr1.lenght; i++) {
        if (arr1[i] > num1) {
            console.log(arr1[i]);
        }
    }
}
console.log(getElements(arr1,num1));


// Practice question 2
let str = "abcdabcdefgggh";
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) ==-1) {
        //if current character is not added, then add it in ans.
        //Otherwise it is a duplicate.
        ans = ans + currChar;
        }
    }
    return ans;
}
getUnique(str);

// Practice question 3
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);

// Practice question 4
let str1 = "apnacollege";
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (
            str.charAt(i) == "e" ||
            str.charAt(i) == "a" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ) {
        count++; 
        }
    }
    return count;
}

// Practice question 5
let start = 100;
let end = 200;

function genrateNumbers(start,end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff ) + start;
}