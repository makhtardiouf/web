<?php

// classa.inc:

class A {

    private $count = -1;
    public $bucket = array();

    function __construct() {

        for ($i = 1; $i < 10; $i++)
            $this->bucket[$i] = rand($i, 100 * $i);
        $this->bucket[$i] = "Test quotes. J'en suis mort de peur";

        echo "Added $i items to the bucket\n";
        foreach ($this->bucket as $key => $val) {
            if(is_numeric($val))
                 $this->count += $val;
        }
    }

    function show_count() {
        echo $this->count;
    }

}
