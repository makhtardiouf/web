/* 
 * Author: Makhtar Diouf <makhtar.diouf@gmail.com>
 * $Id$
 * jQuery hooks
 */

function editAuthor() {
    alert("value: " + $('span').first().text());
}

$(document).ready(function () {
    // $('#editForm').hide();

    $(".glyphicon-edit").click(function () {
        $('#editForm').show();
        console.log("Toggled edit form");
    });

    $("li").click(function () {
        ('li').removeClass('active');
        $(this).addClass('active');
        console.log("Changed active menu item");

    });

});
