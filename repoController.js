angular.module("app")
    .controller("repoController", ["$scope", "$routeParams", "service",
        function ($scope, $routeParams, service) {

            var onRepo = function (data) {
                $scope.repo = data;
            };

            var onErro = function (reason) {
                $scope.error = reason.data.message;
            }

            var reponame = $routeParams.reponame;
            var username = $routeParams.username;

            service.getRepoDetails(username, reponame)
                .then(onRepo, onErro);
        }]); 