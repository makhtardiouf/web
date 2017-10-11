
/**
 * 
 * Given a string s, find and return the first instance 
 * of a non-repeating character in it. If there is no such character, return '_'.
 * 
 * @param {any} s 
 * @returns 
 */
var dbg = true;

function firstNotRepeatingCharacter(s) {
    if (s.length <= 1)
        return s[0];

    var target = '_';
    var lastTgt = '_';
    var sz = s.length;
    var nCount = {};

    for(var i = 0; i < sz; i++) {
        var c = s[i];   
        
        if(!nCount[c])
            nCount[c] = 1;
        else
            nCount[c] += 1;
       
        if(nCount[c] == 1) {
            lastTgt = c;
            if (target == '_') {
                target = c;                
            }
            if(dbg)
                console.log("Targets ", c, lastTgt);

        } else if ( (nCount[c] > 1) && (target == c) ) {
           // target = '_';
            if(dbg)
                console.log("ReSet target ", c);
        }
               
        if(dbg)
            console.log(c, " => ", nCount[c]);
    }
         
    if(dbg)
        console.log("\n\nAnswer: ", target);
    if (target == '_') 
        return lastTgt;

    return target;    
}

//firstNotRepeatingCharacter("abacabad");
firstNotRepeatingCharacter("bcb");
