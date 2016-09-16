'use strict';

angular.module('sumcumoApp.viewCV', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('cv', {
            url: '/cv',
            templateUrl: 'viewCV/viewCV.html',
            controller: 'ViewCVCtrl',
            title: 'Lebenslauf',
            order: 3
        });
    }])

    .controller('ViewCVCtrl', [function() {

    }]);