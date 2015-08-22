<?php
/**
 * Author: Makhtar Diouf <makhtar.diouf@gmail.com>
 * $Id: WebPage.php, dabcbdbb1ca2  makhtar $
 * Main entry-point; required by all files; handles autoloading too
 */
require_once 'vendor/autoload.php';
require_once 'generated-conf/config.php';

//use Monolog\Logger;
//use Monolog\Handler\StreamHandler;
//$defaultLogger = new Logger('defaultLogger');
//$defaultLogger->pushHandler(new StreamHandler('propelbook.log', Logger::WARNING));
//$serviceContainer->setLogger('defaultLogger', $defaultLogger);

class WebPage {

    private $title = '';

     function showError($ex) {
       
        echo "<script>$('#errormsg').show(); $('#errormsg').text('Error: ". $ex->getMessage() ."');</script>";
}

    function __construct($title = '') {
        $this->title = $title;
        ?>
        <!DOCTYPE html>
        <html>
            <head>                
                <meta charset="UTF-8">                
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="css/bootstrap.min.css">
                <link rel="stylesheet" href="css/bootstrap-theme.min.css">                
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
                <script src="app.js"></script>
                <title><?php echo $title; ?></title>
            </head>
            <body>
                <div class="container">
                    <h1><?php echo $title;?></h1>
                    <p class="bg-warning" id="errormsg" hidden="true"></p>
                    
<?php
        set_exception_handler("showError");
        
      }
      
      function showNavigation() {
          $file = basename(__FILE__);
          //@TODO fill <li class= and href depending on $file
              echo ' <ul class="nav nav-pills">
                <li class="active"><a href="index.php">Input</a></li>
                <li><a href="authors.php">Authors</a></li>
                <li><a href="publishers.php">Publishers</a></li>
                <li><a href="books.php">Books</a></li>
                </ul> ';
      }     
      
      function endPage() {
        echo "
                <p>Demo application by: Makhtar Diouf <makhtar.diouf@gmail.com>, 2015</p>
              </div>
            </body>
        </html>
        ";
      }

} // end WebPage
