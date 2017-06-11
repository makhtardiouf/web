/*
 * Task 1: phone number formatting
 * Input str S containing digits, spaces and/or dashes
 * output format S by 3 digits separated by a dash
 * The last 2 blocks can be of length 2
 * Makhtar Diouf
*/

var debugOn = true;
var nChars = 3;

function solution(S) {
    var end = S.length;

    var out = [];
    var tmp = "";
    var regex = /^([0-9]+)$/;

    // Parse input string and collect digits
    for (var i = 0; i < end; i++) {
        // console.log("i:", i, S[i]);

        if (!S[i].match(regex))
            continue;

        tmp += S[i];
        if (tmp.length == nChars) {
            out.push(tmp);
            tmp = "";
        }
    }

    // Get the remaining digits of the number
    if (tmp.length > 0) {
        out.push(tmp);
    }

    // Split the last 2 blocks if necessary
    var lastBlock = out[out.length - 1];
    if (lastBlock.length == 1) {
        var tmp = out[out.length - 2];
        out[out.length - 2] = tmp.slice(0, 2);
        out[out.length - 1] = tmp[nChars - 1].toString() + lastBlock;
    }

    var res = out.join('-');
    logMsg(res);
    return res;
}

function logMsg(msg) {
    if (debugOn)
        console.log(msg);
}

solution("00-44  48 5555 8361");
solution("0 - 22 1985--324");
solution("555372654");
