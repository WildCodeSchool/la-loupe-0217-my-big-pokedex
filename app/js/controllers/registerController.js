angular.module('app')
    .controller('RegisterController', function($scope, UserService, CurrentUser, $state, Auth) {
  $scope.register = function() {
            Auth.register($scope.user).then(function() {
                $state.go('user.profile');
            });
        };
        $scope.class = "card-register-img";
        $scope.addImage = function(name) {
                $scope.user.image = name;
        };
        $scope.images = [{
                name: "ondine",
            },
            {
                name: "sacha",
            },
            {
                name: "pierre",
            },
            {
                name: "jessie",
            },
            {
                name: "miaouss",
            },
            {
                name: "james",
            }
        ];

    });
