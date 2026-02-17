const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");
const modeBtn = document.getElementById("mode");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;
let vsAI = false;

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach(cell => cell.addEventListener("click", cellClick));
resetBtn.addEventListener("click", resetGame);
modeBtn.addEventListener("click", toggleMode);

function cellClick(){
    const index = this.getAttribute("data-index");

    if(board[index] !== "" || !running) return;

    updateCell(this, index);
    checkWinner();

    if(vsAI && running && currentPlayer === "O"){
        aiMove();
    }
}

function updateCell(cell, index){
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWinner(){
    let roundWon = false;

    for(let pattern of winPatterns){
        const [a,b,c] = pattern;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        running = false;
        return;
    }

    if(!board.includes("")){
        statusText.textContent = "Draw!";
        running = false;
        return;
    }

    changePlayer();
}

function resetGame(){
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    running = true;
    statusText.textContent = "Player X's Turn";
    cells.forEach(cell => cell.textContent = "");
}

function toggleMode(){
    vsAI = !vsAI;
    modeBtn.textContent = vsAI ? "Play 2 Player" : "Play vs AI";
    resetGame();
}

function aiMove(){
    let emptyCells = board
        .map((value, index) => value === "" ? index : null)
        .filter(val => val !== null);

    if(emptyCells.length === 0) return;

    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    board[randomIndex] = "O";
    cells[randomIndex].textContent = "O";
    checkWinner();
}
