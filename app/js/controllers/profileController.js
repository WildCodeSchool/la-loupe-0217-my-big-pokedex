angular.module('app')
    .controller('ProfileController', function($scope, profileService, UserService, CurrentUser, LocalService) {
        profileService.getAll().then(function(res) {
            console.log(res.data.results);
            $scope.cartridges = res.data.results;
        });

        $scope.user = CurrentUser.user();
        console.log($scope.user);

        $scope.update = function() {
            UserService.update($scope.user._id, $scope.user)
            //.then(UserService.getOne());

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
