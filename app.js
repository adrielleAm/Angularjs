var app = angular.module("app", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller: "appController"
        })
        .when("/user/:username", {
            templateUrl: "user.html",
            controller: "userController"
        })
        .when("/repo/:username/:reponame", {
            templateUrl: "repo.html",
            controller: "repoController"
        }).otherwise({ redirectTo: "/main" });
})