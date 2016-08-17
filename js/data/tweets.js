/**
 * Created by Jackson on 8/16/16.
 */

var tweets = [];

function generateTweets(){
    tweets = [
        {
            text: "The only good thing about Hillary Clinton being the Founder of ISIS is that everything she's involved in eventually fails.",
            screen_name: 'false'
        },
        {
            text: "Bill Maher is considering giving Hillary Clinton $1 million to come on his show, which is odd since he usually pays women to come on them!",
            screen_name: 'false'
        },
        {
            text: "I'm not surprised the Muslim in Belgium with the machete yelled  \"Allahu Akbar\" but I am surprised Hillary didn't have him speak at the DNC.",
            screen_name: 'false'
        },
        {
            text: "Yeah my recent poll numbers look bad, but this is America where anything is possible, like a guy from Kenya getting elected President!",
            screen_name: 'false'
        },
        {
            text: "Clint Eastwood described the current election as the Good, the Bad, and the Ugly.  I'm the Good, Obama is the Bad, and Hillary is the Ugly!",
            screen_name: 'false'
        },
        {
            text: "$400 million in cash to Iran for 4 hostages?! Obama would be a much better negotiator if put down the Koran and picked up Art of the Deal.",
            screen_name: 'false'
        },
        {
            text: "#PurpleHeartDay is a time to honor myself and the other brave Americans who received this medal.",
            screen_name: 'false'
        },
        {
            text: "Trump Taj Mahal has been forced to close after I made the mistake of inviting Chris Christie to the all-you-can-eat buffet.",
            screen_name: 'false'
        },
        {
            text: "It's too bad Mel Gibson wasn't our President because he'd never pay $400 million in ransom to Iran!",
            screen_name: 'false'
        },
        {
            text: "Crooked Hillary hates glass ceilings almost as much as she hates glass mirrors, which isn't uncommon for a vampire.   #ImWithHer",
            screen_name: 'false'
        },
        {
            text: "I'd rather have my Trump ties made in China than have my foreign policy made in Saudi Arabia like Crooked Hillary's is.  #ImWithHerNow",
            screen_name: 'false'
        },
        {
            text: "Our country needs Hillary Clinton like JFK needs another hole in his head! #MakeAmericaGreatAgain",
            screen_name: 'false'
        },
        {
            text: "Watching the Olympics. Impressed by the Mexican pole vaulters. I know where they practiced! #borderwall",
            screen_name: 'false'
        },
        {
            text: "I'm boycotting the Presidential #debate if that blonde bimbo Megyn Kelly moderates it #foxnews",
            screen_name: 'false'
        },
        {
            text: "Good, now loser @TedCruz can go back to Zodiac Killing.",
            screen_name: 'false'
        },
        {
            text: "Who let you out of the retirement home @BernieSanders",
            screen_name: 'false'
        },
        {
            text: "We need to end social security. It will save us trillions. Seniors already get a 10% discount at Denny's. Isn't that enough?",
            screen_name: 'false'
        },
        {
            text: "This is more boring than Hillary in bed!!!! #DemDabate",
            screen_name: 'false'
        },
        {
            text: "Someone check Bernie Sander's pulse. Is he still alive?? #DemDebate",
            screen_name: 'false'
        },
        {
            text: "Who is ready for the debate tonight? I can't wait to watch that wet blanket Hilary babble. It's like watching a cum stained blanket dry.",
            screen_name: 'false'
        },
        {
            text: "A lot of really talented and intelligent people seem to think that Ted Cruz is the Zodiac Killer",
            screen_name: 'false'
        },
        {
            text: "Truly weird Senator Rand Paul of Kentucky reminds me of a spoiled brat without a properly functioning brain. He was terrible at DEBATE!",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "Remember, new \"environment friendly\" lightbulbs can cause cancer. Be careful-- the idiots who came up with this stuff don't care.",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "I just realized that if you listen to Carly Fiorina for more than ten minutes straight, you develop a massive headache. She has zero chance!",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "Amazing how the haters & losers keep tweeting the name \"F**kface Von Clownstick\" like they are so original & like no one else is doing it...",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "@ariannahuff is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "I would like to wish everyone, including all haters and losers (of which, sadly, there are many) a truly happy and enjoyable Memorial Day!",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "How amazing, the State Health Director who verified copies of Obama's \"birth certificate\" died in a plane crash today. All others lived",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "I went to an Ivy-league school, I'm very highly educated, I know words, I have the best words.",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "It doesn't really matter what the media write as long as you've got a young and beautiful piece of ass",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "The only kind of people I want counting my money are little short guys that wear Yamakas every day.",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "@cher - I don't wear a \"rug\" - it's mine. And I promise not to talk about your massive plastic surgeries that didn't work.",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "Healthy young child goes to doctor, gets pumped with massive shot of many vaccines, doesn't feel good and changes - AUTISM. Many such cases!",
            screen_name: 'realDonaldTrump'
        },
        {
            text: "26,000 unreported sexual assults in the military-only 238 convictions. What did these geniuses expect when they put men & women together?",
            screen_name: 'realDonaldTrump'
        }
    ];
}