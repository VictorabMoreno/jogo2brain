<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <?php require_once('../get-data.php'); ?>
  <header>
    <h1 id="title">Joguinho2</h1>
  </header>
  <main id="board-container">
    <div id="board">
      <div id="win-popup">
        <p>Parabéns, você conseguiu!</p>
        <p id="user-content"></p>
      </div>
      <div id="lose-popup">
        <p>Que pena, você não conseguiu :\</p>
        <p id="answer"></p>
      </div>
  </main>
  <div id="keyboard"></div>
  <script src="../game.js"></script>
</body>
</html>