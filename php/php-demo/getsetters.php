<?php
// http://php.net/manual/en/language.oop5.overloading.php

error_reporting(E_ERROR | E_WARNING);

class PropertyTest
{
    /**  Storage for overloaded data. */
    private $data = array();

    /**  Overloading not used on declared properties. */
    public $declared = 1;

    /**  Overloading only used on this when accessed outside the class. */
    private $hiddenVar = 2;

    public function __set($name, $value)
    {
        echo "Setting '$name' to '$value'\n";
        $this->data[$name] = $value;
    }

    public function __get($name)
    {
        echo "Getting '$name'\n";
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }

        $trace = debug_backtrace();
        trigger_error(
            'Undefined property via __get(): ' . $name .
            ' in ' . $trace[0]['file'] .
            ' on line ' . $trace[0]['line'],
            E_USER_NOTICE);
        return null;
    }


  /**  As of PHP 5.1.0  */
    public function __isset($name)
    {
        echo "Is '$name' set?\n";
        return isset($this->data[$name]);
    }

    /**  As of PHP 5.1.0  */
    public function __unset($name)
    {
        echo "Unsetting '$name'\n";
        unset($this->data[$name]);
    }

    /**  Not a magic method, just here for example */
    public function getHidden()
    {
        return $this->hiddenVar;
    }

    // method overloading used by testOverload
     public function __call($name, $arguments)
    {
        // Note: value of $name is case sensitive.
        echo "Calling object method '$name' with args: "
             . implode(', ', $arguments). "\n";
    }
}


echo "<pre>\n";
$obj = new PropertyTest();

// Create a property that is not declared in the class
$obj->a = 1;
echo $obj->a . "\n\n";

var_dump(isset($obj->a));
unset($obj->a);

var_dump(isset($obj->a));
echo "\n";

echo $obj->declared . "\n\n";

echo "Let's experiment with the private property named 'hidden':\n";
echo "Privates are visible inside the class, so __get() not used...\n";

echo $obj->getHidden() . "\n";

echo $obj->testOverload("overload 1");
echo $obj->testOverload("overload 2", date("Y-m-d"));

?>
