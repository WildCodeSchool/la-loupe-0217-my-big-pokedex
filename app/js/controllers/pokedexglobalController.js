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
          });

          $scope.japName = '';

          function filterJap(obj) {
            return obj.language.name === "ja";
          }
          $scope.getJap = function(id) {
              pokemonService.getJap(id).then(function(res) {
                  $scope.japName = (res.data.names.filter(filterJap))[0].name;
              });

              console.log($scope.japName);

          };
      });
