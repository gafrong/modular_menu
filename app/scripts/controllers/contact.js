'use strict';

angular.module('app')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.title = 'Contact';
    $scope.contacts = [
      'what',
      'is',
      'going',
      'something',
      'supposed to',
      'happen'
    ];
  }]);
