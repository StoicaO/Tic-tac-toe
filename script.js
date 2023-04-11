const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;
let showText = document.getElementById("showText");
let boxes = Array.from(document.getElementsByClassName("box"));
const array = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e){
    const id = e.target.id;
    if(!array[id]){
        array[id] = currentPlayer;
        e.target.innerText = currentPlayer; 
        if(playerWon()) {
            showText.innerHTML = currentPlayer + " " + "has won!";
        }
        currentPlayer = currentPlayer == playerX ? playerO : playerX
        
    }

}

function playerWon(){
    if(array[0] === currentPlayer){
        if(array[1] === currentPlayer && array[2] == currentPlayer) {
            return true;
        }
        if(array[3] === currentPlayer && array[6] == currentPlayer) {
            return true;
        }
        if(array[4] === currentPlayer && array[8] == currentPlayer) {
            return true;
        }
    }
    if(array[8] === currentPlayer){
        if(array[2] === currentPlayer && array[5] == currentPlayer) {
            return true;
        }
        if(array[7] === currentPlayer && array[6] == currentPlayer) {
            return true;
        }
    }
    if(array[4] === currentPlayer){
        if(array[1] === currentPlayer && array[7] == currentPlayer) {
            return true;
        }
        if(array[2] === currentPlayer && array[6] == currentPlayer) {
            return true;
        }
    }
}

function resetGame() {
    location.reload();
}

startGame();