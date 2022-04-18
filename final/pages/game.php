<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <header>
    <h1 id="title">mordle de refu</h1>
  </header>
  <main id="board-container">
    <div id="notify-container">
      <p id="notify">A palavra era <span id="answer"> </span></p>
    </div>
    <div id="board">
      <div id="win-popup">
        <h3>Parabéns, você conseguiu!</h3>
        <p>Abrindo o conteúdo escondido...</p>
      </div></div>
  </main>
  <div id="keyboard"></div>
  <?php require_once('../secret-word.php'); ?>
  <script src="../main.js"></script>
</body>
</html>