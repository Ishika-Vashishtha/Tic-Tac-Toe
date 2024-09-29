let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let hidemsg = document.querySelector(".hidemsg");

let turnO = true ;// playerX , playerO

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    true0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//     });
// });
let count = 0;

boxes.forEach(box => {
    box.addEventListener("click", () =>{
    console.log("box was clicked"); 
    console.log(count++) ;

      if(turnO){
        box.innerText = "O";
        box.style.color = "orange"; 
        turnO = false;
      }
      else{
        box.innerText = 'X';
        box.style.color = "green"; 
        turnO = true;
      }
      box.disabled = true;
        
      if(count == 9){
         draw();
       }
      checkWinner();

    // if(isGame){
    //     checkWinner();
    // }
    // if(isGame == false){
    //     draw();
    // }
    })
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        count = 0;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        count = 0;

    }
}

const showWinner = (winner) => {
     msg.innerText = `Congratulations, Winner is ${winner}`;
    //  hidemsg.classList.remove("hidemsg");
     msgContainer.classList.remove("hide");
     disableBoxes();
}

const noWinner = () => {
    msg.innerText = "Sorry Its a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//let isGame =true; 
// let count = 0;

const checkWinner = () => {
    for(let pattern of winPatterns){
    //   console.log(pattern[0], pattern[1], pattern[2]);
    //   console.log(
    //     boxes[pattern[0]].innerText, 
    //     boxes[pattern[1]].innerText, 
    //     boxes[pattern[2]].innerText
    // );
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if(posVal1 != "" && posVal2 != "", posVal3!= ""){ 
        if(posVal1 === posVal2 && posVal2 === posVal3){
                 console.log(`Winner is ${posVal1}`);
                 showWinner(posVal1);
                //  isGame = true;
            }
            // else{
            //     isGame = false;
            // }
        }   
    }
};

 const draw = () => {
    //  if(isGame == false){
         noWinner();
         isGame = true;
    //  }
 }

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);





