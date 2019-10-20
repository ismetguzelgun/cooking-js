//v1
a = 2;
var a;
console.log( a );

//v1 changes into
var a;
a = 2;
console.log( a );

//v2
console.log( a );
var a = 2;

//v2 changes into
var a;
console.log( a );
a = 2;

//v1 vs. v2
/**
 * JS sadece deklarasyonları yukarı taşıyor
 * yani birinci örnekte  var a, a=2 nin üzerine taşınıyor
 * fakat console.log yerinde kalıyor bu sayede kod çalışıyor
 * 
 * v2 örneğinde ise var a yukarı taşınırken
 * hemen altında yer alan console.log yukarı taşınmadığı için undefined yazdırıyor.
 * sonrasında ancak 2 değerini a ya atayabiliyor.
 * https://www.freecodecamp.org/news/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d/
 */
