for (var row=1; row<=10; row++){
  var attempt1row = document.createElement("TR")
  attempt1row.id ="rowId"
  document.getElementById("container").appendChild(attempt1row)
    for (var col=1; col<=10; col++){
      var attempt1col = document.createElement("TD")
      attempt1row.appendChild(attempt1col)
  }
}
