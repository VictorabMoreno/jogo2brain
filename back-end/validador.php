<?php
session_start();
 $conexao = mysqli_connect("localhost","root","","sitezin");
 $num1 = $_GET['login'];

 /* Dando select no banco de dados */

 $sql = "SELECT * FROM `testes` WHERE cod = '$num1'";
 $executar = mysqli_query($conexao,$sql);
 $row = mysqli_num_rows($executar);

 /* Verificando se existe algum jogo no banco de dados com as informações do select. */
 /* caso exista, o número de linhas é um, caso não exista, zero */

 if($row == 1) {
     $_SESSION['cod'] = $num1;      
     header('location:game.php');
     exit();
 }

 else {
     header('location:login.php');
 }


?>