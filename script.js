//Module For Game Board
//maybe add a foreach loop here to have user change size?
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board};
})();

//Create Players
const player = (name, symbol) => {
    return {name, symbol}
};

const player1 = player("Player1", "X");
const player2 = player("Player2", "O");

//Game Logic
const playGame = (() => {
    const {board} = gameBoard;
    let symbol = '';
    let winningPlayer = '';

    const move = (e) => {
        const targetArrayIndex = board[`${e.target.id}`];
        if (symbol == '') {
            symbol = player1.symbol 
        }
    }

    //function to check the winner
    function checkWinner() {
        if(board[0] === board[1] && board[1]=== board[2] && board[0] !== '') {
            removeClick();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }

        if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
            removeClick();
            winner.textContent =`${winningPlayer} Wins!`;
            symbol = '';
            return
        }

        if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
            removeClick();
            winner.textContent =`${winningPlayer} Wins!`;
            symbol = '';
            return
        }

        if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
            removeClick();
            winner.textContent =`${winningPlayer} Wins!`;
            symbol = '';
            return
        }

        if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
            removeClick();
            winner.textContent =`${winningPlayer} Wins!`;
            symbol = '';
            return
        }

        if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
            removeClick();
            winner.textContent =`${winningPlayer} Wins!`;
            symbol = '';
            return
        }

        if (board[0] === board[4] && board[4] === board[8] && board[8] !== '') {
            removeClick();
            winner.textContent =`${winningPlayer} Wins!`;
            symbol = '';
            return
        }

        if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
            removeClick();
            winner.textContent =`${winningPlayer} Wins!`;
            symbol = '';
            return
        }

        if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
            winner.textContent = 'Draw!'
        }
    }

    //remove moves
    const spots = Array.from(document.getElementsByClassName('cell'));

    function removeClick() {
        spots.forEach((cell) => cell.removeEventListener('click', move));
    }

    //add moves
    function addClick() {
        spots.forEach((cell) => cell.addEventListener('click', move));
    }

    addClick();

    return{addClick}
})();

//DOM Manipulation and GUI For HTML