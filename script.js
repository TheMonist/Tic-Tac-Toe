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

//DOM Manipulation and GUI For HTML