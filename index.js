// let age = 25;
// let price = 10.99;
// let gpa = 3.8;

// console.log(typeof age);

// let firstName ="Bishesh"
// let lastName =" Shakya";
// console.log( typeof firstName);
// console.log(`My name is ${firstName} ${lastName}`);

// let favouriteFood= " Momo";
// console.log(`My Favourite Food is ${favouriteFood}`);
// console.log(`You are ${age} years old`);
// console.log(`This Item costs ${price} only`);
// console.log(` Your GPA For this sem is ${gpa}`);

// let Bishesh = false;
// let forSale = true;
// console.log(` Is this item for sale? ${forSale}`);
// console.log(`Is Bishesh online ${Bishesh}`);

// let fullName = " Bishesh Shakya"
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = (`Your name is ${fullName}`);
// document.getElementById("p2").textContent = (`You are ${age} years old`);
// document.getElementById("p3").textContent = (`Enrolled:${isStudent}`);

// ? User Input
// let userName;
// document.getElementById("mySubmit").onclick = function (){
//   userName = document.getElementById("myText").value;
//   document.getElementById("heading").textContent = `HELLO ${userName}`;
//  }

// ? Type Conversion

// let age = window.prompt("How old are you ?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x = "0";
// let y = "0";
// let z = "pizza";

// x = Number(x);
// y = String(y);10
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// ? Constants

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("myButton").onclick = function(){ 
  radius= document.getElementById("mytext").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
document.getElementById("myh3").textContent = `The Radius of the Circle is ${circumference}`+"cm";
}