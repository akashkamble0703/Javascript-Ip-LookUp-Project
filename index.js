//  Nested Do While Loop =

// var i = 0;
// do {
//   document.write("<strong>Outer Loop</strong>");
//   document.write(i);
//   i++;
//   document.write("<br>");
//   var j = 0;
//   do {
//     document.write("Inner Loop");
//     document.write(j);
//     j++;
//     document.write("<br>");
//   } while (j < 5);
// } while (i < 3);

//  Break And Continue

// Break
// for(i = 0; i <= 10; i++)
// {
//     if(i == 8)
//     {
//         break; // Stop the Loop
//     }
//     document.write(i);
//     document.write("<br>");
// }

//   Continue
// for(i = 0; i <= 10; i++)
// {
//     if(i == 8)
//     {
//         continue;   // continue in first element and last elements without (i==8) 'skip loop'
//     }
//     document.write(i);
//     document.write("<br>");
// }

// Function - function are subprograms which are used to compute a value or perform a task.
// type of function - library or Built-in fuctions, Ex:- valueOf(), write(), alert() etc.
// Creating And Calling a Function-

// Crating Function
function Display() {
  document.write("Akash");
}
//Calling Function
// Display();

// How function call work
// document.write("First Line <br>");
// document.write("Akash <br>");
function display() {
  document.write("Inside function <br>");
}
// document.write("Last Line <br>");
// display();
// document.write("End Line <br>");

// Function with parameters- 1) javascript function defination do not specified data types for parameters.
//  2) javascript functions do not perform type checking on the passed arguments.
//  3) javascript functions do not check the number of arrguments reccived.

function ak(name1, name2, ...arguments) {
  document.write(name1 + "  " + name2 + arguments);
}
// ak("Akash", "Kamble", 23, "akash2", "ak");

//  Rest Parameters And Arguments

// Rest Parameters
function restshow(a, ...args) {
  console.log("a:" + a);
  console.log(args);
}
// restshow(10, 20, 30, 40, 50);   // Rest Parameters as array

// Arguments Object
// function show(a) {
//   console.log("a:" + a);
//   console.log(arguments);
// }
// show(10, 20, 30, 40, 50);   // Arguments not a array

// Return statments- A return statment may be return any data, including arrays and objects.
/*function add(a, b) {
  return a + b;
} */
// document.write(add(10, 20));

// Veriable Scope - 1) Global scope, 2) Local scope
// a veriable that is declared outside a function is a global veriable, and its value is accessible and modified throughout your program.

/* var i = " akash global";
function show() {
  function hex() {
    var j = "akash Local";
    console.log(i, "<br>");
    console.log(j, "<br>");
  }
  hex();
  console.log(i);
  console.log(j); // j is loacal veriable not print in outer veriable scope.
} */
// show();
// console.log(i); // j is not call in outer veriable scope but i is calls in outer.

// Block Scope - 

/* if(true){
  var i = 10;
  document.write(i + "<br>");  //10
}
document.write(i + "<br>"); */ //10  let veriable not access to outer block.

// Using Object Literal - 

// Declaration of object-
/* var fees = {};

fees['Rahul'] = 100;
fees.Sumit = 150;
fees.Akash = 200;
fees.Super man = 300;   // Not Allowed two word
fess['Super man'] = 300; // alloewd

console.log(fees);   */   

/* var fees = {Rahul: 100,
Sumit : 150,
Akash : 200};

console.log(fees); */   //

// Objects Methods-
// var fees = {};
// fees['Rahul'] = 100;
// fees['Total'] = function () { 
//   return(100 + 200);
// };
// // fees.Total = function() { return(100+200);};

// document.write(fees['Total']()); //300
// document.write(fees.Total());    //300
// console.log(fees['Total']());

// var fees = { Rahul : 100, Rohan : 200};
// alert('fees.Rohan');   // 

// Using Object Constructor -
/* var fees = new Object();
fees['Rahul'] = 100;
fees['Sumit'] = 200;
fees['Akash'] = 300;
fees['total'] = function() {return(100 + 200);};
document.write(fees.total()); */
// document.write(fees['total']());

// Accessing Properties- A property of an object is some piece of named data it contains. these are accessed with dot operator applied to an object alternative to the operator is the array[] operator.
// var fees = {Rahul: 100, Sumit: 200, Rohan: 300};
// fees.Rahul= 100; /*or */fees['Rahul'];
// document.write(fees.Rahul);
// document.write(fees['Rahul']);

// Accessing Method- Object members that are function are called methods. these  are accessed with dot operator applied to an object alternative to the dot operator is the array[] operator
/* var fees = {Rahul:100, Sumit: 200, Rohan:250, total:function() {return(100+200+250);}};

document.write(fees.total()); */

