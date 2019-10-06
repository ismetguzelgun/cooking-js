//Strings are unicode

//Backtick-quoted strings, usually called template literals
//`half of 100 is ${100 / 2}`

//There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).
console.log(NaN == NaN)
// → false
/*NaN is supposed to denote the result of a nonsensical computation, and as such, 
it isn’t equal to the result of any other nonsensical computations.*/

/*The difference in meaning between undefined and null is an accident of JavaScript’s design, 
and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, 
I recommend treating them as mostly interchangeable.*/

//When you do not want any automatic type conversions to happen, there are two additional operators: === and !==

//You should imagine bindings as tentacles, rather than boxes. They do not contain values; they grasp them—two bindings can refer to the same value
let caught = 5 * 5;
//caught is the binding

//Executing a function is called invoking, calling, or applying it. 

/*Each local scope can also see all the local scopes that
contain it, and all scopes can see the global scope. This approach to binding
visibility is called lexical scoping.*/

//Optimal arguments can cause problems. If you had two arguments which one of them does not be used, function behaves that argument
//as it has a value undefined'

function minus(a, b) {
if (b === undefined) return -a;
else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

//closure arrow func
//https://codeburst.io/javascript-understand-arrow-function-syntax-ab4081bba85b
const double = (num) => {
  return num * 2;
}
// Is the same as
const double = num => num * 2;

//closure
function multiplier(factor) {
return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10

/*
These are expressions that access a property of some value. In the first case, we access the length property of the value in myString. In the second, we access the property named max in the Math object (which is a collection of mathematics-related constants and functions).

Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error.

*/

//Properties
/*
The two main ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result, converted to a string, as the property name.

So if you know that the property you are interested in is called color, you say value.color. If you want to extract the property named by the value held in the binding i, you say value[i]. Property names are strings. They can be any string, but the dot notation works only with names that look like valid binding names. So if you want to access a property named 2 or John Doe, you must use square brackets: value[2] or value["John Doe"].
*/

/*
Properties that contain functions are generally called methods of the value they belong to, as in “toUpperCase is a method of a string”.
*/

//Reading a property that doesn’t exist will give you the value undefined.

//Methods
/* 
properties that contain functions are generally called methods of the value they belong to, as in “toUpperCase is a method of a string”.
*/

//OBjects
/*
This means that braces have two meanings in JavaScript. At the start of a statement, they start a block of statements. In any other position, they describe an object. 
Fortunately, it is rarely useful to start a statement with an object in braces, so the ambiguity between these two is not much of a problem.
*/
//You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it.
/*
The delete operator cuts off a tentacle from such an octopus. It is a unary operator that, when applied to an object property, will remove the named property from the object.
*/
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

/*Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object". 
You can see them as long, flat octopuses with all their tentacles in a neat row, labeled with numbers.*/