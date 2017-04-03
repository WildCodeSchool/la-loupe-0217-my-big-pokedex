angular.module('app')
    .controller('ProfileController', function($scope, profileService, UserService, CurrentUser, LocalService) {
        profileService.getAll().then(function(res) {
            console.log(res.data.results);
            $scope.cartridges = res.data.results;
        });
        $scope.user = {};

        var id = CurrentUser.user()._id;
        console.log(id);

        UserService.getOne(id).then(function(res) {
            $scope.user = res.data;
            console.log($scope.user);
        });

        $scope.update = function() {
            UserService.update($scope.user._id, $scope.user);
            UserService.getOne($scope.user._id).then(function(res) {
                res.data = CurrentUser.user();
            });
        };

        $scope.class = "cartridge-img";
        $scope.changeClass = function(name) {
            if ($scope.user.cartridge.indexOf(name) === -1) {
                $scope.user.cartridge.push(name);
            } else {
                $scope.user.cartridge.splice($scope.user.cartridge.indexOf(name), 1);
            }
        };



        console.log($scope.user.cartridge);
    });
