angular.module('app')
    .service('pokemonService', function($http) {
        return {
            getAll: function(id) {
                return $http.get('https://pokeapi.co/api/v2/pokemon/?limit=811');
            },
            getSpe: function(id) {
                return $http.get('https://pokeapi.co/api/v2/pokemon-species/' + id);
            },
            getOne: function(id) {
                return $http.get('https://pokeapi.co/api/v2/pokemon/' + id);
            }
        };
    });
