<!DOCTYPE html>
<!--
  To change this license header, choose License Headers in Project Properties.
  To change this template file, choose Tools | Templates
  and open the template in the editor.
-->
<?php
error_reporting(E_ERROR | E_WARNING);
session_start();
?>
<html>
    <head>
        <meta charset="UTF-8">
        <meta author="Makhtar Diouf">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <!-- in html5 type="text/javascript" is not necessary -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="application.js"></script>
        <title>Personal information registration</title>
    </head>
    <body>
        <!-- Use bootstrap for fancy RWD -->
      <div class="container">
        <div class="jumbotron">
            <h3>Keep the code rolling</h3>

            <fieldset>
                <caption>Fill your personal information</caption>
                <form enctype="multipart/form-data" action="php-intro01.php" method="post" name="infoform">
                    <p>Prenom:
                        <br />
                        <input type="text" name="surname" maxlength="20"
                               value="<?php echo $_SESSION['user']; ?>"
                               autocomplete="true" required="true" />
                    </p>
                    <p>Nom:
                        <br />
                        <input type="text" name="name" maxlength="20" value="<?php echo filter_input(INPUT_POST, 'name'); ?>" />
                    </p>
                    <p>Annee de naissance:
                        <br />
                        <input type="date" name="birthyear" value="<?php echo filter_input(INPUT_POST, 'birthyear'); ?>">
                    </p>
                    <p>Email:
                        <br />
                        <input type="email" name="email" />
                    </p>
                    <p>Resume: <br />
                        <!-- MAX_FILE_SIZE must precede the file input field -->
                        <input type="hidden" name="MAX_FILE_SIZE" value="10000" />
                        <input type="file" name="fileResume" >
                    <p>
                        <input type="submit" id="sub" value="Submit">
                    </p>
                </form>

            </fieldset>
            <?php
            require_once "php-class01.php";

            $test = new TestMe();
            $test->printDate();
            ?>
          </div>
        </div>
    </body>

</html>
