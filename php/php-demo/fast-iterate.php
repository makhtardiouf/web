<?php

// Using Generators is faster than built-in iterators that create large arrays

function xrange($start, $limit, $step = 1)
{
    if ($start < $limit) {
        if ($step <= 0) {
            throw new LogicException('Step must be +ve');
        }

        for ($i = $start; $i <= $limit; $i += $step) {
            // $i is preserved between yields.
            yield $i;
        }
    } else {
        if ($step >= 0) {
            throw new LogicException('Step must be -ve');
        }

        for ($i = $start; $i >= $limit; $i += $step) {
            // $i is preserved between yields.
            yield $i;
        }
    }
}

echo "Running on " . $_SERVER['SERVER_SOFTWARE'] . '<br>';

echo 'Single digit odd numbers from range():  ';
$execTime = -microtime(true);
foreach (range(1, 50, 2) as $number) {
    echo "$number ";
}
$execTime += microtime(true);

printf("range() took %02.2e sec\n", $execTime);

echo 'Single digit odd numbers from xrange(): ';
$execTime = -microtime(true);
foreach (xrange(1, 50, 2) as $number) {
    echo "$number ";
    //sleep(1);
}
$execTime += microtime(true);

printf("xrange() took %02.2e sec\n", $execTime);

class MyObj
{
    private $store = array();

    public function __construct($size = 3)
    {
     //   $this->store = array_pad($this->store, $size, 0);
     //   echo 'Store has '.count($this->store).' items';
        echo 'Initialized '.__CLASS__." with $size items\n";
    }

    public function genVal()
    {
        //for ($i = 0; $i < count($this->store); ++$i) {
        for ($i = 0; $i < 5; ++$i) {
            $store[$i] = rand($i, 1000);
           
        }
         yield $store;
    }
}

$obj = new MyObj(10);
foreach ($obj->genVal() as $val) {
    
    var_dump($val);
}
