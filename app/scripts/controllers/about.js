'use strict';

angular.module('app')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.title = 'about';
    $scope.abouts = [
      'one',
      'two',
      'three'
    ];
    $scope.time = 'Saturday';
  }]);
