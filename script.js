// let myHiddenFunc=()=>{
//    nav_hidden.classList.toggle("hidden")
    
// }

function myFunc(){
    let myDiv = document.getElementById("hidden-nav")

    if(myDiv.style.display === "block"){
       myDiv.style.display = "none"
    } else{
     myDiv.style.display = "block"   
    }
}


let header = document.getElementById("header-top");
function mybtnfunc(){
   header.classList.toggle('hidden')
   
 
}


