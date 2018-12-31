angular.module('app')
    .controller('userController', ["$scope", "service", "$routeParams",
         function ($scope, service, $routeParams) {
        // não é obrigatório declarar no model pois vc ja esta usando o 'ng-model' no html 

        var onUserComplete = function (data) {
            $scope.user = data;
            service.getRespos($scope.user).then(onRepos, onError);   
        }

        var onError = function (reason) {
            //$scope.error = "Could not find the user" + "==>" + reason.data.message;
            $scope.error = reason.data.message;
        }

        var onRepos = function (data) {
            $scope.repos = data;
        }
        
        $scope.username = $routeParams.username;
        /* orderBy:'-...' decrescente
           orderBy:'+...' crescente*/
        $scope.repoSortOrder = "-stargazers_count"; 
        service.getUser($scope.username).then(onUserComplete, onError);
       
    }])