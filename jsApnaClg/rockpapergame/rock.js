let userCount= 0;
let compCount= 0;
const usrScorePara =document.querySelector("#user-score")
const compScrPara =document.querySelector("#comp-score")

const genCompchoice =()=>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame =()=>{
    msg.innerText ="Game was draw. Play again!" ;
    msg.style.backgroundColor="blue"
}
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userCount++;
        usrScorePara.innerText= userCount;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green"
    }else{
        compCount++;
        compScrPara.innerText = compCount;
        msg.innerText =`You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor ="red"
    }
}
const playGame = (userChoice) =>{
    const compChoice = genCompchoice();
    if(userChoice==compChoice){
        drawGame();
    }else {
        let userWin= true;
        if(userChoice=="rock"){
            //comp-paper,scissors
            userWin =compChoice=== "paper"?false:true;
        }else if(userChoice=="paper"){
            //comp-rock, scissor
            userWin =compChoice==="scissors"?false:true;
        }else {
            userWin =compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
let choices= document.querySelectorAll(".choice");
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>
    {
        let userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
});