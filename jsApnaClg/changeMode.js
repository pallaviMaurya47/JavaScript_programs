let btn =document.querySelector("button");
let body =document.querySelector("body");

btn.style.backgroundColor ="green" ;
btn.style.color ="yellow";

let currmode= "light";
btn.addEventListener("click",()=> {
    if(currmode=="light"){
        //console.log("dark");
        currmode ="dark"
        body.classList.add("dark");
        body.classList.remove("light")
    }else {
         currmode ="light" ;
         body.classList.add("light");
         body.classList.remove("dark")
    }
    console.log(currmode)
})