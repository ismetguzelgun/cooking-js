function foo() {
    console.log(this.a);
}
let a = 2;
var b = { a: 9, foo: foo };
b.foo();
foo.apply(b);
(function () {
    "use strict";
    foo(); // 2
})();

function foo2(a) {
    this.a = a;
}
var bar ={a:9};
bar= new foo2(2);
console.log(bar.a); // 2