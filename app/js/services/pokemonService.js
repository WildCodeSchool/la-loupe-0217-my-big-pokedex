angular.module('app')
    .service('PokedexService', function($http) {
      return {
          get: function(id) {
              return $http.get('https://pokeapi.co/api/v2/pokemon/' + id);
          },
          getImage: function(id) {
              return $http.get('https://pokeapi.co/media/sprites/pokemon/' + id + '.png');

          }
      };
  });
