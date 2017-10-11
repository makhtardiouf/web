<?php
// Find the 1st duplicate in the array

function firstDuplicate($a) {
  
    $nCount = array();
    for($i = 0; $i < sizeof($a); $i++) {
        $it = $a[$i];
        $cnt = $nCount["$it"];
        if($cnt >= 1)
            return $it;
        else
            $nCount["$it"] += 1;
    }

    return -1;
}


function firstNotRepeatingCharacter($s) {
    $target = false;
    $sz = strlen($s);
    $nCount = array($sz);
    
    for($i = 0; $i < $sz; $i++) {
        $c = $s[$i];
        $nCount[] = array($c => $nCount["$c"] + 1);
        
        if($nCount["$c"] == 1) {
            if ($target == false) {
                $target = $c;
                print "Set target $c\n";
            }
        } else if ( ($nCount["$c"] > 1) && ($target == $c) ) {
            $target = false;
            print "ReSet target\n";
        }
               
      //  print "\n $c => " . $nCount["$c"];
    }
         
    print "\n\nAnswer: ";
    return $target;    
}

print firstNotRepeatingCharacter("abacabad");
