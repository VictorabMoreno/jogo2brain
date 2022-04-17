<?php
session_start();
 $conexao = mysqli_connect("localhost","root","","sitezin");
 $num1 = $_GET['login'];

$sql = "select * from testes where cod = '$num1'";
$executar = mysqli_query($conexao,$sql);
$row = mysqli_num_rows($executar);

 if($row == 1) {
     $_SESSION['cod'] = $num1;      
     header('location:dois.php');
     exit();
 }


?>