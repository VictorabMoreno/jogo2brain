<?php
  session_reset();
  $sqlConnect = mysqli_connect("localhost","root","","joguinho2");
  $sentWord = $_GET['sent-word'];
  $sentCode = $_GET['sent-code'];
  $sentAttempts = $_GET['sent-attempts'];

  $insertQuery = "INSERT INTO players (secretWord, wordPass, gameAttempts) VALUES ('$sentWord', '$sentCode', '$sentAttempts')";
  mysqli_query($sqlConnect, $insertQuery);

  header('location:./pages/index.php');
?>