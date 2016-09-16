'use strict';

angular.module('sumcumoApp.viewShortProfile', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('shortProfile', {
            url: '/shortProfile',
            templateUrl: 'viewShortProfile/viewShortProfile.html',
            controller: 'ViewShortProfileCtrl',
            title: 'Kurzprofil',
            order: 2
        });
    }])

    .controller('ViewShortProfileCtrl', [function() {

    }]);