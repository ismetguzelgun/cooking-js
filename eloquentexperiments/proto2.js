let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
console.log(killerRabbit.hasOwnProperty("type")); 
killerRabbit.type = "killer";
console.log(killerRabbit.hasOwnProperty("type")); 
console.log(killerRabbit.hasOwnProperty("speak")); 
killerRabbit.speak("SKREEEE!");
killerRabbit.speak=(line)=>{console.log(`The ${this.type} rabbit der ki '${line}'`);};
killerRabbit.speak("SKREEEE!");
console.log(killerRabbit.hasOwnProperty("speak")); 
//deneme

