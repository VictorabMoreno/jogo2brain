var height = 6; // número de tentativas
var width = 8; // quantidade de letras da palavra

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

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ"){
      if (col < width) {
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        if (currTile.innerText == "") {
          currTile.innerText = e.code[3];
          col += 1;
        }
      }
    }
  });




}

