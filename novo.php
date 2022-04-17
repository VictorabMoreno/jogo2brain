<?php
session_start();
 $conexao = mysqli_connect("localhost","root","","sitezin");
 $codigo = $_GET['cod'];
 $teste = $_GET['teste']; 
 $_SESSION['cod'] == $codigo;
 $_SESSION['senha'] == $teste;

 $sql = "update testes set teste = '$teste' where cod = '$codigo'";

 $executar = mysqli_query($conexao,$sql);

?>
