/*
 * Makhtar Diouf
 */

$(document)
    .ready(function() {
      //$("input:first").focus();

      $('h3').animate('250px', 'slow');

      $("input")
          .focus(function() {
            $(this).css("background-color", "lightgreen");
          });
      $("input")
          .blur(function() {
            $(this).css("background-color", "#ffffff");
          });

      /*
      $('fieldset')
              .mouseenter(function() {
                $('#sub').val('Submit me');
                console.log("caught mouse");
              });

          $('fieldset')
              .mouseleave(function() {
                $('#sub').val('Submit');
                console.log("caught mouse");
              });
              */
    });
