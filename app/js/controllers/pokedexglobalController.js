  angular.module('app')
      .controller('pokedexglobalController', function($scope, pokemonService, $http, LocalService) {


          function localStorage(pokemon) {
              if (LocalService.get('pokemon') === true) {
                  LocalService.get('pokemon');
              } else {
                  $http.get('https://pokeapi.co/api/v2/pokemon/');
                  LocalService.set('makey', 'pokemon');
              }
          }

          $scope.pokemons = [];

          pokemonService.getAll().then(function(res) {
              $scope.pokemons = res.data.results;
              $scope.pokemons.forEach(function(pokemon, i) {
                  $http.get(pokemon.url).then(function(res) {
                      $scope.pokemons[i] = res.data;
                  });
              });
              console.log($scope.pokemons);
              console.log(LocalService.get('makey'));



              // pokemonService.get(id).then(function (res) {
              //   $scope.pokemon = res.data;
              // });
              //
              // pokemonService.getImage(id).then(function (res) {
              //   $scope.pokemonImage = res.data;
              //   console.log();
              // });

          });
      });
