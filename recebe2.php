<?php
session_start();
  $_SESSION['cod'];
   $txt = $_GET['text'];
   $_SESSION['senha'];
   $right = $_SESSION['senha'];



     if($txt == $right) {
       echo "certo";
      }

     else {
       echo "errado";
      }
   

  



?>