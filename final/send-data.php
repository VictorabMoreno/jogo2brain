<?php
  session_reset();
  $sqlConnect = mysqli_connect("localhost","root","","joguinho2");
  $sentWord = $_GET['sent-word'];
  $sentCode = $_GET['sent-code'];
  $sentAttempts = $_GET['sent-attempts'];

  $userContent = $_GET['sent-content'];
  $showSecretWord = $_GET['show-secret-word'];


  $insertQuery = "INSERT INTO players
  (secretWord, wordPass, gameAttempts, userContent, showWord) VALUES
  ('$sentWord', '$sentCode', '$sentAttempts', '$userContent', '$showSecretWord')";
  mysqli_query($sqlConnect, $insertQuery);

  header('location:./pages/index.php');
?>