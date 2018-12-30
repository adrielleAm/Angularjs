(function () {
    var service = function ($http) {
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        }
        var getRespos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                })
        };

        return {
            getUser: getUser,
            getRespos: getRespos
        };
    };


    /*  referencia a um modulo existente */
    var servico = angular.module("app");
    servico.factory("service", service);
}());


