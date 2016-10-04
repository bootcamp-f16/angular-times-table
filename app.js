angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController($scope) {
    $scope.helloWorld = 'Hi controller';
}