<?php

error_reporting(E_ALL);
session_start();
$user = filter_input(INPUT_POST, 'surname');
$_SESSION['user'] = $user;

print_r($_FILES);

// To be tested with php-cli
echo 'Hello World, '.  $_SERVER['user'] ." $user welcome back to PHP.";
echo 'Running on '.$_SERVER['SERVER_SOFTWARE'].$_SERVER['SERVER_SIGNATURE'].'<br>';
echo "Uploaded file size: " . $_FILES['fileResume']['size'] . " bytes";

$a_bool = true;   // a boolean
$a_str = 'foo';  // a string
$a_str2 = 'foo';  // a string
$an_int = 12;     // an integer

print PHP_EOL.gettype($a_bool).PHP_EOL; // prints out:  boolean
echo gettype($a_str);  // prints out:  string
// If this is an integer, increment it by four
if (is_int($an_int)) {
    $an_int += 4;
}

// If $a_bool is a string, print it out
// (does not print out anything)
if (is_string($a_bool)) {
    echo "String: $a_bool";
}

$a = 1234; // decimal number
$a = -123; // a negative number
$a = 0123; // octal number (equivalent to 83 decimal)
$a = 0x1A; // hexadecimal number (equivalent to 26 decimal)
$a = 0b11111111; // binary number (equivalent to 255 decimal)

echo "\nSize of int: " + PHP_INT_SIZE;
print PHP_EOL."\nMax int: " + PHP_INT_MAX;

// Reference to a variable
$foo = 'Bob';              // Assign the value 'Bob' to $foo
$bar = &$foo;              // Reference $foo via $bar.
$bar = "My name is $bar";  // Alter $bar...
echo PHP_EOL.$bar;
echo PHP_EOL.$foo;                 // $foo is altered too.
// global variables must be declared inside a function if they are going to be used in it
$a = 1;
$b = 2;

function Sum()
{
    global $a, $b;
    $b = $a + $b;
    // equals
    // $GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];
}

Sum();
echo PHP_EOL.$b;

// Static vars
function test()
{
    static $a = 0;
    echo $a;
    ++$a;
}

for ($i = 0; $i < 1; ++$i) {
    test();
}

// Variable-variable names
$a = 'hello';
$$a = 'world';
echo $a.' '.${$a}.PHP_EOL;
echo $a.' '.$hello;

//$my_file = @file ('non_existent_file') or
//    die ("<br>Failed opening file: error was '$php_errormsg'");

// this works for any expression, not just functions:
$value = @$cache[$key];
// will not issue a notice if the index $key doesn't exist.

// identical to shell_exec().
$output = `ls -al`;
echo "<pre>$output</pre><br>";

// Array operators
$a = array('a' => 'apple', 'b' => 'banana');
$b = array('a' => 'pear', 'b' => 'strawberry', 'c' => 'cherry');

$c = $a + $b; // Union of $a and $b
echo "Union of \$a and \$b: \n";
var_dump($c);

$c = $b + $a; // Union of $b and $a
echo "Union of \$b and \$a: \n";
var_dump($c);

echo '<br>Hello'.$_POST['surname'].' '.$_POST['name'];

// foreach
$arr = array('one', 'two', 'three');

foreach ($arr as $key => $value) {
    echo "Key: $key; Value: $value<br />\n";
}

echo 3 + "15%" + "$25\n";

echo empty(false);


echo 016 / 8;

