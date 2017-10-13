
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
            if (target == '_') {
                target = c;                
            } else if (lastTgt == '_')
                lastTgt = c;

            if(dbg)
                console.log("Targets ", c, lastTgt);

        } else if ( (nCount[c] > 1) && (target == c) ) {
            if(nCount[lastTgt] == 1)
                target = lastTgt;
            else
                target = '_';

            if(dbg)
                console.log("ReSet target ", c);
        }
               
        if(dbg)
            console.log(c, " => ", nCount[c]);
    }
         
    if(dbg)
        console.log("\nAnswer: ", target, lastTgt);

    return target;    
}

//firstNotRepeatingCharacter("abacabad");
//firstNotRepeatingCharacter("bcb");
firstNotRepeatingCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe");
