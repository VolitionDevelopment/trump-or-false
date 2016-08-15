/**
 * Created by Jackson on 8/15/16.
 */
app.controller('gameCtrl', function($scope){
    $scope.tweets = [
        {
            content: "The only good thing about Hillary Clinton being the Founder of ISIS is that everything she's involved in eventually fails.",
            real: 'false'
        },
        {
            content: "Bill Maher is considering giving Hillary Clinton $1 million to come on his show, which is odd since he usually pays women to come on them!",
            real: 'false'
        },
        {
            content: "I'm not surprised the Muslim in Belgium with the machete yelled  \"Allahu Akbar\" but I am surprised Hillary didn't have him speak at the DNC.",
            real: 'false'
        },
        {
            content: "Yeah my recent poll numbers look bad, but this is America where anything is possible, like a guy from Kenya getting elected President!",
            real: 'false'
        },
        {
            content: "Clint Eastwood described the current election as the Good, the Bad, and the Ugly.  I'm the Good, Obama is the Bad, and Hillary is the Ugly!",
            real: 'false'
        },
        {
            content: "$400 million in cash to Iran for 4 hostages?!  Obama would be a much better negotiator if put down the Koran and picked up Art of the Deal.",
            real: 'false'
        },
        {
            content: "#PurpleHeartDay is a time to honor myself and the other brave Americans who received this medal.",
            real: 'false'
        },
        {
            content: "Trump Taj Mahal has been forced to close after I made the mistake of inviting Chris Christie to the all-you-can-eat buffet.",
            real: 'false'
        },
        {
            content: "It's too bad Mel Gibson wasn't our President because he'd never pay $400 million in ransom to Iran!",
            real: 'false'
        },
        {
            content: "Crooked Hillary hates glass ceilings almost as much as she hates glass mirrors, which isn't uncommon for a vampire.   #ImWithHer",
            real: 'false'
        },
        {
            content: "I'd rather have my Trump ties made in China than have my foreign policy made in Saudi Arabia like Crooked Hillary's is.  #ImWithHerNow",
            real: 'false'
        },
        {
            content: "Truly weird Senator Rand Paul of Kentucky reminds me of a spoiled brat without a properly functioning brain. He was terrible at DEBATE!",
            real: 'trump'
        },
        {
            content: "Remember, new \"environment friendly\" lightbulbs can cause cancer. Be careful-- the idiots who came up with this stuff don't care.",
            real: 'trump'
        },
        {
            content: "If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?",
            real: 'trump'
        },
        {
            content: "I just realized that if you listen to Carly Fiorina for more than ten minutes straight, you develop a massive headache. She has zero chance!",
            real: 'trump'
        },
        {
            content: "Amazing how the haters & losers keep tweeting the name \"F**kface Von Clownstick\" like they are so original & like no one else is doing it...",
            real: 'trump'
        },
        {
            content: "@ariannahuff is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.",
            real: 'trump'
        },
        {
            content: "I would like to wish everyone, including all haters and losers (of which, sadly, there are many) a truly happy and enjoyable Memorial Day!",
            real: 'trump'
        },
        {
            content: "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",
            real: 'trump'
        },
        {
            content: "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
            real: 'trump'
        },
        {
            content: "How amazing, the State Health Director who verified copies of Obama’s “birth certificate” died in plane crash today. All others lived",
            real: 'trump'
        },
        {
            content: "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body",
            real: 'trump'
        },
        {
            content: "I went to an Ivy-league school, I'm very highly educated, I know words, I have the best words.",
            real: 'trump'
        },
        {
            content: "It doesn't really matter what the media write as long as you've got a young and beautiful piece of ass",
            real: 'trump'
        }
    ];

    $scope.randTweet = $scope.tweets[Math.floor(Math.random() * $scope.tweets.length)];


    $scope.check = function(answer){
        if(answer === $scope.randTweet.real){
            $scope.score++;
        }else{
            alert("Incorrect!!");
        }

        $scope.tweets.splice($scope.tweets.indexOf($scope.randTweet), 1);
        $scope.randTweet = $scope.tweets[Math.floor(Math.random() * $scope.tweets.length)];
    };

    $scope.score = 0;
});