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

  // cria o teclado
  let keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "⌫"],
    ["Z", "X", "C", "V", "B", "N", "M", "Enter"]
  ]

  for (let i = 0; i < keyboard.length; i++){
    let currRow = keyboard[i];
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    for (let j = 0; j < currRow.length; j++) {
      let keyTile = document.createElement("div");

      let key = currRow[j];
      keyTile.innerText = key;
      if (key == "Enter") {
        keyTile.id = "Enter";
      }
      else if (key == "⌫") {
        keyTile.id = "Backspace";
      }
      else if ("A" <= key && key <= "Z") {
        keyTile.id = "Key" + key;
      }
      
      keyTile.addEventListener("click", processKey);

      if (key == "Enter") {
        keyTile.classList.add("enter-key-tile");
      }
      else {
        keyTile.classList.add("key-tile")
      }
      keyboardRow.appendChild(keyTile);
    }
    document.getElementById("keyboard").appendChild(keyboardRow);
  }

  document.addEventListener("keyup", (e) => {
    processInput(e);
  });
}

function processKey() {
  e = {"code" : this.id};
  processInput(e);
}

function processInput(e) {
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
  }
  
  if (!gameOver && row == height) {
    // se o jogador já usou todas as tentativas
    gameOver = true;
    console.log("Jogo fracassado");

    document.getElementById("answer").innerHTML = word; // insere a palavra secreta no html
    setCss(document.getElementById("answer"), "display", "inline");
    setCss(document.getElementById("notify-container"), "visibility", "visible");
  }
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

      let keyTile = document.getElementById("Key" + letter);
      keyTile.classList.remove("present");
      keyTile.classList.add("correct");

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

        let keyTile = document.getElementById("Key" + letter);
        if (!keyTile.classList.contains("correct")) {
          keyTile.classList.add("present");
        }
        letterCount[letter] -= 1;
      }
      else {
        currTile.classList.add("absent");
        let keyTile = document.getElementById("Key" + letter);
        keyTile.classList.add("absent")
      }
    }
  }
  row += 1;
  col = 0;
}