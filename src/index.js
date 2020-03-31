let x = {}; //object
console.log(Object.getPrototypeOf(x));
console.log(x.__proto__);
console.log(x.__proto__.__proto__);

let x1 = x.toString();
console.log(x1);https://www.tutorialsteacher.com/javascript/prototype-in-javascript

let y = []; //array object
console.log(y.__proto__);
console.log(y.__proto__.__proto__);

function Student() {
  this.name = "John";
  this.gender = "Male";
}

var studObj1 = new Student();
studObj1.age = 15;
console.log(studObj1.age); // 15

var studObj2 = new Student();
console.log(studObj2.age); // undefined

/* age property is attached to studObj1 instance. 
However, studObj2 instance will not have age property 
because it is defined only on studObj1 instance.

if we want to add new properties at later stage to a 
function which will be shared across all the instances?

Answr is PROTOTYPE*/

function Student(){
  this.name = "John";
  this.gender = "M";
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(studObj1.age); // 15

var studObj2 = new Student();
console.log(studObj2.age); // 15

/** CHANGING PROTOTYPE
 * each object's prototype is linked to function's prototype object.
 * If you change function's prototype then only new objects will be
 * linked to changed prototype. All other existing objects will still
 * link to old prototype of function
 */

function Student() {
  this.name = "John";
  this.gender = "M";
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log("studObj1.age = " + studObj1.age); // 15

var studObj2 = new Student();
console.log("studObj2.age = " + studObj2.age); // 15

Student.prototype = { age: 20 };

var studObj3 = new Student();
console.log("studObj3.age = " + studObj3.age); // 20

console.log("studObj1.age = " + studObj1.age); // 15
console.log("studObj2.age = " + studObj2.age); // 15

/**
 * USE OF PROTOTYPE
 * 1) to find properties and methods of an object
 * 2) to implement inheritance in JavaScript.
 */

function Student1() {
  this.name = "John";
  this.gender = "M";
}

Student.prototype.sayHi = function() {
  alert("Hi");
};

var studObj = new Student1();
studObj.toString();

//for details: https://www.tutorialsteacher.com/javascript/prototype-in-javascript
