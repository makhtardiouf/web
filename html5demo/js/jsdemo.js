/* 
 * Makhtar Diouf
 * $Id$
 * Demo plain JS, instead of jQuery
 */
var cars = ["Rolls", "Subaru", "Volvo", "BMW"];           // Array
var name = {firstName: "John", lastName: "Doe"};    // Object

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
    console.log("'content' type is", typeof(content));
}
  
function chgImage() {
    try {
        var img = document.getElementById('light');
        if (img.src.match("pic_bulbon")) {
            img.src = "img/pic_bulboff.gif";
            console.log("Lights on");

        } else {
            img.src = "img/pic_bulbon.gif";
            console.log("Lights off");
        }
    } catch (TypeError) {
        console.log("Caught type error");
    }
}