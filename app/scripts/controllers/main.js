'use strict';

angular.module('app')
  .controller('MainCtrl', ['$http', '$scope', function($http, $scope) {
    $scope.title = 'Home Page';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.array = [];
    var getArray = function() {
      $http.get('/api/v1/home')
        .success(function(data){
          console.log(data);
          $scope.array = data;
        })
        .error(function(data){
          console.log('error', data);
          return data;
        });
    };

    console.log('checking MainCtrl...');
    getArray();
  }]);
