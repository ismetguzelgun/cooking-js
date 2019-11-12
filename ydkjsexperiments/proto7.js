//this&object p111
var anotherObject = {
    cool: function () {
        console.log("cool!");
    }
};
var myObject = Object.create(anotherObject);
myObject.cool(); // "cool!"
myObject.cool = () => { console.log("not so cool!") };
myObject.cool();//"not so cool!"
anotherObject.cool();// "cool!"

//deneme
function anotherObject2 (val){
    /*cool: {
        type:"constructor",
        value: {
            function() {
                console.log("cool!");
            }
        }
    }*/
    return ()=> {
        this.val;
    };
};

//deneme
/*var yourObject = new anotherObject2();

yourObject.call(()=>{console.log("naber");}); // "cool!"*/
/*
yourObject.cool = () => { console.log("not so cool!") };
yourObject.cool();//"not so cool!"
anotherObject.cool();// "cool!"
*/