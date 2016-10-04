'use strict';
angular.module('app', [])
    .component('root', {
        template: `
            <input type="number" ng-model="$ctrl.userRows" class="form-control" />
            <input type="number" ng-model="$ctrl.userCols" class="form-control" />
            <times-table rows="$ctrl.userRows" cols="$ctrl.userCols" />
            <times-table rows="2" cols="3" />
            <times-table rows="$ctrl.userRows" cols="$ctrl.userCols" />
        `,
        controller: mainController
    })
    .component('timesTable', {
        templateUrl: 'times-table.html',
        bindings: {
            rows: '<',
            cols: '<'
        },
        controller: TimesTableController
    });

function mainController() {
    this.userRows = 6;
    this.userCols = 6;
}

function TimesTableController() {
    var ctrl = this;

    ctrl.selectedTableValue = null;

    ctrl.showTable = function () {
        return ctrl.rows > 0 && ctrl.cols > 0;
    };

    ctrl.getRows = function () {
        return R.range(0, ctrl.rows);
    };

    ctrl.getCols = function () {
        return R.range(0, ctrl.cols);
    };

    ctrl.getTableValue = function (row, col) {
        return (row+1) * (col+1);
    };

    ctrl.setSelectedTableValue = function (row, col) {
        ctrl.selectedTableValue  = {
            x: row + 1,
            y: col + 1,
            result: (row+1) * (col+1)
        };
    }

    ctrl.resetSelectedTableValue = function () {
        ctrl.selectedTableValue = null;
    }
}