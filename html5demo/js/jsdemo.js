/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * $Id$
 * Plain JS
 */
var cars = ["Rolls", "Saab", "Volvo", "BMW"];           // Array
var name = {firstName: "John", lastName: "Doe"};    // Object

function chgImage() {
    try {
        var img = document.getElementById('light');
        if (img.src.match("pic_bulbon")) {
            img.src = "img/pic_bulboff.gif";
        } else {
            img.src = "img/pic_bulbon.gif";
        }
    } catch (TypeError) {
        console.log("Caught type error");
    }
}

function showOff() {
    document.getElementById("demo").innerHTML = "Qu'il soit &alpha; ou &beta; Stay focus and do your best for your future." +
            " There is cheddar &cent; &pound; &euro; on the line. ";

    console.log("inside showOff()");

}

function myFunc() {
    document.getElementById("demo").style.fontSize = "25px";
    showOff();

    var content = "<br/>";
    if (name.firstName !== undefined)
        content += " Yow + name.firstName + " + name.lastName;
    content += " choose your car from: <select>";
 
    for (var i = 0; i < cars.length; i++) {
        content += "<option>" + cars[i] + "</option>";
    }
    content += "</select>";// + typeof(content);
    document.getElementById("demo").innerHTML += content;
}
  