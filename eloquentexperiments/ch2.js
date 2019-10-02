let size=8;
let dim="";

for(i=0;i<size;i++){
    dim="";
for(j=0;j<size;j++){
    if(i%2===0){
    if(j%2===0)
    dim=dim+" ";
    else if(j%2===1)
    dim=dim+"#";
    }
    else if(i%2===1)
    {
        if(j%2===1)
        dim=dim+" ";
        else if(j%2===0)
        dim=dim+"#";
    }       
}
console.log(dim);
}
