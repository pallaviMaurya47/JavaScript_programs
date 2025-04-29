//variables in 2015= var
// now let(can be updated but can't be re arranged) and const(can't be updated) b=4  => should have intializer
/*let str= "hello" // not need to be declared datatype 
  
//dynamic lang= no datatype declare - 7 primitive: number string null(object) boolean 

console.log(str)

const profile ={
    userName : "@pallaviMaurya",
    followers:345,
    following:4 ,
    posts:2

}

console.log(profile["followers"]) */

//ternary operator= simpler , compact if else

/*alert("hello user");   //one time pop up

let num = prompt("Enter a number: ");      //user input
if (num%5 === 0) {
    console.log(num + " is a multiple of 5");
} else {
    console.log(num + " is not a multiple of 5");
} */



/* let i=2;
do {
    console.log(i);
    i++;

} while(i<=5); */

 /* for of , loop for string & arrays' items
 let name = "Pallavi";

 for(let i of name){
    console.log("i= " + i);
 } */


/*    for in ; for objects

const student ={
    name : "pallavi",
    roll_no : 15,
    branch : "cse",
    college : "aimt"

}

for (let key in student){
    console.log(
        "key =" , key, ", value= " , student[key]
    )
} */


/*template literals

let str= `This is a javascript program`;  //back tag
console.log(str);

const zipto ={
    item: "toy" ,
    price: 400
}
let tempstr= `The price of ${zipto.item} is ${zipto.price} rupees.`  =>string interpolation
console.log(tempstr);

//string methods- slice() , toUppercase, str.replace("m","o"), indexOf, str.charAt(index)
string in js= immutble,  array= mutable

str="hello\n next line\t tab-space"
str.trim(to trim in "starting & ending space, not in middle space")

*/

let arr= [2,3,4,5]       //to print square of each number of array using FOR EACH loop (only for array - higher order function or method)
            /*arr.forEach((va,index,array) =>{
                console.log(`square of ${va} on index${index} is =`,va*va)
            }) */

    const calcSquare= (num) =>{
        console.log(num*num)
    }
    arr.forEach(calcSquare)    //higher order function - foreach
