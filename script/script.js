let a, b, c;

a = 10;
b = 20;

c = a * b;

document.getElementById("statement").innerHTML = "মোট গুণফল" + c;


let num1, num2, total;

num1 = 7;

num2 = 3;

total = num1 - num2;

document.getElementById("statement2").innerHTML = "মোট বিয়োগফল" + total;


let x, y, result;

x = 4;

y = 2;

result = x / y;

document.getElementById("statement3").innerHTML = "মোট ভাগফল" + result;



let d = 5;

d = 7;

d = d + d;

// alert(d);


const fruits = ["Apple", "Banana", "Cherry"];

fruits[0]="Mango";

document.getElementById("statement4").innerHTML=fruits;

const colors=["Red", "Green", "Blue"];

colors.push("Yellow");

document.getElementById("statement5").innerHTML=colors;

const animals=["Cat", "Dog", "Horse"];

animals[1]="Tiger";

animals.push("Elephant");


const countries=["Bangladesh", "Pakistan", "Afganistan"]

countries[0]="islami amirat";

countries.push("Soudi arabia");

document.getElementById("statement6").innerHTML=animals.join(",")+"<br>"+ countries.join(",");



//✅ প্র্যাকটিস ১: const এর Block Scope

const city="Dhaka";

{
    const city="Chittagong";

    console.log("Inside block:", city);
}

console.log("Outside block:", city);

//✅ প্র্যাকটিস ২: let এর সাথেও একই নিয়ম


let num=5;

{
    let num=100;

    console.log("Inside block:", num);
}

console.log("Outside block:", num);

// প্র্যাকটিস ৩: const দিয়ে দুই জায়গায় x ডিক্লেয়ার করো


const e = "Outside";

{
    const e = "Inside";

    document.getElementById("block1").innerHTML = e;
}

document.getElementById("block2").innerHTML= e;


//✅ প্র্যাকটিস ৪: শুধুমাত্র এক্সপেরিমেন্ট

{
    const myName="Minhaj";
    console.log("Inside:", myName);
}

//console.log("Outside:", myName); //eta referenceError dibe;


//✅ প্র্যাকটিস ২: let বা const দিয়ে একই স্কোপে Redeclare করা যায় না



let age=25;

//let age =30; Error

const shohor="Dhaka";

//const city = "chittagong"; Error


//✅ প্র্যাকটিস ৩: const Variable Reassign করা যায় না

const country1="Bangladesh";

//country1 = "India"; Error

//✅ প্র্যাকটিস ৪: আলাদা Block-এ const বারবার declare করা যায়

const hobby ="Reading";

{
    const hobby="Codding";

    console.log("Block 1:", hobby)
}

{
    const hobby= "Gaming";
    console.log("Block 2:", hobby);
}

console.log("Outside:", hobby);

//✅ প্র্যাকটিস ৫: Hoisting (var আগে declare না করেও ব্যবহার করা যায়)

// car="BMW";

// console.log(car);

// var car;


//✅ প্র্যাকটিস ৬: let বা const Hoisting করে না

// console.log(a1);
// let a1 = 5;


// console.log(b1);
// const b1 =10;

