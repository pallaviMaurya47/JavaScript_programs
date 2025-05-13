// ex-1 . create a  new button element . Give it the text of " Click me" with background color - red & text color is white . 
// Insert the button as the first element inside the body tag

let newBtn = document.createElement("Button");
 newBtn.innerText = "Click me!";
// newBtn.style.backgroundColor= "Red";
// newBtn.style.color ="white";
 document.querySelector("body").prepend(newBtn)

// export.2- Create a <p></p> tag in html , give it a class & some styling. Now create new class in css & append this class in <p></p>element(overwrite the class)

// let paragrph =document.querySelector("p");
// let get =paragrph.getAttribute("class");
// console.log(get);
//paragrph.setAttribute("class","new-class");   //overwrite == to set newer class completely in place of other class
//classList- add("class"), remove()

// paragrph.classList.add("new-class")


//Events in js= onmouseover, onclick, ondblclick
newBtn.onclick = (evt) =>{
    console.log(evt);
     console.log(evt.type);
     console.log(evt.target);
    // console.log(evt.clientX,evt.clientY)
}