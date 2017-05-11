<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>  

<?php
// Download the latest list and load it on the UI
// http://192.168.10.101/traductions/index.php

system("wget https://trans-pro.net/");
rename("index.html.1", "index.html");
// Makhtar Diouf
?>

    <div class="row">
        <div class="jumbotron col-md-11" id="newTrans">
            loading...
        </div>
    </div>

    <script type="text/javascript">
    
            function reloadTranspro() {
                try {
                    console.log("Reloading...");         
                    //debugger;
                    $("#newTrans").load("index.html #ctl00_MainContent_TransList1_GridView_transList");
                
                    // var active = $(".trans_td_green");
                    // console.log("Active:", active.length);  
                    // active.css("color", "green");  

                    // Reload every 40sec
                    setTimeout(function () { location.href = "index.php"; }, 40e3);

                } catch (e) {
                    console.log("Error: ", e.message);
                }
            }

            $(document).ready(function () {
                reloadTranspro();               
            });

    </script>
</body>
</html>


