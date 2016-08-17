/**
 * Created by Jackson on 8/15/16.
 */
app.controller('gameCtrl', function($scope, $http, $timeout){
    $scope.tweets = tweets;
    $scope.lost = false;
    var trumpData = null;
    var trumpTweets = [];
    var userName = '';
    populate();
    generateTweets();

    function populate(){
        $http({
            method: 'GET',
            url: 'http://digitalcrafts.com/students/twitter/hashtag.php?hash=from%3ArealDonaldTrump%26result_type=popular'
        }).then(function success(data){
                trumpData = data;
                trumpTweets = trumpData.data.statuses;
                console.log(data);
                $scope.randTweet = generateTweet();
            }, function failure(data){

            }
        );

        console.log("Trump Tweets array populated.");
    }

    $scope.check = function(answer){
        if(answer === userName){
            $scope.score++;
            $scope.lost = false;
        }else{
            $scope.lost = true;
            $scope.score = 0;
            populate();
            generateTweets();
        }

        $scope.randTweet = generateTweet();

        $timeout(function(){
            $scope.lost = false;
        }, 1000);
    };

    function generateTweet(){
        var tweet;

        if(trumpTweets.length > 0 && Math.floor(Math.random() * 4) === 1){
            tweet = trumpTweets[Math.floor(Math.random() * trumpTweets.length)];
            trumpTweets.splice(trumpTweets.indexOf(tweet), 1);
            console.log(trumpTweets.length);
            console.log("REMOVED: " + tweet.text);
            console.log(trumpTweets);
            userName = tweet.user.screen_name;
        }else{
            tweet = tweets[Math.floor(Math.random() * tweets.length)];
            tweets.splice(tweets.indexOf(tweet), 1);
            userName = tweet.screen_name;
        }


        return tweet;
    }

    console.log(tweets);
    $scope.score = 0;
});