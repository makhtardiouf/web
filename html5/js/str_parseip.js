
/**
 * Check if the input string is an ip v4 address
 * Makhtar 
*/

function isIPv4(str) {
   var parts = str.split(".");
   console.log("Ip:", parts);
    if(parts.length != 4)
        return false;

    var ret = true;

    // Note: Both forEach and every(), do not stop with the inner return
    // every() returns true if all the elements in the array pass the test
   return parts.every(function(el) {
       try {
            num = parseInt(el);
            console.log(num, typeof num, el.length);

            if ( (el == "") || (typeof num !== 'number') || (num < 0) || (num > 255)) {
                    return false;           
            }
            return true;
        } catch(e) {
            console.log(e.message);
            return false;
        }
    });
}

var inp = ["123.24.63.255", ".123.36.85", "68:f7:28:7e:94:b9", "192.168.42.233"];

inp.forEach (function(ip) {
        console.log(ip, isIPv4(ip), "\n\n");
    }
);