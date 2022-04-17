<?php
session_reset();
 $conexao = mysqli_connect("localhost","root","","sitezin");
 $codigo = $_GET['cod'];

 $sql = "insert into testes ( cod) values ('$codigo')";

 $executar = mysqli_query($conexao,$sql);

 header('location:cadastra_cliente.php');

?>
