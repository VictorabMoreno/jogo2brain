<html>
  <body>
    <h1>Editor</h1>
    <form action="../send-data.php" method="get">
      Palavra do novo jogo:
      <input bla="required" type="text" maxlength="14" name="sent-word" id="sent-word"><br>
      Código para criar um novo jogo:
      <input required type="text" maxlength="10" name="sent-code" id="sent-code"><br>
      Tentativas do jogador:
      <input bla="required" type="number" max="14" name="sent-attempts" id="sent-attempts"><br>
      <input type="submit" value="Enviar">

    </form>
    <script src="../main.js"></script>
  </body>
</html>