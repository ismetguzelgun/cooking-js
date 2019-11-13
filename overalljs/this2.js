// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: 'Custom' };

// This property is set on the global object
var a = 'Global';

function whatsThis() {
    return this.a;  // The value of this is dependent on how the function is called
}

console.log(whatsThis());          // 'Global'
console.log(whatsThis.call(a));  // 'Custom'
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom'

function f() {
    return this.a;
}

var g = f.bind({ c: 'azerty' });
console.log(g()); // azerty

var o = { f: function () { return this.a + this.b; } };
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
console.log(o.f()); // NaN

////
function C() {
    this.a = 37;
}

var o = new C();
console.log(o.a); // 37


function C2() {
    this.a = 37;
    return { a: 38 };
}

o = new C2();
console.log(o.a); // 38