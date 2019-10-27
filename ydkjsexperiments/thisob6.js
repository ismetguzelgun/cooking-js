//hard binding
function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}
var obj = {
    a: 2
};
var bar = function () {
    return foo.apply(obj, arguments);
};
var b = bar(3); // 2 3
console.log(b); // 5

console.log("naber", 9);


//Another way to express this pattern is to create a reusable helper:
function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}
// simple `bind` helper
function bind(fn, obj) {
    return function () {
        return fn.apply(obj, arguments);
    };
}
var obj = {
    a: 2
};

var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); // 5

/**
 * Since hard binding is such a common pattern, it’s provided with a built-
in utility as of ES5, Function.prototype.bind , and it’s used like this:
 * 
 */
function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}
var obj = {
    a: 2
};
var bar = foo.bind(obj);
var b = bar(3); // 2 3
console.log(b); // 5
/**
 * bind(..) returns a new function that is hardcoded to call the original
function with the this context set as you specified. 
 * 
 */
