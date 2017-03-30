angular.module('app')
    .service('UserService', function($http) {
        return {
            getAll: function() {
                return $http.get('http://localhost:8000/users');
            },
            getOne: function(id) {
                return $http.get('http://localhost:8000/users/' + id);
            },
            update: function(id, user) {
                return $http.put('http://localhost:8000/users' + id, user);
            },
            delete: function(id) {
                return $http.delete('http://localhost:8000/users' + id);
            }
        };
    });
