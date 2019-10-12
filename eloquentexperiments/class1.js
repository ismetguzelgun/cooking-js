let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };

  function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
  }

  let krab=makeRabbit('killer');

//  console.log(typeof krab);

  function Rabbit(type) {
    this.type = type;
  }
  Rabbit.prototype.speak = function(line) {
    console.log(`The rabbit named ${this.type}  says '${line}'`);
  };
/*  
  let weirdRabbit = new Rabbit("weird");
  weirdRabbit.speak("hello");
*/
  let happyRabbit=new Rabbit("hepi");
  happyRabbit.speak.call(happyRabbit,'naber');

  console.log(Object.getPrototypeOf(Rabbit) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf(happyRabbit) ==
            Function.prototype);
// → false
console.log(Object.getPrototypeOf(happyRabbit) ==
            Rabbit.prototype);