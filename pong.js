const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-btn');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

function handleCellClick(event) {
    const cellIndex = event.target.id.split('-')[1];
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        const winner = checkWinner();

        if (winner) {
            message.textContent = `${winner} ha ganado!`;
            cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
        } else if (!gameBoard.includes('')) {
            message.textContent = '¡Es un empate!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    message.textContent = '';
    currentPlayer = 'X';
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
