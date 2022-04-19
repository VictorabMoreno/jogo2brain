var codeInput = document.getElementById("sent-code"); // pega o input do código
var wordInput = document.getElementById("sent-word"); // pega o input da palavra

if (codeInput != null) {
  textFormat(codeInput);
}
if (wordInput != null) {
  textFormat(wordInput);
}

function textFormat(letterLocal) {

  // transforma o caractere enviado em caixa alta ao soltar a tecla
  letterLocal.addEventListener("keyup", function() {
    letterLocal.value = letterLocal.value.toUpperCase();
  });

  // quando pressionar uma tecla executa a função que verifica se o caractere pressionado é especial
  letterLocal.addEventListener("keypress", function(c) {
    letterLocal.value = letterLocal.value.toUpperCase();
    if(!checkChar(c)) {
      c.preventDefault();
    }
  });

  // verifica se o caractere é um caractere especial (não é uma letra nem um número)
  function checkChar(c) {
    var char = String.fromCharCode(c.keyCode);   
    var stand = '[a-zA-Z]';
    
    // retorna true se não for um caractere especial
    if(char.match(stand)) {
      return true;
    }
  };
}