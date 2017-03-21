angular.module('app')
    .controller('pokedexglobalController', function($scope) {


      pokemonService.get().then(function (res) {
        $scope.pokemon = res.data;
      });

      pokemonService.getImage().then(function (res) {
        $scope.pokemon = res.data;
      });


});
