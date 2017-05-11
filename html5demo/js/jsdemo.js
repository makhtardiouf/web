/* 
 * Makhtar Diouf
 * $Id$
 * Demo plain JS, instead of jQuery
 */

var cars = ["Rolls", "Subaru", "Volvo", "BMW"];           // Array
var name = { firstName: "John", lastName: "Doe", age: 45 };    // Object

function showMsg() {
    document.getElementById("demo").innerHTML = "Qu'il soit &alpha; ou &beta; Stay focus and do your best for your future." +
        " There is cheddar &cent; &pound; &euro; on the line. ";
}

function showOpts() {
    document.getElementById("demo").style.fontSize = "25px";
    showMsg();

    var content = "<br/>";
    if (name.firstName !== undefined)
        content += " Yow " + name.firstName + " " + name.lastName;
    content += " choose your car from: <select>";

    for (var i = 0; i < cars.length; i++) {
        content += "<option>" + cars[i] + "</option>";
    }
    content += "</select>";
    document.getElementById("demo").innerHTML += content;
    console.log("'content' type is", typeof (content));
}

function chgImage() {
    try {
        var img = document.getElementById('light');
        if (img.src.match("pic_bulbon")) {
            img.src = "img/pic_bulboff.gif";
            logit("Lights on");

        } else {
            img.src = "img/pic_bulbon.gif";
            logit("Lights off");
        }
    } catch (TypeError) {
        logit("Caught type error");
    }
}


// JS sorting
function sortLibrary(onTerminal) {

    library = library.sort(function (a, b) { return a.title > b.title });

    if (onTerminal)
        library.forEach(function (i) {
            console.log("\t*", i.title, "( ID", i.libraryID, "), by", i.author);
        });
    else
        logit(library);
    logit("\n");
}

// Global scope
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

function runDemo() {
    console.log("Sorting the library containing", library.length, "books, by titles:");
    sortLibrary(true);
    console.log(typeof 3, typeof 3.14, typeof false);
    logit(typeof "hello");
    var user = { name: 'John', age: Math.random() };
    console.log(typeof [1, 2, 3, 4], typeof user);
    logit(user.name === user['name']);

    var person;
    logit(typeof person == 'undefined');
    logit(typeof null);

    var Class = {
        i: 1,
        j: 40,
        myMethod: function () {
            return this.i + this.j;
        }
    };
    console.log("Returning from object method: ", Class.myMethod(), Class);

    // Global scope of unnamed vars
    carName = "Volvo";

    demoStrings();
    demoNumbers();
    demoJson();
}

function demoStrings() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.lastIndexOf("locate");
    console.log("Index of str", str.indexOf("locate"), pos, str.indexOf("xyz"));
    // Can use regexp
    var idx = str.search("locate");
    logit(idx);
    logit(str.substr(idx, str.length));
    logit(str.slice(-idx));
    logit(str.split("'"));

    // By default, the replace() function replaces only the first match. 
    logit(str.replace("locate", "see"));
    // Use regexp global match
    logit(str.replace(/locate/g, "see"));

}

function demoNumbers() {
    // JavaScript Numbers are Always 64-bit Floating Point

    logit(123e5);  // 12300000
    logit(123e-5); // 0.00123

    logit(0.2 + 0.1);  // x will be 0.30000000000000004
    logit(0xFF);      // x will be 255

    logit("\nBases conversion of 128: 16 (hex), base 8 (octal), or base 2 (binary)");
    var num = 128;
    logit(num.toString(16));     // returns 80 (16 * 8^1 + 0*8^0)
    logit(num.toString(8));     // returns 200
    logit(num.toString(2));     // returns 10000000

    logit(num.toPrecision(2));

    //  Infinity
    logit(2 / 0);

    x = 100 / "Apple";
    logit(isNaN(x));

    logit(typeof new Date());
}

function demoJson() {
    var emp = {
        employees: [
            { "firstName": "Johnny", "lastName": "Doe" },
            { "firstName": "Anna", "lastName": "Smith" },
            { "firstName": "Peter", "lastName": "Jones" }
        ]
    };
    logit(emp.employees[0]);
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function logit(msg) {
    console.log(msg);
}

runDemo();
logit(carName);