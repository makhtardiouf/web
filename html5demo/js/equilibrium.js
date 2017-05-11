/**
 * Determine the point of equilibrium P satisfying:
 * sum(A[0...P-1]) = sum(A[P+1...N])
*/

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (A.length <= 1)
        return A[0];

    var s1 = 0, s2 = 0;
    var end = A.length - 1;

    for (var i = 1; i <= end; i++) {
        s1 += A[i - 1];
        var tmp = A.slice(i + 1, end);
         console.log(tmp);

        s2 = sumit(tmp);//tmp.reduce(getSum, 0);
        console.log(i - 1, ": \t", s1, "<>", s2);
        if (s1 == s2) {
            console.log("Equilibrium point is: ", i - 1);
        //    return i;
        }
    }

    // no equilibrium index 
    return -1;
}

function getSum(total, num) {
    //  console.log("adding: ",num);
    return total + num;
}

function sumit(B) {
    var tot = 0;
    B.forEach(function (e) {
        tot += e;
    }, this);
    return tot;
}

var A = [-1, 3, -4, 5, 1, -6, 2, 1];

solution(A);
