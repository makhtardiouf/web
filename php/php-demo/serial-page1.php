<?php

// Serialization

require_once("serial_classa.inc");

$filename = 'serial_store';

$a = new A();
$s = serialize($a);

// store $s somewhere where page2.php can find it.
file_put_contents($filename, $s);

echo "See file: $filename\n " ;
