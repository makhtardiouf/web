/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("input:first").focus();

    $('h3').animate('250px', 'slow');
    
    $('fieldset').mouseenter( function () {
        $('#sub').val('Submit me');
        console.log("caught mouse");
    });

    $('fieldset').mouseleave( function () {
        $('#sub').val('Submit');
        console.log("caught mouse");
    });

    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

});
