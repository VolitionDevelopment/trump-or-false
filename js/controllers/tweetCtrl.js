/**
 * Created by Jackson on 8/15/16.
 */
app.controller('tweetCtrl', function($scope, $http, $location){
    $scope.hello = "Hello World!";

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});