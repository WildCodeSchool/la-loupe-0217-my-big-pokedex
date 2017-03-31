angular.module('app')
    .controller('ProfileController', function($scope, profileService, CurrentUser) {
        profileService.getAll().then(function(res) {
            console.log(res.data.results);
            $scope.cartridges = res.data.results;
        });

        $scope.user = CurrentUser.user();

        $scope.putcartridge = function(user) {
          profileService.updatecartridge($scope.newUser)
            console.log(user);
        };

        $scope.class = "cartridge-img";
        $scope.changeClass = function(name) {
          if($scope.selected.indexOf(name) === -1) {
            $scope.selected.push(name);}
            else {$scope.selected.splice($scope.selected.indexOf(name), 1);}
        };
        $scope.selected =[];
        console.log($scope.selected);
    });
