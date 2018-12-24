document.addEventListener('DOMContentLoaded', startGame);


// Define your `board` object here!
var board = {
  cells: generateCells(5)
  
  }
 
 // Creates an array of cells 
 function generateCells (size) {
 
   var cells = []
 
   for (i = 0; i < size; i++ ) {
 
     for (j = 0; j < size; j++){
         cell = {
                row: i,
                col: j,
                isMine : Math.random() < 0.2,
                isMarked: false,
                hidden : true,
         }
 
       cells.push(cell)
     }
   }
 
   return cells
 }


function startGame () { 

//Function to find number of mines around a cell   
  for (var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines= surroundingMines(board.cells[i]);
   }
  
  function surroundingMines (cell) {
    // surrounding cells function from lib.js
    var surrounding = lib.getSurroundingCells(cell.row, cell.col)
    var count = 0
    for(var i = 0; i < surrounding.length; i++){
          if (surrounding[i].isMine) {
          count++
          }
        }
      return count;
    }
    document.addEventListener("click", checkForWin);
    document.addEventListener("contextmenu", checkForWin);
  
    lib.initBoard()
 
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let counter = 0;
  for (i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine === true && board.cells[i].hidden === false) || (board.cells[i].isMine === true && board.cells[i].isMarked === true)) {
    counter++;
    }
  }
  console.log(counter);
  if (counter === board.cells.length) {
    lib.displayMessage('You win!');
  }	
}
}
	

