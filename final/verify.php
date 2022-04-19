<?php
    session_start();
    $conexao = mysqli_connect("localhost","root","","joguinho2");

    /* pega o código enviado pelo jogador */
    $sentCode = $_GET['sent-code'];


    /* Dando select no banco de dados */
    $selectQuery = "SELECT secretWord FROM `players` WHERE wordPass = '$sentCode'";
    $row = mysqli_num_rows(mysqli_query($conexao,$selectQuery));

    /* Verificando se existe algum jogo no banco de dados com as informações do select. */
    /* caso exista, o número de linhas é um, caso não exista, zero */
    if($row == 1) {
        $_SESSION['code-session'] = $sentCode;      
        header('location:./pages/game-page.php');
        exit();
    }
    else {
        header('location:./pages/index.php');
    }
?>