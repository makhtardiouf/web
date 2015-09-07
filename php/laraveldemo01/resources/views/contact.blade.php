<!DOCTYPE html>
<!-- Makhtar Diouf $Id$ -->
<!-- To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h3>Contact</h3>
        <?php
        foreach ($_SESSION['CLIENT_IPS'] as $key => $value) {
            echo "Client IP [$key]: " . $value;
            //print_r($_SESSION['CLIENT_IPS']);
            // put your code here
        }
        ?>
    </body>
</html>
