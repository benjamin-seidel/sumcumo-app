'use strict';

angular.module('sumcumoApp.viewTechInformation', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('techInformation', {
            url: '/techInformation',
            templateUrl: 'viewTechInformation/viewTechInformation.html',
            controller: 'ViewTechInformationCtrl',
            title: 'Technische Informationen',
            order: 5
        });
    }])

    .controller('ViewTechInformationCtrl', [function() {

    }]);