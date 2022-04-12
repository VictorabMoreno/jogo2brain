<?php
 session_start();

$conexao = mysqli_connect("localhost","root","","valcup");

if(empty($_GET['nick']) || empty($_GET['senha'])) {
    header('location: acesso.php');
    exit();
}

$usuario = mysqli_real_escape_string($conexao, $_GET['nick']);
$senha = mysqli_real_escape_string($conexao, $_GET['senha']);

$query= "SELECT * FROM jogadores WHERE nick = '$usuario' and senha = '$senha'";

$result = mysqli_query($conexao, $query);
$row = mysqli_num_rows($result);
if($row == 1) {
    $_SESSION['nick'] = $usuario;
    header('location: home.php');
    exit();
}

else {
    header('location: acesso.php');
}
?>
