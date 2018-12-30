/* Criando o modulo angular e criando um controler para o meu modulo.
    [] --> você pode colocar dependências do seu modulo.
    ["$scope", "$http" --> no controller você coloca os paramentros do seu codigo.
    ****IMPORTANTE é necessário usar esse recurso quando você ultiliza algum recurso de minifile arquivo, pois quando vc utiliza esse recurso o mesmo troca o nome dos paramentros e quando vc coloca seus paramentros nos [] vc evita essa troca de nome
    
*/
angular.module('app')
    .controller('appController', ["$scope", "$interval", "$location",
        function ($scope, $interval, $location) {
            // não é obrigatório declarar no model pois vc ja esta usando o 'ng-model' no html 
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

            $scope.search = function (username) {
                if (countDownInterval) {
                    $interval.cancel(countDownInterval);
                    $scope.countdown = null;
                }
                $location.path("/user/" + username);
            };

            $scope.username = "angular";
            $scope.countdown = 5;
            starCountdown();

        }])