/*  referencia a um modulo existente */
var service = angular.module("app")
    .factory("service", function ($http) {

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

        var getRepoDetails = function (username, reponame) {
            var repo;

            var repos_url = "https://api.github.com/repos/"
                + username + "/" + reponame;

            return $http.get(repos_url).then(function (response) {
                repo = response.data;
                //return $http.get(repos_url + "/collaborators");

            })
            /* .then(function (response) {
                repo.collaborators = response.data;
                return repo;
            }) */
            return repo;
        }

        return {
            getUser: getUser,
            getRespos: getRespos,
            getRepoDetails: getRepoDetails
        };

    })
