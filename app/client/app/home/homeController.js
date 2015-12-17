var home = angular.module('app.home', [])

home.controller('HomeController', ['$scope', '$http', function($scope, $http){
  $scope.val;
  $scope.api = function(){
    $http({
        method: 'GET',
        // data: {data: },
        url: '/api'
      }).then(function(resp){
        console.log('client got data back')
        $scope.val = resp.data;
      });
    }

  
}])