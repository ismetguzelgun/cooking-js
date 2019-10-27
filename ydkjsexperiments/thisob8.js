/*function foo(something) {
    this.a = something;
}
var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2
var baz = new bar(3);

console.log(obj1.a); // 2

console.log(baz.a); // 3
*/
function foo(p1,p2) {
    this.val = p1 + p2;
    }
    // using `null` here because we don't care about
    // the `this` hard-binding in this scenario, and
    // it will be overridden by the `new` call anyway!
    var bar = foo.bind( null, "p1" );
    var baz = new bar( "p2" );
    baz.val; // p1p2