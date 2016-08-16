/**
 * Created by Jackson on 8/15/16.
 */
var app = angular.module('trump-or-false', ['ngRoute', 'ngAnimate']);


app.directive('tweetHello', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/hello.html'
    }
});



app.directive('turnMeBlue', function(){
    return{
        link: function($scope, element, attrs){
            element.bind('mouseenter', function(){
                element.css('color', 'blue');
            });
            element.bind('mouseleave', function(){
                element.css('color', 'black');
            })
        }
    }
});

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'js/views/home.html',
        })

        .when('/about', {
            templateUrl: 'js/views/about.html',
            controller: 'aboutCtrl'
        })

        .when('/play', {
            templateUrl: 'js/views/game.html',
            controller: 'gameCtrl'
        })
});