function Foo() { /* .. */ }
Foo.prototype = { /* .. */ }; // create a new prototype object
Object.defineProperty(Foo.prototype, "constructor",{
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo // point `.constructor` at `Foo`
});//add constructor
var a1 = new Foo();
console.log(Foo.prototype.constructor === Foo); // false!
console.log(a1.constructor === Foo); // true!



