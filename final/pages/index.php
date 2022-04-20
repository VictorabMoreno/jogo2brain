<!DOCTYPE html>
<html>
<head>
  <title>Joguinho2</title>
  <style>
    #invalid-code {
      color: red;
      display: none;
    }
    #invalid-code::after {
      content: "Código inválido";
    }
  </style>
</head>
<body>
  <h1>Bem vindo ao Joguinho2! O que deseja fazer?</h1>
  <hr>
  <!-- <h2><a href="game-page.php">Jogar:</a></h2> -->

  <form action="./index.php" method="get">
    Insira o código do jogo:
    <input required type="text" maxlength="10" name="sent-code" id="sent-code"> <span id="invalid-code"></span>
    <br>
    <input type="submit" value="Jogar">
  </form>

  <h2><a href="editor.php">Criar um novo jogo</a></h2>
  <script src="../main.js"></script>
</body>
</html>
<?php
    session_start();
    $conexao = mysqli_connect("localhost","root","","joguinho2");

    /* pega o código enviado pelo jogador */
    @$sentCode = $_GET['sent-code'];


    /* Dando select no banco de dados */
    @$selectQuery = "SELECT secretWord FROM `players` WHERE wordPass = '$sentCode'";
    @$row = mysqli_num_rows(mysqli_query($conexao,$selectQuery));

    /* Verificando se existe algum jogo no banco de dados com as informações do select. */
    /* caso exista, o número de linhas é um, caso não exista, zero */
    if(isset($sentCode)) {
      if( $row == 1) {
        $_SESSION['code-session'] = $sentCode;
        header('location:./game-page.php');
        exit();
      }
      else {
        // header('location:./index.php');
        echo "
        <script>
          document.getElementById('invalid-code').style.display = 'inline';
        </script>";
      }
    }
?>