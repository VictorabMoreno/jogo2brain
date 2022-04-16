var word = "celular".toUpperCase(); // seta qual é a palavra deixando-a em caixa alta
var height = 2; // número de tentativas do jogo atual            | acima de 14 tentativas fica ruim enxergar

var letterCount = word.length;
var width = letterCount; // quantidade de letras da palavra      | acima de 14 letras fica ruim enxergar

var CssRoot = document.documentElement;
CssRoot.style.setProperty('--board-rows', height);
CssRoot.style.setProperty('--board-columns', width);

var row = 0; // tentativa atual (linha que o jogador está)
var col = 0; // letra atual (coluna que o jogador está)

var gameOver = false;

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

  // pega a tecla pressionada
  document.addEventListener("keyup", (e) => {
    if (gameOver) return;
    
    if ("KeyA" <= e.code && e.code <= "KeyZ" || e.code == "Semicolon"){
      if (col < width) {
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        if (currTile.innerText == "" && e.code != "Semicolon") {
          currTile.innerText = e.code[3];
          col += 1;
        }
        else if (currTile.innerText == "" && e.code == "Semicolon") {
          currTile.innerText = "Ç";
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
    else if (e.code == "Enter" && col == width) {
      update();
      row += 1;
      col = 0;
    }
    
    if (!gameOver && row == height) {
      gameOver = true;
      document.getElementById("answer").innerHTML = word;
      document.getElementById("notify-container").style.setProperty("display", "flex");
    }
  });
  
}

function update() {
  let correct = 0;
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + '-' + c.toString());
    let letter = currTile.innerText;

    if (word[c] == letter) {
      currTile.classList.add("correct");
      correct += 1;
    }
    else if (word.includes(letter)) {
      currTile.classList.add("present");
    }
    else {
      currTile.classList.add("absent");
    }
    
    if (correct == width) {
      gameOver = true;
    }
  }
}