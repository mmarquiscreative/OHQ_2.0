// // New Angular Module
var formApp = angular.module('formApp', ['ngAnimate', 'ui.router']);

//// Global VALUES ////

// Speech Test Words/options
formApp.value('answerStrings', ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take']);

// results object to save individual sections wrong answers to
formApp.value('resultsObj', {
	cta_text: '',
	cta_url: '',
	bgNoiseIncrease: 0.05,
    globalVolume: 0.2,
    quizScore: 0,
    quizPerfectScore: 4,
    quizAns: [],
    quizCompleted: false,
    toneScore: 0,
    tonePerfectScore: 5,
    toneAns: [],
    toneCompleted: false,
    speechScore: 0,
    speechPerfectScore: 12,
    speechAns: [],
    speechCompleted: false,
    testComplete: function(someString){
        return this[(someString + 'Completed')];
        },
    resultsEmail: {
        // ** WP Menu Items:
        // email_ctaTxt
        ctaTxt: "",

        // email_hasCoupon (checkbox to include coupon)
        hasCoupon: false,
        
        // email_couponTxt
        couponTxt: "",

        // email_buttonTxt
        buttonTxt: "",

        // email_buttonUrl
        buttonUrl: "",

        useWebsite: false,

        // email_websiteUrl
        websiteUrl: "",
        websiteIconSrc: 'https://images.benchmarkemail.com/client444013/image7397365.png',
        /* websiteIconSrc: "/wp-content/plugins/OHQ_2.0/img/SM_Icons_Website.png",
*/
        useFb: false,

        // email_fbUrl
        fbUrl: "",
        fbIconSrc: "https://images.benchmarkemail.com/client444013/image7397372.png",
        /* fbIconSrc: "/wp-content/plugins/OHQ_2.0/img/SM_Icons_FB.png", */

        useTwitter: false,

        // email_twitterUrl
        twitterUrl: "",
        twitterIconSrc: 'https://images.benchmarkemail.com/client444013/image7397370.png',
        /*
        twitterIconSrc: "/wp-content/plugins/OHQ_2.0/img/SM_Icons_Twitter.png",*/

        // email_logoSrc
        logoSrc: "AwesomeAudiology_Reversed.png",

        // ** Pre-filled by quiz
        quizSectionName: "Listening Environments",
        quizSectionColor: "#008aab",
        quizSectionShade: "#00738f",

        quizPercent: "XX",
        quizMissed: ["canvas", "testing", "raddish", "quidditch", "goose"],
        quizBullets: "",

        freqSectionName: "Frequency Range",
        freqSectionColor: "#666463",
        freqSectionShade: "#3d3935",

        freqPercent: "X",
        freqMissed: ["2000hz", "10000hz", "6000hz"],
        freqBullets: "",

        speechSectionName: "Speech-In-Noise",
        speechSectionColor: "#532d6d",
        speechSectionShade: "#3d214f",

        speechPercent: "XX",
        speechMissed: ["moon", "chair", "bean"],
        speechBullets: ""
    },
    restartTest: function(){
        console.log('running restart test');
        // 1. reset Quiz
        
        this.quizScore = 0;
        this.quizAns = [];
        this.quizCompleted = false;
        
        // 2. reset Tone
        
        this.toneScore = 0;
        this.toneAns = [];
        this.toneCompleted = false;
        
        // 3. reset speech
        
        this.speechScore = 0;
        this.speechAns = [];
        this.speechCompleted = false;
        
        // 4. Stop audio
        var idArray = ['#volumeAudio', '#toneAudio', '#bgNoise'];
		
		idArray.forEach(function(cur){
			console.log(cur);
			console.log(document.querySelector(cur));
			if(document.querySelector(cur) !== null){
				document.querySelector(cur).autoplay = false;
        document.querySelector(cur).currentTime = 0;
		document.querySelector(cur).loop = false;
		document.querySelector(cur).pause();}
			else {
				console.log(cur + ' query came back as null');
			}
		});
		
        
    }
    });

// Speech Test Words/options
formApp.value('activeClass', {
quiz: 'stepNavItem',
volume: '',
tone: '',
speech: '',
results: '',
reload: function(){
    return this;
}
});
