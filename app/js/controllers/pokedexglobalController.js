  angular.module('app')
      .controller('pokedexglobalController', function($scope, pokemonService, $http, LocalService) {
        pokemonService.getAll().then(function(res) {
          console.log(res.data);
          $scope.pokemons = res.data.results;
          $scope.pokemons.map(function(pkmn) {
              pkmn.id = pkmn.url.match(/([0-9]+)/g)[1];
              pkmn.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmn.id + ".png";
              return pkmn;
          });
        });

      });
