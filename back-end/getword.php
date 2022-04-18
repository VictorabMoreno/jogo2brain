<?php
session_start();

$word = $_GET['text'];

/* buscando os dados do banco de dados*/
$conexao = mysqli_connect("localhost","root","","sitezin");
$codigo = $_SESSION['cod'];
$consulta = mysqli_query($conexao, "SELECT teste FROM testes WHERE cod = $codigo");
$usuario = mysqli_fetch_object($consulta);
$status = $usuario->teste;

/* validando se a palavra está certa ou não */

if($word == $status) {
    echo "malou";
}

else {
    echo "não malou";
}



?>