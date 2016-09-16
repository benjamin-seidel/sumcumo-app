'use strict';

angular.module('sumcumoApp.navbarDirective', ['ui.router'])

    .directive('navbar', function () {
        return {
            controller: 'DirectiveNavbarCtrl',
            controllerAs: 'ctrl',
            bindToController: true,
            templateUrl: 'components/navbar/navbar-directive-tpl.html'
        };
    })

    .controller('DirectiveNavbarCtrl', ['$scope', '$state', function($scope, $state) {
        var menuItems = [];
        angular.forEach($state.get(), function (state, key) {
            if (!state.abstract) {
                menuItems.push(state);
            }
        });
        return {
            menuItems: menuItems,
            activeMenu: function (menuItem) {
                return menuItem.name === $state.current.name;
            }
        };

    }]);
