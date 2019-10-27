function foo() {
    console.log(this.a);
}
function doFoo(fn) {
    // `fn` is just another reference to `foo`
    fn(); // <-- call-site!
}
var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object
doFoo(obj.foo); // "oops, global"

function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};
var a = "oops, global"; // `a` also property on global object
setTimeout(obj.foo, 100); // "oops, global"