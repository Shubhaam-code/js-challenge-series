// typically ek function ke andar function

function profilelekaraoo(username,cb){
    setTimeout(()=>{cb({username:username,id:45,age:26})},2000)
}

function saarepost(id,cb){
    setTimeout(()=>{cb({id, posts : ["hello","hey"]})},3000)

}

function savepost(id,cb){
    setTimeout(()=>{cb({id,saveposts:[1,2,3,4]})},4000)
}

profilelekaraoo("shubham",function (profiledata){
    console.log(profiledata)
    saarepost(profiledata.id,function (postdata){
        console.log(postdata)
        savepost(profiledata.id,function(saveid){
            console.log(saveid)
        })
    })
})

