angular.module('app')
    .controller('top10Controller', function($scope, pokemonService, UserService, $http, LocalService) {
        $scope.allUsers = [];
        UserService.getAll().then(function(res) {
            $scope.allUsers = res.data;
            $scope.allUsers.sort(function(a, b) {
                return b.pokemonCaught.length - a.pokemonCaught.length;
            });
            $scope.allUsers[0].rank = 1;
            $scope.allUsers[1].rank = 2;
            $scope.allUsers[2].rank = 3;
            $scope.allUsers[3].rank = 4;
            $scope.allUsers[4].rank = 5;
            $scope.allUsers[5].rank = 6;
            $scope.allUsers[6].rank = 7;
            $scope.allUsers[7].rank = 8;
            $scope.allUsers[8].rank = 9;
            $scope.allUsers[9].rank = 10;
        });

    });
