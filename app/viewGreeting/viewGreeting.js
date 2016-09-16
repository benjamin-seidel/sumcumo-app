'use strict';

angular.module('sumcumoApp.viewGreeting', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('greeting', {
            url: '/greeting',
            templateUrl: 'viewGreeting/viewGreeting.html',
            controller: 'ViewGreetingCtrl',
            title: 'Begrüßung',
            order: 1
        });
    }])

    .controller('ViewGreetingCtrl', [function() {

    }]);