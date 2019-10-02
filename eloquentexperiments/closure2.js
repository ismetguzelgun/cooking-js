function multiplier(factor) {
       
    console.log("factor:",factor);
    
    let dd=(number)=>{ return number*factor};
    
    return dd;
    //eturn dd();
    }

    let twice = multiplier(2);
    
    //console.log(twice);
    
    let third=multiplier(twice(5));

    let q=multiplier(7);


//--------------------------------------------------------------------


function multiplier(factor) {
       
    console.log("factor:",factor);
    
    //let dd=(number)=>{ return number*factor};
    
    return number=> number*factor;
    //eturn dd();
    }

    let twice = multiplier(2);
    
    //console.log(twice);
    
    let third=multiplier(twice(5));

    let q=multiplier(7);




    //onsole.log(third(3));

    //twice=7;
    
    //console.log(twice);
    

    //console.log(twice(5));