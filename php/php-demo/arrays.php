<?php

$arr = array(10, 20, 30, 40);
var_dump(array_slice($arr, 1, 2));

 $cars = array(
            array("abc", "cde", "efg"),
            array(1, "123", "456"),
            array(2, "hij", "klm"),
            array(3, "789", "1011")
        );

for ($i = 0; $i < sizeof($cars); $i++) {
    if ($i % 2)
        echo "\t--------------------\n";
    else
        echo "\t********************\n";

    for ($j = 0; $j < sizeof($cars[$i]); $j++) {
        echo "\t" . $cars[$i][$j] ;
    }
    echo "\n\n";
}
