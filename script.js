/* Criando o modulo angular e criando um controler para o meu modulo.
    [] --> você pode colocar dependências do seu modulo.
    ["$scope", "$http" --> no controller você coloca os paramentros do seu codigo.
    ****IMPORTANTE é necessário usar esse recurso quando você ultiliza algum recurso de minifile arquivo, pois quando vc utiliza esse recurso o mesmo troca o nome dos paramentros e quando vc coloca seus paramentros nos [] vc evita essa troca de nome
    
*/
angular.module('app', [])
    .controller('appCtrl', ["$scope", "service", "$interval", "$log", "$anchorScroll", "$location",
         function ($scope, service, $interval, $log, $anchorScroll, $location) {
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
            $location.hash("userdetails");
            //na janela do navegador mostra o elemento userdetails e "rola ate o elemento"
            $anchorScroll();
        }
        var decrementCountDown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }

        var countDownInterval = null;
        /* o terceiro paramentro é quantas vezes vc deseja chamar o serviço interval ()*/
        var starCountdown = function () {
            countDownInterval = $interval(decrementCountDown, 1000, $scope.countdown)
        }


        $scope.username = "angular";
        $scope.message = 'Primeiro projeto Angular!';
        /* orderBy:'-...' decrescente
           orderBy:'+...' crescente*/
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        $scope.user = null;
        starCountdown();
        $scope.search = function (username) {
           /* $log é um serviço */
            $log.info("Searching for " + username);
            service.getUser(username).then(onUserComplete, onError);
                if(countDownInterval)
                    $interval.cancel(countDownInterval);
                    $scope.countdown = null;


        }

    }])