/**
 * given an n x n 2D matrix that represents an image. 
 * Rotate the image by 90 degrees (clockwise).
 */


function print(matrix) {
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        var outp = '';
        for (var j = 0; j < n; j++)
            outp = outp + ' ' + matrix[i][j];
        console.log(outp);       
    }
}

function rotateImage(matrix) {
    var n = matrix.length;
    for (var layer = 0; layer < n / 2; ++layer) {
        var first = layer;
        var last = n - 1 - layer;
        for (var i = first; i < last; ++i) {
            var offset = i - first;
            var top = matrix[first][i]; // save top

            // left -> top
            matrix[first][i] = matrix[last - offset][first];

            // bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset];

            // right -> bottom
            matrix[last][last - offset] = matrix[i][last];

            // top -> right
            matrix[i][last] = top; // right <- retrieve saved top
        }
    }
    print(matrix);
    return matrix;
}

var a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotateImage(a);