<?php

class TestMe {
	
	private $mytime = 1;
	function __construct() {
		$this->mytime = date("Y-m-d");
	}
	
	function printDate() {
		echo 'Creation date: ' . $this->mytime;
		return;
	}
	
	function makeCoffee($types = array("cappuccino"), $coffeeMaker = NULL)
																					  {
		$device = ($coffeeMaker? $coffeeMaker : "hands & joy");
		return "Making a cup of ".join(", ", $types)." with $device.\n";
	}
	
	// 	variable args PHP 5.6
																					  function sum(...$numbers) {
		$tot = 0;
		echo "Varargs sum of: ";
		
		foreach ($numbers as $n) {
			$tot += $n;
			echo "$n ";
		}
		echo "= ";
		return $tot;
	}
	
	// 	PHP <= 5.5
																					  function sumOldVarargs() {
		$tot = 0;
		echo "Sum of: ";
		
		foreach (func_get_args() as $n) {
			$tot += $n;
			echo "$n ";
		}
		echo " with func_get_args = ";
		return $tot;
	}
	
}


$test = new TestMe();
//echo $test->printDate() . PHP_EOL;
echo $test->makeCoffee() . PHP_EOL;
echo $test->sum(1, 2, 3, 4) . PHP_EOL;
echo $test->sumOldVarargs(1, 2, 3, 4) . PHP_EOL;
echo "rand: " . rand(10, 100);
