/// <reference path="angular.min.js" />
var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    var items = [
        {
            Name: "Item1",
            Price: "$40"
        },
        {
            Name: "Item2",
            Price: "$10"
        },
        {
            Name: "Item3",
            Price: "$30"
        },
        {
            Name: "Item4",
            Price: "$50"
        },
        {
            Name: "Item5",
            Price: "$20"
        }
    ]

    $scope.items = items;
});