/*in other words, an LHS look-up is done when a variable appears on
the lefthand side of an assignment operation, and an RHS look-up is
done when a variable appears on the righthand side of an assignment
operation.
Actually, let’s be a little more precise. An RHS look-up is indistin‐
guishable, for our purposes, from simply a look-up of the value of some
variable, whereas the LHS look-up is trying to find the variable con‐
tainer itself, so that it can assign. In this way, RHS doesn’t really mean
“righthand side of an assignment” per se, it just, more accurately,
means “not lefthand side”.

When I say:
console.log( a );
The reference to a is an RHS reference, because nothing is being as‐
signed to a here. Instead, we’re looking up to retrieve the value of a ,
so that the value can be passed to console.log(..) .
*/

//ex1
function foo(a) {
    console.log(a + b);
    b = a;
}
//foo( 2 );

//ex2
function foo(a) {
    var b = a * 2;
    //var c =7;
    function bar(c) {
        console.log(a, b, c);
    }
    bar(b * 3);
}
foo(2);
//ex3
function foo(a) {
    var b = 2;
    // some code
    function bar() {
        // ...
    }
    // more code
    var c = 3;
}        