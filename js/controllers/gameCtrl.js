/**
 * Created by Jackson on 8/15/16.
 */
app.controller('gameCtrl', function($scope, $http, $timeout){
    $scope.tweets = tweets;
    $scope.lost = false;
    var trumpData = null;
    var userName = '';

    $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?hash=from%3ArealDonaldTrump%26result_type=popular'
    }).then(function success(data){
            trumpData = data;
            console.log(data);
            $scope.randTweet = generateTweet();
        }, function failure(data){

        }
    );

    $scope.check = function(answer){
        if(answer === userName){
            $scope.score++;
            $scope.lost = false;
        }else{
            $scope.lost = true;
            $scope.score = 0;
        }

        $scope.randTweet = generateTweet();

        $timeout(function(){
            $scope.lost = false;
        }, 1000);
    };

    function generateTweet(){
        var tweet;
        if(Math.floor(Math.random() * 2) === 1){
            tweet = tweets[Math.floor(Math.random() * tweets.length)];
            userName = tweet.screen_name;

        }else{
            tweet = trumpData.data.statuses[Math.floor(Math.random() * trumpData.data.statuses.length)];
            userName = tweet.user.screen_name;
        }

        return tweet;
    }

    console.log(tweets);
    $scope.score = 0;


});