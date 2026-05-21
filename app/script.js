const puzzle = [
    [5,3,"","",7,"","","",""],
    [6,"","",1,9,5,"","",""],
    ["",9,8,"","","","",6,""],
    [8,"","","",6,"","","",3],
    [4,"","",8,"",3,"","",1],
    [7,"","","",2,"","","",6],
    ["",6,"","","","",2,8,""],
    ["","","",4,1,9,"","",5],
    ["","","","",8,"","",7,9]
];

const solution = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
];

function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = "";

    for(let row=0; row<9; row++) {
        for(let col=0; col<9; col++) {

            const input = document.createElement("input");

            if(puzzle[row][col] !== "") {
                input.value = puzzle[row][col];
                input.disabled = true;
            }

            input.setAttribute("data-row", row);
            input.setAttribute("data-col", col);

            board.appendChild(input);
        }
    }
}

function checkSolution() {
    let correct = true;

    document.querySelectorAll("#board input")
        .forEach(input => {

        const row = input.dataset.row;
        const col = input.dataset.col;

        if(!input.disabled) {
            if(Number(input.value) !== solution[row][col]) {
                correct = false;
            }
        }
    });

    const message = document.getElementById("message");

    if(correct) {
        message.innerText = "Congratulations! Sudoku solved!";
    } else {
        message.innerText = "Incorrect solution. Try again.";
    }
}

function resetBoard() {
    createBoard();
    document.getElementById("message").innerText = "";
}

function newGame() {
    resetBoard();
}

createBoard();
