var word = "teste".toUpperCase(); // palavra secreta

var height = 4; // número de tentativas do jogo atual (max 14)
var width = word.length; // quantidade de letras da palavra (atribuição automática)

var row = 0; // tentativa atual (linha que o jogador está)
var col = 0; // letra atual (coluna que o jogador está)

var gameOver = false; // se o jogo está ativo

var cssRoot = document.documentElement; // atribuição do elemento root

function setCss(elem, prop, value) {
  // estiliza elementos
  elem.style.setProperty(prop, value);
}
window.onload = function(){
  intialize();
  setCss(cssRoot, '--board-rows', height);
  setCss(cssRoot, '--board-columns', width);
}

function intialize() {
  // cria o quadro
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      // cria a caixa (um span) com o id da posição e atribuindo a classe
      let tile = document.createElement("span");
      tile.id = r.toString() + '-' + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile); // insere a caixa dentro do quadro
    }
  }

  document.addEventListener("keyup", (e) => {
    // pega a tecla pressionada
    if (gameOver) return;
    
    if ("KeyA" <= e.code && e.code <= "KeyZ" || e.code == "Semicolon"){
      // define as teclas permitidas e insere elas na caixa quando a pessoa teclar
      if (col < width) {
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        if (currTile.innerText == "" && e.code != "Semicolon") {
          currTile.innerText = e.code[3];
          col += 1;
        }
        else if (currTile.innerText == "" && e.code == "Semicolon") {
          // especificando o comportamento do ç
          currTile.innerText = "Ç";
          col += 1;
        }
      }
    }
    else if (e.code == "Backspace") {
      // remove a letra do box ao pressionar o backspace
      if (0 < col && col <= width) {
        col -= 1;
      }
      let currTile = document.getElementById(row.toString() + '-' + col.toString());
      currTile.innerText = "";
    }
    else if (e.code == "Enter" && col == width) {
      // envia a tentativa ao pressinar enter
      update();
      row += 1;
      col = 0;
    }
    
    if (!gameOver && row == height) {
      // se o jogador já usou todas as tentativas
      gameOver = true;
      console.log("Jogo fracassado");

      document.getElementById("answer").innerHTML = word; // insere a palavra secreta no html
      setCss(document.getElementById("answer"), "display", "inline");
      setCss(document.getElementById("notify-container"), "visibility", "visible");
    }
  });
}

function update() {
  // atualiza o jogo quando o jogador envia uma tentativa
  let correct = 0; // letras corretas
  let letterCount = {}; // COELHO => {C:1, O:2, E:3, L:4, H:5, O:6}
  for (let i = 0; i < word.length; i++) {
    letter = word[i];
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    }
    else {
      letterCount[letter] = 1;
    }
  }

  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + '-' + c.toString());
    let letter = currTile.innerText;
    let attempts = row + 1;

    if (word[c] == letter) {
      currTile.classList.add("correct");
      correct += 1;
      letterCount[letter] -= 1;
    }
    
    if (correct == width) {
      gameOver = true;
      console.log("Jogo bem-sucedido. Tentativa " + attempts);


      setCss(document.getElementById("win-popup"), "display", "block");
      setTimeout(function() {
        window.location.href = "secret_content.html";
      }, 4200)
    }
  }

  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + '-' + c.toString());
    let letter = currTile.innerText;

    if (!currTile.classList.contains("correct")) {
      if (word.includes(letter) && letterCount[letter] > 0) {
        currTile.classList.add("present");
        letterCount[letter] -= 1;
      }
      else {
        currTile.classList.add("absent");
      }
    }
  }
}