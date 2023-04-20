const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;
let boxes = Array.from(document.getElementsByClassName("box"));
let array = Array(9).fill(null);

for (let box of boxes) {
    box.addEventListener('click', boxClicked);
    
}

function boxClicked(e){
    const id = e.target.id;
    if(!array[id]) {
        array[id] = currentPlayer;
        e.target.innerText = currentPlayer; 
        if(playerWon()) {
            const myImage = new Image(400, 600);
            myImage.src = "winner.jpg";
            messageWinner.innerHTML = `${currentPlayer} has won!🎉`;
            document.body.appendChild(myImage);
            e.target.disabled = true;            
        }          
        currentPlayer = currentPlayer == playerX ? playerO : playerX;       
    }

}

function playerWon(){
    if(array[0] === currentPlayer){
        if(array[1] === currentPlayer && array[2] == currentPlayer) {
            disableTable();
            return true;
        }
        if(array[3] === currentPlayer && array[6] == currentPlayer) {
            disableTable();
            return true;
        }
        if(array[4] === currentPlayer && array[8] == currentPlayer) {
            disableTable();
            return true;
        }
    }
    if(array[8] === currentPlayer){
        if(array[2] === currentPlayer && array[5] == currentPlayer) {
            disableTable();
            return true;
        }
        if(array[7] === currentPlayer && array[6] == currentPlayer) {
            disableTable();
            return true;
        }
    }
    if(array[4] === currentPlayer){
        if(array[1] === currentPlayer && array[7] == currentPlayer) {
            disableTable();
            return true;
        }
        if(array[2] === currentPlayer && array[6] == currentPlayer) {
            disableTable();
            return true;
        }
        if(array[3] === currentPlayer && array[5] == currentPlayer) {
            disableTable();
            return true;
        }
    }
}

function disableTable() {
    for (let box of boxes) {
        box.removeEventListener('click', boxClicked);  
    }
}

function resetGame() {
    location.reload();
}