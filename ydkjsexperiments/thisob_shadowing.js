var anotherObject = {
    a: 2
};
var myObject = Object.create(anotherObject);
console.log(anotherObject.a); // 2
console.log(myObject.a); // 2
console.log(myObject.hasOwnProperty("a"));

console.log(myObject.a=5); // 2
anotherObject.hasOwnProperty("a"); // true
console.log(myObject.hasOwnProperty("a")); // false
myObject.a++; // oops, implicit shadowing!
anotherObject.a; // 2
myObject.a; // 3
console.log(myObject.hasOwnProperty("a")); // true