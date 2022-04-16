var height = 6; // número de tentativas do jogo atual  | acima de 14 tentativas fica ruim enxergar
var width = 5; // quantidade de letras da palavra      | acima de 14 letras fica ruim enxergar

var root = document.documentElement;
root.style.setProperty('--board-rows', height);
root.style.setProperty('--board-columns', width);


var row = 0; // tentativa atual (linha que o jogador está)
var col = 0; // letra atual (coluna que o jogador está)


var gameOver = false;
var word = "PERNA";

window.onload = function(){
  intialize();
}

function intialize() {
  // cria o quadro
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      // cria o span com o id da posição + classe
      let tile = document.createElement("span");
      tile.id = r.toString() + '-' + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }

  // pega a telca pressionada
  document.addEventListener("keyup", (e) => {
    if (gameOver) return;
    
    if ("KeyA" <= e.code && e.code <= "KeyZ"){
      if (col < width) {
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        if (currTile.innerText == "") {
          currTile.innerText = e.code[3];
          col += 1;
        }
      }
    }
    else if (e.code == "Backspace") {
      if (0 < col && col <= width) {
        col -= 1;
      }
      let currTile = document.getElementById(row.toString() + '-' + col.toString());
      currTile.innerText = "";
    }
  });




}
