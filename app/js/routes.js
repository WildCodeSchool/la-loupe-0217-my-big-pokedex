angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('web', {
                abstract: true,
                template: '<ui-view/>'
            })
            .state('web.home', {
                url: '/',
                templateUrl: 'home.html'
            });

        $urlRouterProvider.otherwise('/');
    });
