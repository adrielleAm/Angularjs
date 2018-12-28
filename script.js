/* Criando o modulo angular e criando um controler para o meu modulo.
    [] --> você pode colocar dependências do seu modulo.
    ["$scope", "$http" --> no controller você coloca os paramentros do seu codigo.
    ****IMPORTANTE é necessário usar esse recurso quando você ultiliza algum recurso de minifile arquivo, pois quando vc utiliza esse recurso o mesmo troca o nome dos paramentros e quando vc coloca seus paramentros nos [] vc evita essa troca de nome
    
*/
angular.module('app', [])
    .controller('appCtrl', ["$scope", "$http", function ($scope, $http) {
        // não é obrigatório declarar no model pois vc ja esta usando o 'ng-model' no html 

        var onUserComplete = function (response) {
            $scope.user = response.data;
        }
        var onError = function (reason) {
            $scope.error = "Could not find the user" + "==>" + reason.data.message;
        }


        $scope.username = "angular";
        $scope.message = 'Primeiro projeto Angular!';
        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError)
        }

    }])