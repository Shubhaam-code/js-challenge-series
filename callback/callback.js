// function kuchdair(val){
//     setTimeout(()=>{
//         console.log(val),2000
//     })
// }

// kuchdair(5)

//CALL BACK - jo function ke andar paramter function leta ha usko hi callback function bolte ha

function kuchdair(fnc){
    setTimeout(fnc,2000)
}

kuchdair(function (){
    console.log("hello")
})
