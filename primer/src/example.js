
//Eger fonksiyon named fonksiyon ise bile default ile beraber kullanırken import edilen yerde istenilen isim verilebilir
//import istenilen_isim from "./sum"
//Eger default kullanılmıyorsa isim vermek zorundayız ve verdigimiz ismi import edilen yerde curly braces {}
//Eger farklı moduller aynı isimde feature export ediyor ise as keyword ile birinin ismini degistirebiliriz
//import { multiply, subtract as deduct } from "./operations"

import additionFunction,{sumValues} from "./sum";
import {multiply,subtract} from "./operations";
import { asyncAdd as ekle,asyncAddPt as ekleTest } from "./async";
console.log('Hello')
console.log('Apples')
console.log('This is a statement')
console.log('This is also a statement')

const myFunc = function () {
  console.log('This statement is inside the function')
}
console.log('This statement is outside the function')
myFunc()

function myFunc2 (name, weather) {
  console.log('Hello ' + name + '.')
  console.log('It is ' + weather + ' today.')
}
myFunc2('Adam', 'sunny')

function myFunc3 (name, weather = 'raining') {
  console.log('Hello ' + name + '.')
  console.log('It is ' + weather + ' today.')
}
myFunc3('Adam')

function myFunc4 (name, weather = 'raining', ...extraParam) {
  console.log('Hello ' + name + '.')
  console.log('It is ' + weather + ' today.')
  for (let i = 0; i < extraParam.length; i++) {
    console.log('parameters: ' + extraParam[i])
  }
}
myFunc4('Adam', 'one', 'two')

const myFunc5 = nameFunction => 'Hello ' + nameFunction() + '.'
const printName = (nameFunction, printFunction) =>
  printFunction(myFunc5(nameFunction))
// printName(function () { return "Adam" }, console.log);
printName(() => 'adam', console.log)

let products = [
  { name: 'Hat', price: 24.5, stock: 10 },
  { name: 'Kayak', price: 289.99, stock: 1 },
  { name: 'Soccer Ball', price: 10, stock: 0 },
  { name: 'Running Shoes', price: 116.5, stock: 20 }
]
let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + item.price * item.stock, 0)
console.log(`Total value: $${totalValue.toFixed(2)}`)

let myData = {
  name: 'Adam',
  weather: 'sunny',
  printMessages: function () {
    console.log(`Hello ${this.name}.`)
    console.log(`Today is ${this.weather}.`)
  }
}
myData.printMessages();

class MyClassData {
    constructor() {
        this.name = "Adam";
        this.weather = "funny";
    }
    printMessages = () => {
        console.log(`Hello ${this.name}.`);
        console.log(`Today is ${this.weather}.`);
    }
};

let data=new MyClassData();

data.printMessages();
let values = [10, 20, 30, 40, 50];
let total=additionFunction(values);

console.log(`Total: ${total}`);

let values2 = [10, 20, 30, 40, 60];
let total2=sumValues(values2);

console.log(`Total: ${total2}`);

console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);


let total3= ekleTest(values);
console.log(`MainPt Total: ${total3}`);


ekle(values).then(total => console.log(`Main2 Total: ${total}`));