'use strict';

// Declare app level module
angular.module('sumcumoApp', [
  'ui.router',
  'sumcumoApp.viewCV',
  'sumcumoApp.viewGreeting',
  'sumcumoApp.viewShortProfile',
  'sumcumoApp.viewContact',
  'sumcumoApp.viewTechInformation',
  'sumcumoApp.navbarDirective'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/greeting');
}]);
