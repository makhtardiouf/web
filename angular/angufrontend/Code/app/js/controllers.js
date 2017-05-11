'use strict';

/* 
 * Controllers 
 * $Id$
 * */

var mdControllers = angular.module('mdControllers', ["googlechart"]);

/**
 * Pull list of Firewalls/Builds from json file
 */
mdControllers.controller('itemListCtrl', ['$scope', 'Build',
    function ($scope, Build) {
        $scope.items = Build.query();
        $scope.orderProp = 'id';
    },
//    $scope.expand = function (item) {
//        angular.forEach($scope.items, function (i) {
//            if (i === item) {
//                showitem = !showitem;
//            } else {
//                showitem = false;
//            }
//        });
//    }
]);


/**
 * Load unit tests metrics with Google charts
 */
mdControllers.controller("UnitTestChartCtrl", function ($scope) {
    $scope.unitTestChart = {};
    $scope.unitTestChart.type = "PieChart";

    $scope.unitTestChart.data = {"cols": [
            {id: "t", label: "76% Passed", type: "string"},
            {id: "s", label: "Covered", type: "string"}
        ], "rows": [
        ]};

    $scope.unitTestChart.options = {
        'title': 'Unit Test',
        'titleTextStyle': {color: '#336600', fontSize: 13, bold: true},
        chartArea: {height: '100',
            width: '140'},
        'legend': {'textStyle': {'color': 'green', fontSize: 11}},
        width: 150,
        height: 150
    };
});


/**
 * Load functional tests metrics with Google charts
 */
mdControllers.controller("FuncTestChartCtrl", function ($scope) {
    $scope.funcTestChart = {};
    $scope.funcTestChart.type = "PieChart";

    $scope.funcTestChart.data = {"cols": [
            {id: "t", label: "Passed", type: "string"},
            {id: "s", label: "Covered", type: "string"}
        ], "rows": [
        ]};

    $scope.funcTestChart.options = {
        'title': 'Functional Test',
        'titleTextStyle': {color: '#336600', fontSize: 13, bold: true},
        chartArea: {height: '100',
            width: '140'},
        'legend': {'textStyle': {'color': 'green', fontSize: 11}},
        width: 150,
        height: 150
    };
});