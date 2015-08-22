<?php

class TestMe {

  private $mytime = 1;
 function __construct() {

   $this->mytime = date("Y-m-d");
 }

  function printDate() {
    echo 'The creation date is: ' . $this->mytime;
    return;
  }

  function makeCoffee($types = array("cappuccino"), $coffeeMaker = NULL)
  {
      $device = is_null($coffeeMaker) ? "hands" : $coffeeMaker;
      return "Making a cup of ".join(", ", $types)." with $device.\n";
  }

  // variable args PHP 5.6
  function sum(...$numbers) {
      $acc = 0;
      foreach ($numbers as $n) {
          $acc += $n;
      }
      return $acc;
  }

  // PHP <= 5.5
  function sumOldVarargs() {
      $acc = 0;
      foreach (func_get_args() as $n) {
          $acc += $n;
      }
      return $acc;
  }

}


$test = new TestMe();
echo $test->printDate() . PHP_EOL;
echo $test->makeCoffee() . PHP_EOL;
echo $test->sum(1, 2, 3, 4) . PHP_EOL;
echo $test->sumOldVarargs(1, 2, 3, 4) . PHP_EOL;
echo "rand: " . rand(10, 100);
