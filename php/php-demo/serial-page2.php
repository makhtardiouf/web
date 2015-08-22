<?php

// this is needed for the unserialization to work properly.
require_once("serial_classa.inc");

$s = file_get_contents('serial_store');
$a = unserialize($s);
print_r($a);

// now use the function show_count() of the $a object.
echo "Loading value from serialized file: " . $a->show_count() . "\n";

