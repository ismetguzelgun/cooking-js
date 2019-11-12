function Foo() {
    // ...
}
Foo.prototype.constructor === Foo; // true
var a = new Foo();
console.log(typeof Foo);
console.log(a.constructor === Foo); // true
function NothingSpecial() {
    console.log("Don't mind me!");
}
var a = new NothingSpecial();
// "Don't mind me!"
a; // {}

function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function () {
    return this.name;
};
var a = new Foo("a");
var b = new Foo("b");
console.log(a.myName()); // "a"
console.log(b.myName()); // "b"