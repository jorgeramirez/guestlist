'use strict';

// Declare app level module which depends on filters, and services
var guestlistApp = angular.module('guestlistApp', ['ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

guestlistApp.settings = {
  lsPrefix: 'guestlistapp'
};
