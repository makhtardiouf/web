<!DOCTYPE html>
<html>
<head>
<!--Makhtar Diouf, demo-->
<?php
error_reporting(E_ERROR | E_WARNING);
session_start();
?>
    <meta charset="UTF-8">
    <meta author="Makhtar Diouf">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <!-- in html5 type="text/javascript" is not necessary -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="app.js"></script>
    <title>Personal information registration</title>
</head>
<body style="font-family: Raleway;">
        <!-- Use bootstrap for fancy RWD -->
      <div class="container">
        <div class="jumbotron">
            <h3>To keep the code rolling please fill in your personal information</h3>

                <form method="post" action="php-intro01.php" name="infoform" class="form form-horizontal col-md-6">
                    <div class="form-group">
                    First name:
                        <input class="form-control" type="text" name="surname" maxlength="20"
                               value="<?php echo $_SESSION['user'];?>" autocomplete="true" required="true" />
                    </div>
                    <div class="form-group">Family name:
                        <input class="form-control" type="text" name="name" maxlength="20"
                        value="<?php echo filter_input(INPUT_POST, 'name');?>" />
                    </div>
                    <div class="form-group">Birth year:
                        <input class="form-control" type="date" name="birthyear"
                        value="<?php echo filter_input(INPUT_POST, 'birthyear');?>">
                    </div>
                    <div class="form-group">Email:
                        <input class="form-control" type="email" name="email" />
                    </div>
                    <div class="form-group">Resume:
                        <!-- MAX_FILE_SIZE must precede the file input field -->
                        <input class="form-control" type="hidden" name="MAX_FILE_SIZE" value="10000" />
                        <input class="form-control" type="file" name="fileResume" />
                    </div>
                    <div class="form-group col-offset-md-2 col-md-4 pull-left">
                        <button class="btn btn-success" type="button" id="sub" >Submit</button>
                    </div>
                </form>
        </div>
    <br />
<?php
//require_once "php-class01.php";
//$test = new TestMe();
//$test->printDate();
?>
</div>
</body>
</html>
