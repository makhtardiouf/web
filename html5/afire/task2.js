/*
 * Task 2
 * Return the lowest number of students standing in a contiguous group
 * that, when rearranged, orders the row (array) in ASC order
 * 
 * Values in the array are students Height
 * Makhtar Diouf
*/

var debugOn = true;


function solution(A) {
    var N = A.length;
    if (N <= 1)
        return 0;

    // left, right extremities
    var l = 0, r = N;
    var low = 0, high = 0;

    logMsg(A);
    
    for (var i = 0; i < N - 1; i++) {
        if (A[i] > A[i + 1]) {
            l = i;
            logMsg("Hit l: " + i);

            // Already sorted
            if (l == (N - 1))
                return 0;

            break;
        }
    }

    // Determine right extremity
    for (i = N - 1; i > 0; i--) {
        if (A[i] < A[i - 1]) {
            r = i;
            logMsg("Hit r: " + i);
            break;
        }
    }

    for (i = l + 1; i <= r; i++) {
        if (low > A[i])
            low = A[i];
        if (high < A[i])
            high = A[i];
    }

    for (i = 0; i < l; i++) {
        if (low < A[i]) {
            l = i;
            logMsg("Hit l2: " + i);
            break;
        }
    }

    for (i = N - 1; i >= r + 1; i--) {
        if (high > A[i]) {
            r = i;
            logMsg("Hit r2: " + i);
            break;
        }
    }

    // group length
    logMsg(r - l);
    return (r - l);
}


function logMsg(msg) {
    if (debugOn)
        console.log(msg);
}

// Here 655 -> group of 3 elements
solution([1, 2, 6, 5, 5, 8, 9]);
solution([10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]);
