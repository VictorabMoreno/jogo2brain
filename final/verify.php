<?php
    session_start();
    $conexao = mysqli_connect("localhost","root","","sitezin");

    /* pega o código enviado pelo jogador */
    $sentCode = $_GET['sent-code'];


    /* Dando select no banco de dados */
    $sql = "SELECT * FROM `testes` WHERE cod = '$sentCode'";
    $executar = mysqli_query($conexao,$sql);
    $row = mysqli_num_rows($executar);

    /* Verificando se existe algum jogo no banco de dados com as informações do select. */
    /* caso exista, o número de linhas é um, caso não exista, zero */
    if($row == 1) {
        $_SESSION['cod'] = $sentCode;      
        header('location:./pages/game.php');
        exit();
    }
    else {
        header('location:./pages/index.html');
    }
?>