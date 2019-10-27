function foo() {
    console.log(this.a);
}
var obj = {
    a: 2
};
foo.call(obj); // 2

/**
 * If you pass a simple primitive value (of type string , boolean , or num
ber ) as the this binding, the primitive value is wrapped in its object-
form ( new String(..) , new Boolean(..) , or new Number(..) , re‐
spectively). This is often referred to as “boxing.”
 *
 *
 */