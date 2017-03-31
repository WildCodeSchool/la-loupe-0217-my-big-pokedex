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
          }, function(err) {
              console.log('erreur', err);
          });
          $scope.japName = '';

          function filterJap(obj) {
              return obj.language.name === "ja";
          }
          $scope.entrie = '';

          function filterEntrie(objEntrie) {
              return objEntrie.version.name === "alpha-sapphire" && objEntrie.language.name === "en";
          }
          $scope.getSpe = function(id) {
              pokemonService.getSpe(id).then(function(res) {
                  $scope.entrie = (res.data.flavor_text_entries.filter(filterEntrie))[0].flavor_text;
                  $scope.japName = (res.data.names.filter(filterJap))[0].name;
              }, function(err) {
                  console.log('erreur', err);
              });
          };

          $scope.spinner = true;

          function filterHp(obj) {
              return obj.stat.url === "https://pokeapi.co/api/v2/stat/1/";
          }
          function filterAtt(obj) {
              return obj.stat.url === "https://pokeapi.co/api/v2/stat/2/";
          }
          function filterDef(obj) {
              return obj.stat.url === "https://pokeapi.co/api/v2/stat/3/";
          }
          function filterAts(obj) {
              return obj.stat.url === "https://pokeapi.co/api/v2/stat/4/";
          }
          function filterDfs(obj) {
              return obj.stat.url === "https://pokeapi.co/api/v2/stat/5/";
          }
          function filterSpd(obj) {
              return obj.stat.url === "https://pokeapi.co/api/v2/stat/6/";
          }

          $scope.getOne = function(id) {
              $scope.spinner = true;
              pokemonService.getOne(id).then(function(res) {
                  console.log(res.data);
                  $scope.types = res.data.types;
                  $scope.height = res.data.height / 10;
                  $scope.weight = res.data.weight / 10;
                  console.log($scope.types);
                  $scope.spinner = false;
                  $scope.stats = res.data.stats;
                  $scope.hp = ($scope.stats.filter(filterHp))[0].base_stat;
                  $scope.att = ($scope.stats.filter(filterAtt))[0].base_stat;
                  $scope.def = ($scope.stats.filter(filterDef))[0].base_stat;
                  $scope.ats = ($scope.stats.filter(filterAts))[0].base_stat;
                  $scope.dfs = ($scope.stats.filter(filterDfs))[0].base_stat;
                  $scope.spd = ($scope.stats.filter(filterSpd))[0].base_stat;
              }, function(err) {
                  console.log('erreur', err);
              });
          };


          $scope.clear = function() {
              $scope.japName = '';
              $scope.entrie = '';
          };
      });
