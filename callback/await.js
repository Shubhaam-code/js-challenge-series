let pr = new Promise(function(res,req){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10)
        if(rn>5) res("resolve with " + rn)
            else req("reject with " + rn)
    },2000)
})

// async or await clear tarika ha promise ke res or rej ko handle karna 


async function abc(){
    try{
        let val = await pr;
        console.log(val)
    }catch(err){
        console.log(err)
    }   
}

abc();