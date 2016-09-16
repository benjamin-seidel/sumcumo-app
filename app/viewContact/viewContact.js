'use strict';

angular.module('sumcumoApp.viewContact', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('contact', {
            url: '/contact',
            templateUrl: 'viewContact/viewContact.html',
            controller: 'ViewContactCtrl',
            title: 'Kontakt',
            order: 4
        });
    }])

    .controller('ViewContactCtrl', [function() {

    }]);