
var yourself = {
    fibonacci: function (n) {
        if ((n == 0) || (n == 1)) {
            return n;
        }


        return this.fibonacci(n - 1) +
            this.fibonacci(n - 2);
    }
};

