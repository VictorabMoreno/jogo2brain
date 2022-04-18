<?php
session_reset();
 $conexao = mysqli_connect("localhost","root","","sitezin");
 $codigo = $_GET['cod'];
 $teste = $_GET['teste'];

 $sql = "insert into testes (teste, cod) values ('$teste','$codigo')";

 $executar = mysqli_query($conexao,$sql);

 header('location:cadastra_cliente.php');

 

?>
