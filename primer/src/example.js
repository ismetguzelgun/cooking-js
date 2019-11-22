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
  for (let i = 0; i < extraParam.length; i++) { console.log('parameters: ' + extraParam[i]) }
}
myFunc4('Adam', 'one', 'two')

const myFunc5 = nameFunction => 'Hello ' + nameFunction() + '.'
const printName = (nameFunction, printFunction) =>
  printFunction(myFunc5(nameFunction))
// printName(function () { return "Adam" }, console.log);
printName(() => 'adam', console.log)
