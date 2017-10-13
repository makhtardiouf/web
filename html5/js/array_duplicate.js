
/**
 * 
 * Given a string s, find and return the first instance 
 * of a non-repeating character in it. If there is no such character, return '_'.
 * 
 * @param {any} s 
 * @returns 
 */
var dbg = true;

function firstNotRepeatingChar(s) {
    if (s.length <= 1)
        return s[0];

    var target = '_';        
    var nCount = {};
    var sz = s.length;

    for(var i = 0; i < sz; i++) {
        var c = s[i];   
        
        if(!nCount[c])
            nCount[c] = 1;
        else
            nCount[c] += 1;              
               
        if(dbg)
            console.log(c, " => ", nCount[c]);
    }
    for (var e in nCount) {
        if(nCount[e] == 1) {
           target = e;
           break;
        }
    }
         
    if(dbg)
        console.log("\nAnswer: ", target);

    return target;    
}

//firstNotRepeatingChar("abacabad");
//firstNotRepeatingChar("bcb");
firstNotRepeatingChar("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe");
