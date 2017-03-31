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

        $scope.getOne = function(id) {
            $scope.spinner = true;
            pokemonService.getOne(id).then(function(res) {
                console.log(res.data);
                $scope.types = res.data.types;
                $scope.height = res.data.height / 10;
                $scope.weight = res.data.weight / 10;
                console.log($scope.types);
                $scope.spinner = false;
            }, function(err) {
                console.log('erreur', err);
            });
        };


        $scope.clear = function() {
            $scope.japName = '';
            $scope.entrie = '';
            $scope.type1 = '';
            $scope.type2 = '';
        };

        $scope.hasPokemon = function(id) {
            return $scope.pokemonCaught.indexOf(id) != -1;
        };
        $scope.hasnotPokemon = function(id) {
            return $scope.pokemonCaught.indexOf(id) == -1;
        };

        $scope.pokemonCaught = [];

        $scope.addPokemon = function(id) {
            $scope.pokemonCaught.push(id);
            console.log($scope.pokemonCaught);
        };
    });
