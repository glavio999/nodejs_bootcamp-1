var app = angular.module('app',  ['ngRoute','restaurantsApp', 'ngMap']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/list', {
        templateUrl : 'partials/list.html',
        controller : 'ListController'
    }).
    when('/detail/:itemId', {
        templateUrl : 'partials/detail.html',
        controller : 'DetailsController'
    }).
    otherwise({
        redirectTo : '/list'
    });
}]);