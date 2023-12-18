let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let newBtn = document.querySelector("#new-btn");
let reSet = document.querySelector("#btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msgtext");
let gameConatiner = document.querySelector(".gameContainer");
let count = 0;

let playerX = true;

const winPatter = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        
        if(playerX){
            box.innerText = 'O';
            box.classList.add('O');
            playerX = false;
        }else{
            box.innerText = 'X';
            box.classList.add('X');
            playerX = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.innerHTML = "";
        box.classList.remove('X');
        box.classList.remove('O');
        box.disabled = false;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congradulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameConatiner.classList.add("hide");
    disableBoxes();
}
const showDraw = () => {
    msg.innerText = `The Game is Draw`;
    msgContainer.classList.remove("hide");
    gameConatiner.classList.add("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatter){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
        }else if(count === 9){
            showDraw();
            count = 0;
        }   
    }
    
}
}
const resetGame = () =>{
    playerX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    gameConatiner.classList.remove("hide");
}



newBtn.addEventListener('click',resetGame);
reSet.addEventListener('click',resetGame);