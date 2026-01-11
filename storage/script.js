
//store data
localStorage.setItem("name","shubham")
//update data
localStorage.setItem("name","shivam")

//get data
let lc = localStorage.getItem("name")
console.log(lc)
//remove data
localStorage.removeItem("name")


localStorage.setItem("friends",JSON.stringify(["shubham","shivam","amrit"]))

let pc=JSON.parse(localStorage.getItem("friends"))
console.log(pc)


//cookie setup

document.cookie("name=shubham")
