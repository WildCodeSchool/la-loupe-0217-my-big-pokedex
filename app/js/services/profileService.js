angular.module('app')
    .service('profileService', function($http) {
        return {
            getAll: function(id) {
                return $http.get('https://pokeapi.co/api/v2/version/?limit=26');
            },
            updatecartridge: function (cartridge) {
                return $http.put('/', cartridge)
            },
        };
    });
