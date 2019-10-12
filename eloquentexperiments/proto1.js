let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null


console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);

            let protoRabbit = {
                speak(line) {
                  console.log(`The ${this.type} rabbit says '${line}'`);
                }
              };
              let killerRabbit = Object.create(protoRabbit);
              killerRabbit.type = "killer";
              killerRabbit.speak("SKREEEE!");
console.log(typeof protoRabbit.speak);