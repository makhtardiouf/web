console.log("HELLO NodeJS WORLD");


function chart() {
    this.ctype = 'a';

    this.type = function(type = 'line') {
        this.ctype = type;
        return type;
    }

    return "Here's your " + this.ctype + " chart!";
}

var c = chart();
console.log(c);

