/*
 * Input Array of N ints: A[0...N]
 * Output number of indices pairs (i,j) with equal values
  * i < j
 * Makhtar Diouf
*/

var debugOn = true;

function solution(A) {
    var len = A.length;
    if (len <= 1)
        return 0;

    // Regroupe similar items to shorten the future iterations
    A.sort();

    var nPairs = 0;
    for (var i = 0, j = i + 1; j < len; j++) {
        if (A[i] == A[j]) {
            nPairs++;
            logMsg("(" + i + ", " + j + ")");
        } else if (A[j] > A[j]) {
            console.log("breaking");
            continue;
        }

        if (j + 1 == len) {
            i++;
            j = i + 1;

            if (A[i] == A[j]) {
                nPairs++;
                logMsg("(" + i + ", " + j + ")");
            }
        }

        if (nPairs >= 1e9)
            return 1e9;
    }
    return nPairs;
}

function solution2(A) {
    var len = A.length;
    if (len <= 1)
        return 0;

    var hashTab = new Array(len).fill(0);
    var nPairs = 0;
    var el = 0;
    for (var i = 0; i < len; i++) {
        el = A[i];
        hashTab[el] = 1 + parseInt(hashTab[el]);
        console.log(el, hashTab[el]);

        if (hashTab[el] > 1)
            nPairs++;

        if (nPairs >= 1e9)
            return 1e9;
    }
    return nPairs;
}

function logMsg(msg) {
    if (debugOn)
        console.log(msg);
}

console.log("Npairs:", solution([3, 5, 6, 3, 3, 5])); // 4
/*logMsg("\n")
solution(['−1000000000', 1, 1, '-1000000000']);
console.log(1e9);
*/