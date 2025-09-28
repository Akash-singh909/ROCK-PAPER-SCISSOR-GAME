let userScore = 0;
let  compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara= document.querySelector("#comp-score"); 

//Computer's Choices:
const genCompChoice = () => {
     const Option = ["rock","paper","scissors"];
     const randomIdx = Math.floor(Math.random() * 3);
     return Option[randomIdx];
};

//userChoice:
choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
       const  userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
 
//drawFunctions
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = " game was draw! Play Again."
    msg.style.backgroundColor = "#081b31"
};

// PlayGame Functions:
const playGame = (userChoice) => { 
    console.log("userChoice =", userChoice);
    //to Generate Computer Choice -> modular
    const CompChoice = genCompChoice();
    console.log("compchoice =", CompChoice);

    if (userChoice === CompChoice) {
        //drawGame
         drawGame();
   }   else {
       let userwin = true;
       if (userChoice === "rock") {
          userwin = CompChoice === "paper" ? false : true;
       } else if  (userChoice === "paper") {
          userwin = CompChoice === "scissors" ? false : true;;
       } else {
          userwin = CompChoice === "rock" ? false : true;
       }
           showWinner(userwin, userChoice, CompChoice);
    };
};

 const showWinner = (userwin, userChoice, CompChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose. ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
 };
