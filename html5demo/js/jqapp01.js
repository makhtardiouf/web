/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function testCallback() {
    console.log("in Callback");
}

function showMsg(msg, testCallback) {
    //alert('inside');
    $('#sitemsg').text(msg);
}

window.onload = function () {
    showMsg("Loaded... welcome to the HTML5 & jQuery demo");
};

// <!-- bg-color for readability -->
$(document).ready(function () {
    //  $("tr:odd").css("background-color", "orange");
    showMsg("Welcome to the HTML5 & jQuery demo");

    $('a').click(function (event) {
        event.preventDefault();

        showMsg("Links actions are desactivated");
    });

    $("button").click(function (event) {
        var newUrl = 'http://www.softensys.com';
        $('a').attr('href', newUrl);
        alert("Detected URL: " + $("#w3s").attr("href"));
        $('a').innerHTML(newUrl);
    });

}); // ready
