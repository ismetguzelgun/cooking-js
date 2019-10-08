function repeat(n,action){
//for (let i in n)
for(let i=0;i<n;i++)
    action(i);
};

repeat(5,console.log);

let labels = [];
repeat(5, i => { labels.push(`Unit ${i + 1}`);
});
console.log("arrow try:",labels);

repeat(5, (j)=> { 
    labels.push(`Unit ${j + 1}`);
    console.log("hello");
}
);
console.log("arrow try2:",labels);