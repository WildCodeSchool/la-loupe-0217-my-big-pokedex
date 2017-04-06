angular.module('app')
    .controller('pokedexglobalController', function($scope, pokemonService, $http, LocalService) {
        $scope.mainSpinner = true;
        pokemonService.getAll().then(function(res) {
            console.log(res.data);
            $scope.pokemons = res.data.results;
            $scope.pokemons.map(function(pkmn) {
                pkmn.id = pkmn.url.match(/([0-9]+)/g)[1];
                pkmn.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmn.id + ".png";
                return pkmn;
            });
            $scope.mainSpinner = false;
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

        function getSpeciesNumber(pokemon) {
            return pokemon.url.match(/\/([^\/]+)\/?$/)[1];
        }

        function addEvol(pokemon, evols) {
            console.log("pokemon", pokemon.species.name, "| species", evols);
            evols.push(getSpeciesNumber(pokemon.species));
            if (pokemon.evolves_to.length > 0) {
                return addEvol(pokemon.evolves_to[0], evols);
            }
            return evols;
        }
        $scope.getSpe = function(id) {
            $scope.spinner = true;
            pokemonService.getSpe(id).then(function(res) {
                console.log(res.data);
                $scope.entrie = (res.data.flavor_text_entries.filter(filterEntrie))[0].flavor_text;
                $scope.japName = (res.data.names.filter(filterJap))[0].name;
                $http.get(res.data.evolution_chain.url).then(function(res) {
                    console.log('evolution_chain :', res.data);
                    $scope.evols = addEvol(res.data.chain, []);
                    $scope.spinner = false;
                });
            }, function(err) {
                console.log('erreur', err);
            });
        };

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
                $scope.classTypes = displayClassTypes([$scope.types[$scope.types.length - 1]]);
                $scope.height = res.data.height / 10;
                $scope.weight = res.data.weight / 10;
                $scope.stats = res.data.stats;
                $scope.hp = ($scope.stats.filter(filterHp))[0].base_stat;
                $scope.att = ($scope.stats.filter(filterAtt))[0].base_stat;
                $scope.def = ($scope.stats.filter(filterDef))[0].base_stat;
                $scope.ats = ($scope.stats.filter(filterAts))[0].base_stat;
                $scope.dfs = ($scope.stats.filter(filterDfs))[0].base_stat;
                $scope.spd = ($scope.stats.filter(filterSpd))[0].base_stat;
                $scope.versions = res.data.game_indices;
                $scope.version1 = ($scope.versions[$scope.versions.length -1]).version.name;
                $scope.version2 = ($scope.versions[$scope.versions.length -2]).version.name;
            }, function(err) {
                console.log('erreur', err);
            });
        };
        $scope.clear = function() {
            $scope.japName = '';
            $scope.entrie = '';
            $scope.evols = '';
            $scope.version1 = '';
            $scope.version2 = '';
        };
        function displayClassTypes(types) {
            if (types !== undefined) {
                return types.map(function(type) {
                    return type.type.name;
                }).join(' ');
            }
        }
    });
