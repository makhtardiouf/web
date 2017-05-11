'use strict';

/* 
 * Filters
 * $Id$
 **/

angular.module('mdFilters', []).filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});

angular.module('mdFilters', []).filter('state', function () {
    return function (state) {
        console.log("State: " + state);

        if (state == 'Rejected') {
            return "danger";

        } else if (state == 'Running') {
            return "info";
        }
    };
});

