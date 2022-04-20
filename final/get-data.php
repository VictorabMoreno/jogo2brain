<!DOCTYPE html>
<body>
  <?php
    session_start();

    /* busca a palavra secreta no banco de dados */
    $sqlConnect = mysqli_connect("localhost","root","","joguinho2");
    $playerAcess = $_SESSION['code-session'];
    $getWord = mysqli_query($sqlConnect, "SELECT secretWord FROM `players` WHERE wordPass = '$playerAcess'");
    $secretWord = mysqli_fetch_object($getWord)->secretWord;

    $getAttempts = mysqli_query($sqlConnect, "SELECT gameAttempts FROM `players` WHERE wordPass = '$playerAcess'");
    $gameAttempts = mysqli_fetch_object($getAttempts)->gameAttempts;
    
    $getContent = mysqli_query($sqlConnect, "SELECT userContent FROM `players` WHERE wordPass = '$playerAcess'");
    $userContent = mysqli_fetch_object($getContent)->userContent;

    $getShowWord = mysqli_query($sqlConnect, "SELECT showWord FROM `players` WHERE wordPass = '$playerAcess'");
    $showWord = mysqli_fetch_object($getShowWord)->showWord;

    /* delcara variáveis js para enviar ao jogo */
    echo "<script>
    var word = '$secretWord';
    var attempts = '$gameAttempts';
    var userContent = '$userContent';
    var showSecretWord = $showWord;
    </script>";
  ?>
</body>
</html>