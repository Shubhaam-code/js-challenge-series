// sabse pahele hum ek promise bante ha, wo do state me hota ha ya to resolve hota ya to reject hota ha
// dono case ko alag alag handle karte haa


let pr = new Promise(function(res,req){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10)
        if(rn>5) res("resolve with " + rn)
            else req("reject with " + rn)
    },2000)
})

pr
.then(function (value){
    console.log(value)
})
.catch(function (value){
    console.log(value)
})