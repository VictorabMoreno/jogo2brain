<html>
  <body>
    <h1>Editor</h1>
    <form action="../send-data.php" method="get">
      Palavra do novo jogo:
      <input required type="text" maxlength="14" name="sent-word" id="sent-word"><br>

      Tentativas do jogador:
      <input required type="number" max="11" name="sent-attempts" id="sent-attempts"><br>

      Código para criar um novo jogo:
      <input required type="text" maxlength="10" name="sent-code" id="sent-code"><br>


      O conteúdo escondido:
      <input type="text" max="620" name="sent-content" id="sent-content"><br>

      Mostrar qual era a palavra no final?
      <label>
        <input type="radio" name="show-secret-word" id="show-word-y" value="1" checked >
        Sim
      </label>
      <label>
        <input type="radio" name="show-secret-word" id="show-word-n" value="0" >
        Não
      </label>
      <br>
      
      <input type="submit" value="Enviar">

    </form>
    <script src="../main.js"></script>
  </body>
</html>