//  deleting Properties-
/* var fees = {Rahul:100, Sumit:200};

document.write(fees.Rahul + " " + fees.Sumit<"br">); // 100 200
delete fees.Rahul;   //deleting Rahul property
document.write(fees.Rahul + " " + fees.Sumit);   // undefined 200
console.log(fees); */ // only Sumit Shows console

// Factory function - when a function return an object, we call it a factory function. it can produce object instance without new keyword or classes.
/* function mobile(){
  return{
    model: "Galaxy",
    price: function () { return "Price Rs.3000";}
  };
}
var samsung = mobile();
document.write(samsung.model + " " + samsung.price()); */ //Galaxy Price Rs.3000

// factory function with Parameters -
/* function mobile(model_no) {
  return {
    model: model_no,
    price: function () {
      return "price is Rs.5000";
    }
  }
}
var samsung = mobile('galaxy');
var nokia = mobile('3130');
document.write(samsung.model + " " + samsung.price() + "<br>");
document.write(nokia.model + " " + nokia.price()+"<br>");
document.write(`${samsung.model} ${samsung.price()}<br>`);
document.write(`${nokia.model} ${nokia.price()}`); */

// Constructor- Object instance are created with constructor, which are basically special function that prepare new instance of an object for use.
  
 /*  function Mobile() {
    this.model = '3110' ;
    this.price = function () {
      document.write(this.model + " " + 'price Rs.3000' + '<br>');
      // console.log(this.model + "" + "price Rs.5000");
    }
}
var samsung = new Mobile();
var lg = new Mobile();
samsung.price();
lg.price();
*/

// Constructor with Parameter

/* function Mobile(Model_no) {
  this.model = Model_no;
  this.price = function () {
    document.write(`${this.model} price Rs.5000 <br>`);
  }
}
var samsung = new Mobile("Galaxy");
var Nokia = new Mobile("3110");
samsung.price();
Nokia.price(); */

// Check Properties exist-
//syntax - if (typeof object_name.key ! == 'udefined')
// ex-
/* function Mobile(model_no) {
  this.model = model_no;
  this.memory = 4;
}
var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3110');

if(typeof nokia.memory !== 'undefined'){
   document.write("Available");
} else {
  document.write("doesnt exists");
} */

// in operator-
// syntax - if('key' in object_name)
// Ex-
// function Mobile(model_no) {
//   this.model = model_no;
//   this.memory = 4;
// }
// var samsung = new Mobile('Galaxy');
// var nokia = new Mobile('3110');
// if('memory' in nokia) {
//   document.write("Available");
// } else {
//   document.write("Doesnt Exist");
// }

// hasOwnProperty()
// syntax - if(Object_name.hasOwnProperty("key"))
// Ex - 
/* function Mobile(model_no) {
  this.model = model_no;
  this.memory = 4;
}
var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3110');
if(nokia.hasOwnProperty('memory')) {
  document.write("Available");
} else{
  document.write("Doesnt Exist");
} */

// For in loop - the for ...in loop is used to loop through an objects properties.
// syntax - for(var varible_name in object_name){block of statment}
//  ex -
function Mobile(model_no, model_color, model_memory, model_price) {
  this.model = model_no;
  this.color = model_color;
  this.memory = model_memory;
  this.price = model_price;
}
var samsung = new Mobile('Galaxy', 'black', '128GB', 14999);
var nokia = new Mobile('3110', 'white', '64GB', 12999);
if(nokia.hasOwnProperty('memory')) {
  document.write("Available <br>");
} else{
  document.write("Doesnt Exist");
}

 for(var keys in nokia ){

  document.write(nokia[keys]+ '<br>');
  document.write(samsung[keys] + '<br>');
 }

//  closure in javaScript - a closure is a function having access to the parent scope. it preserve the data from outside
// OR a closure is an inner function that has access to the outer(enclosing) function veriables every closures three scope
//  1) Veriable Scope  

// const myfunction =(a)=>{
//   return (b)=>{
//   return  (c)=>{
//     console.log(a+b+c)
//   }
//   }
// }
//  const F1 = myfunction(5)  
//  const F2=F1(5)
//  F2(5)

var x={},
  y={key:"y"},
  a={key:"z"},
  z={key:"z"};
x[y] = 11;
x[z] = 21;
x[a] = 43;
console.log(x[y]);


// Will the following for loop complete?

var i = 1;
for (;i<4;){
 console.log(i = i + 1);
}


// Which line of code which would replace "LINE OF CODE GOES HERE" make the following code work without errors or infinite loops?

// var i=0;
// do {
// i++;
//   if (i==5){
//       bra
//      i=0;
//    }
// }while(i<7);

var cars=2;
do{
  cars/=2;
}while(cars<1);

console.log("Number of cars: " + cars);