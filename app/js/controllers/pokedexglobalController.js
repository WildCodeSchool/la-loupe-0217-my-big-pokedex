angular.module('app')
    .controller('pokedexglobalController', function($scope, pokemonService) {

      $scope.pokemon = [];

      pokemonService.get(id).then(function (res) {
        $scope.pokemon = res.data;
      });

      pokemonService.getImage(id).then(function (res) {
        $scope.pokemon = res.data;
      });


});
