var app = angular.module("app", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller: "appController"
        })
        .when("/user:username", {
            templateUrl: "user.html",
            controller: "userController"
        })
        .otherwise({ redirectTo: "/main" });
})