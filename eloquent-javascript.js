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
