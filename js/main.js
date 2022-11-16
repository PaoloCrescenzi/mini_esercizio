let txtList=["piPPo","paPERIno","pLUTO"];


txtList=txtList.map(function(i){
     let newTxt;
     newTxt=i.toLowerCase();
     
     return upper(newTxt);
})

console.log(txtList);

function upper(txt){
    let newtxt;
    newtxt=txt[0].toUpperCase()+txt.slice(1);
    return newtxt;
}


