let func=(x)=>{
    let inner=(y)=>{return x*y};
    return inner;
};

let var1=func(5);
console.log("var1:",var1(2));

let var2=func(8);

console.log("var2:",var2 );

let var3=var2(7);

console.log("var3:",var3);

function greater(n){
let inner=function func(m){return m>n;}
return inner;
};

let greater10=greater(10);
console.log(greater10(17));

console.log(greater10(7));