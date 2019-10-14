

function foo() {//"use strict";
    console.log( this.bar );
    };
var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
    };

var obj2 = {
    bar: "obj2"
    };

foo();

obj1.foo();

foo.call(obj2);

new foo();

/**
 * There are four rules for how this gets set, and they’re shown in
those last four lines of that snippet:
1. foo() ends up setting this to the global object in non-strict
mode—in strict mode, this would be undefined and you’d get
an error in accessing the bar property—so "global" is the value
found for this.bar .
2. obj1.foo() sets this to the obj1 object.
3. foo.call(obj2) sets this to the obj2 object.
4. new foo() sets this to a brand new empty object.
 * 
 */