let moves = 9;
let symbol0 = 'X';
let symbolX = 'O';
let matrix = [["cel1", "cel2", "cel3"],
              ["cel4", "cel5", "cel6"],
              ["cel7", "cel8", "cel9"]];

function givingSymobs(cellId) {                                                // atribui casutelor simbolul aferent pe care utilizatorul a dat click
    let cell = document.getElementById(cellId);                               // totodata modific celula matricei cu simbolul aferent
    if (cell.innerHTML === '') {
        if (moves % 2 !== 0) {
            cell.innerHTML = symbol0;
            for (let row = 0; row < matrix.length; ++row) {
                for (let col = 0; col < matrix[row].length; ++col) {
                    if (matrix[row][col] == cellId) {
                        matrix[row][col] = symbol0;
                    }
                }
            }
        } else {
            cell.innerHTML = symbolX;
            for (let row = 0; row < matrix.length; ++row) {
                for (let col = 0; col < matrix[row].length; ++col) {
                    if (matrix[row][col] == cellId) {
                        matrix[row][col] = symbolX;
                    }
                }
            }
         }
    }
    --moves;
    checkLines();
    checkColums();
    mainDiag();
    secondDiag();
}

function checkLines() {
    for(let row = 0; row < matrix.length; ++row) {                                // Verific liniile
        let zeroCount = 0;
        let xCount = 0;
        for (let col = 0; col < matrix[row].length; ++col) {
            if (matrix[row][col] === symbolX) {
                ++xCount;
            } if (matrix[row][col] === symbol0) {
                ++zeroCount;
            }
        }
        if (xCount === 3) {
            document.getElementById("text").innerHTML = "Player 2 won!"
            return;
        } if (zeroCount === 3) {
            document.getElementById("text").innerHTML = "Player 1 won!"
            return;
        }
    }
}

function checkColums() {
    for(let col = 0; col < matrix.length; ++col) {                                  /// verific coloanele
        let zeroCount = 0;
        let xCount = 0;
        for (let row = 0; row < matrix[col].length; ++row) {
            if (matrix[row][col] === symbolX) {
                ++xCount;
            } if (matrix[row][col] === symbol0) {
                ++zeroCount;
            }
        }
        if (xCount === 3) {
            document.getElementById("text").innerHTML = "Player 2 won!"
            return;
        } if (zeroCount === 3) {
            document.getElementById("text").innerHTML = "Player 1 won!"
            return;
        }
    }
}

function mainDiag() {
    let zeroCount = 0;
    let xCount = 0;
    for(let row = 0; row < matrix.length; ++row) {                                  /// verific diagonala principala
        if (matrix[row][row] === symbolX) {
            ++xCount;
        } if (matrix[row][row] === symbol0) {
            ++zeroCount;
        }
    }
    if (xCount === 3) {
         document.getElementById("text").innerHTML = "Player 2 won!"
        return;
    } if (zeroCount === 3) {
        document.getElementById("text").innerHTML = "Player 1 won!"
        return;
    }
}

function secondDiag() {
    let zeroCount = 0;
    let xCount = 0;
    for(let row = 0; row < matrix.length; ++row) {                                  /// verific diagonala secundara
        if (matrix[row][(matrix.length - 1) - row] === symbolX) {
            ++xCount;
        } if (matrix[row][(matrix.length - 1) - row] === symbol0) {
            ++zeroCount;
        }
    }
    if (xCount === 3) {
        document.getElementById("text").innerHTML = "Player 2 won!"
        return;
    } if (zeroCount === 3) {
        document.getElementById("text").innerHTML = "Player 1 won!"
        return;
    }
}

function resetGame() {                                                            /// buton de resetare a jocului
    location.reload(); 
}
