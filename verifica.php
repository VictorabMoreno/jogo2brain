<?php
 session_start();

 if(!$_SESSION['nick']) {
     header('location:index.php');
     exit();
 }



?>