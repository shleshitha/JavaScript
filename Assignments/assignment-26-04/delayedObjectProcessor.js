const items = [
    { name: "Alpha", process: function() { console.log(`Processing: ${this.name}`); } },
    { name: "Beta", process: function() { console.log(`Task for ${this.name} done.`); } }
];

function processObjectsDelayed (items,time){
    for(let i=0;i<items.length;i++){
        setTimeout(()=>{
            items[i].process();
        },time*i)
    }
    // items.forEach((item,index) => {
    //     setTimeout(()=>{
    //         item.process();
    //     },time*index)
    // });
}
processObjectsDelayed(items,1000);