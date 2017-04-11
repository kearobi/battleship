

// For loop to write a table in our html, and assign an id to each cell 1-100


for (var row=0; row<=9; row++) {
  var table = document.getElementById("tableDiv")
  var newRow = table.insertRow(row)
  newRow.id = "row" + row
  for (var col=0; col<=9; col++) {
    var tr = document.getElementById(newRow.id)
    var newCol = tr.insertCell(col)
    newCol.id = "row" + row + " col"  + col
    newCol.setAttribute("onclick", "shootTorpedo(event)")

      }
  }
// an object to store our gameState and game board

 var gameState = {
  board: [
          ["rawr", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""]
        ]
}
// Our global variables
var torpedoCount = 7

// Function to change color of a cell that has been clicked on
//to traverse through a 2d array, we use [][] next to each other, not nested
function shootTorpedo(e){
  var aRow = e.target.id.substring(3,4)
  var aCol = e.target.id.substring(8,9)
  console.log(aRow)
  console.log(aCol)
   if (gameState.board[aRow][aCol] === "") {
     document.getElementById(e.target.id).style.background = "purple";
     }
     else {
      document.getElementById(e.target.id).style.background = "yellow";
     }
   torpedoCount--
   document.getElementById("tries").innerHTML = " Torpedoes Left: " + torpedoCount
 }











//
// function renderBoard(state){
  // var renderedHTML =


// Hint: document.getElementById("myDiv").className = "hit" to set the class of an element called "myDiv"
