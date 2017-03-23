angular.module('app')
    .service('pokemonService', function($http) {
      return {
          get: function(id) {
              return $http.get('https://pokeapi.co/api/v2/pokemon/' + id);
          },
          getImage: function(id) {
              return $http.get('https://pokeapi.co/media/sprites/pokemon/' + id + '.png');

          }
      };
  });
