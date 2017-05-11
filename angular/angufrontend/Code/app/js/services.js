/* global UNKNOWN */

'use strict';

/* 
 * Services. Pull data from json files
 * $Id$  
 **/

var mdServices = angular.module('mdServices', ['ngResource']);

mdServices.factory('Build', ['$resource',
    function ($resource) {
        return $resource('data/:listid.json', {}, {
            query: {method: 'GET', params: {listid: 'list'}, isArray: true}
        });
    }]);
