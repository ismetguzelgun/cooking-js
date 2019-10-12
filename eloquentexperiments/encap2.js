function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  let whiteRabbit = {type: "white", speak};
  let hungryRabbit = {type: "hungry", speak};
  
  console.log(typeof whiteRabbit,' ',typeof speak);
  whiteRabbit.speak("Oh my ears and whiskers, " +
                    "how late it's getting!");
  // → The white rabbit says 'Oh my ears and whiskers, how
  //   late it's getting!'
  hungryRabbit.speak("I could use a carrot right now.");
  // → The hungry rabbit says 'I could use a carrot right now.'

  speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'

function normalize() {
    console.log(this.coords.map(n => n / this.length));
  }
  normalize.call({coords: [0, 2, 3], length: 5});

  function norm2(){
   console.log(this.kor.map(
       function func(n){
           let dod=n/this.length;
           return dod;
       }
   ));; 
  };

  norm2.call({kor: [0, 2, 3], length: 5});
/*let coords= [0, 5, 3];
  function normalize2() {
    console.log(this.coords.map(n => n / this.length));
  }
  normalize2.call(coords, 5);*/