angular.module('app')
    .controller('top10Controller', function($scope, pokemonService, UserService, $http, LocalService) {
        $scope.allUsers = [];
        UserService.getAll().then(function(res) {
            $scope.allUsers = res.data;
            $scope.allUsers.sort(function(a, b) {
                return b.pokemonCaught.length - a.pokemonCaught.length;
            });
            for (var i = 0; i < $scope.allUsers.length; i++) {
                $scope.allUsers[i].rank = i + 1;
            }
        });

    });
