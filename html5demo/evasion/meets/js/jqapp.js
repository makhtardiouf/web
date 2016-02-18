/*  
 EVASION MEETS page's new look & feel 
 JS hooks. Partly re-use code from http://www.evasion.co.kr/meets/e02.html
 $Id$
 */

var fadeTime = 4000;
function fadeImage(img) {
    $(img).fadeIn(fadeTime);
}

function toggleBar() {
    $('.bar').toggle();
}

function searchSetup() {
    $(this.target).find("#search").autocomplete("http://www.evasion.co.kr/goods/get_search_list.php", {
        width: 324,
        matchContains: true,
        selectFirst: false
    });

    $("#search").result(function (event, data, formatted) {
        $("#searchForm").submit();
    });

    $("#searchForm").submit(function () {
        if ($("#search").val() == "목적지 혹은 호텔명을 검색하세요" || $("#search").val() == "") {
            return false;
        } else {
            return true;
        }
    });

}

function setMouseHooks() {
     $('.rollover').hover(function () {
        var currentImg = $(this).attr('src');
        $(this).attr('src', $(this).attr('hover'));
        $(this).attr('hover', currentImg);
    });
    $("img.gnb_menus").mouseover(function () {
        $(this).attr("src", $(this).attr("src").replace("_off.gif", "_on.gif"));
        $(this).css('cursor', 'pointer');
    });
    $("img.gnb_menus").mouseout(function () {
        $(this).attr("src", $(this).attr("src").replace("_on.gif", "_off.gif"));
        $(this).css('cursor', 'none');
    });
    $('.aover').mouseover(function () {
        $(this).parent().children().attr("src", $(this).parent().children().attr("src").replace("_off.gif", "_on.gif"));
    });
    $('.aover').mouseout(function () {
        $(this).parent().children().attr("src", $(this).parent().children().attr("src").replace("_on.gif", "_off.gif"));
    });   
}

function toggleSubmenu() {
    $("#sub_menu03, #sub_menu03_list").mouseover(function () {
        $("#sub_menu03_list").show();
    });
    $("#sub_menu03_list").mouseout(function () {
        $("#sub_menu03_list").hide();
    });
}

// Animation tests
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        fadeImage('#qa-image');
    }
//    else {
//        $('#qa-image').fadeOut(fadeTime);
//        fadeImage('#banner');
//    }
});


/***** jQ Entry Point ****/
$(document).ready(function () {
    fadeImage('#banner');

    setMouseHooks();
    toggleSubmenu();
});


$(function () {
    $.extend($.fn.disableTextSelect = function () {
        return this.each(function () {
            if ($.browser.mozilla) {//Firefox                 
                $(this).css('MozUserSelect', 'none');
            } else if ($.browser.msie) {//IE                 
                $(this).bind('selectstart', function () {
                    return false;
                });
            } else {//Opera, etc.                 
                $(this).mousedown(function () {
                    return false;
                });
            }
        });
    });     
});

$(document).bind("contextmenu", function (e) {
    return false;
});

/*
$(window).load(function () {
    $('#qaCarousel').carousel({
        interval: 4000
    });
});
*/
