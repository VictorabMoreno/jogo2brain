<!DOCTYPE html>
<body>
  <?php
    session_start();

    /* busca a palavra secreta no banco de dados */
    $conexao = mysqli_connect("localhost","root","","sitezin");
    $codigo = $_SESSION['cod'];
    $consulta = mysqli_query($conexao, "SELECT teste FROM testes WHERE cod = $codigo");
    $usuario = mysqli_fetch_object($consulta);
    $palavraSecreta = $usuario->teste;

    /* delcara a palavra secreta na variável js para enviar ao jogo */
    echo "<script> var word = '$palavraSecreta' </script>";
  ?>
</body>
</html>