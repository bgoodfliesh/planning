var myApp = angular.module('trendr', [
  'ngRoute',
  'app.home',

  ])


// myApp.controller('MainController', ['$scope', function($scope){ }])



myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './app/home/homeView.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    })
})