'use strict';

/* 
 * App Module 
 * Makhtar Diouf<makhtar.diouf@gmail.com>
 * $Id$
 **/

// Load required modules for the app
var mdApp = angular.module('mdApp', [
    'ngRoute',
    'mdControllers',
    'mdFilters',
    'mdServices'
]);

/**
 * Routes to main links
 * @param {type} $routeProvider
 */
mdApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/index', {
                    templateUrl: 'views/list.html',
                    controller: 'itemListCtrl'
                }).
                otherwise({
                    redirectTo: '/index'
                });

    }]);

function setTitle(title) {
    $('#title').text(title);
}

// Toggle main content width
function setWideView() {
    $('#content').removeClass().addClass('view-container container-fluid');
}

function setCompactView() {
    $('#content').removeClass().addClass('view-container container');
}

function setRowClass() {
    var build = $(".Rejected");
    build.addClass("danger");
    console.log(build.contents());

    build = $(".Running");
    build.addClass("info");
    console.log(build.val());

}

function togglePanel(id) {
    console.log("Panel ID: " + id);
    var panelId = "." + id;
    $(panelId).hide();
}

$(document).ready(function () {
    
    $("#pbar").hide();

});