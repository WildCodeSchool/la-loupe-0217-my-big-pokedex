angular.module('app')
    .controller('DashboardController', function($scope, pokemonService, $http, LocalService) {
        pokemonService.getAll().then(function(res) {
            console.log(res.data);
            $scope.pokemons = res.data.results;
            $scope.pokemons.map(function(pkmn) {
                pkmn.id = pkmn.url.match(/([0-9]+)/g)[1];
                pkmn.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmn.id + ".png";
                return pkmn;
            });
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
            });
        };
        $scope.getOne = function(id) {
            pokemonService.getOne(id).then(function(res) {
                console.log(res.data);
                $scope.type1 = res.data.types[0].type.name;
                  if (res.data.types.length > 1) {
                $scope.type2 = res.data.types[1].type.name;
              } else $scope.type2 = res.data.types[1].type.name = hidden;
            });
        };
    });
