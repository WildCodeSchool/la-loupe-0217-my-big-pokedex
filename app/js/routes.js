angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        // $stateProvider
        //     .state('pokedex', {
        //         abstract: true,
        //         url: '/pokedex',
        //         views: {
        //             'navbar@': {
        //                 templateUrl: 'anon/navbar.html',
        //                 controller: 'NavbarController'
        //             }
        //         }
        //     })
        //     .state('pokedex.home', {
        //         url: '/',
        //         views: {
        //             'content@': {
        //                 templateUrl: 'pokedex/pokedexglobal.html',
        //                 controller: 'pokedexglobalController'
        //             }
        //         }
        //     });
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.pokedex', {
                url: '/pokedex',
                views: {
                    'content@': {
                        templateUrl: 'pokedex/pokedexglobal.html',
                        controller: 'pokedexglobalController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.top10', {
                url: '/top10',
                views: {
                    'content@': {
                        templateUrl: 'anon/top10.html',
                        controller: 'top10Controller'
                    }
                }
            })
            .state('anon.team', {
                url: '/team',
                views: {
                    'content@': {
                        templateUrl: 'anon/team.html',
                        controller: 'teamController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile/:id',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
