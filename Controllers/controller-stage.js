// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', '$location', function ($scope, $state, resultsObj, $location) {
    var stage = this;

    /* START: Modal Functionality */
    stage.cta_text = document.querySelector('#cta_text').textContent;
    stage.cta_url = document.querySelector('#cta_url').textContent;

    resultsObj.cta_text = stage.cta_text;
    resultsObj.cta_url = stage.cta_url;

    // resultsObj.resultsEmail.ctaTxt = stage.email_ctaTxt;


    stage.ohq_email_ctaTxt = document.querySelector('#ohq_email_ctaTxt').textContent;
    resultsObj.resultsEmail.ctaTxt = stage.ohq_email_ctaTxt;


    stage.ohq_email_hasCoupon = document.querySelector('#ohq_email_hasCoupon').textContent;

    if (stage.ohq_email_hasCoupon === "agx_includeCoupon_Yes") {
        resultsObj.resultsEmail.hasCoupon = true;
    } else {
        resultsObj.resultsEmail.hasCoupon = false;

    };
    stage.resultsObj = resultsObj;
    console.log(stage.resultsObj);
    stage.resultsObj.formAfterResults = false;
    stage.resultsObj.formBeforeResults = true;


    stage.ohq_email_couponTxt = document.querySelector('#ohq_email_couponTxt').textContent;
    resultsObj.resultsEmail.couponTxt = stage.ohq_email_couponTxt;


    stage.ohq_email_buttonTxt = document.querySelector('#ohq_email_buttonTxt').textContent;
    resultsObj.resultsEmail.buttonTxt = stage.ohq_email_buttonTxt;


    stage.ohq_email_buttonUrl = document.querySelector('#ohq_email_buttonUrl').textContent;
    resultsObj.resultsEmail.buttonUrl = stage.ohq_email_buttonUrl;


    stage.ohq_email_websiteUrl = document.querySelector('#ohq_email_websiteUrl').textContent;
    resultsObj.resultsEmail.websiteUrl = stage.ohq_email_websiteUrl;


    stage.ohq_email_fbUrl = document.querySelector('#ohq_email_fbUrl').textContent;
    resultsObj.resultsEmail.fbUrl = stage.ohq_email_fbUrl;


    stage.ohq_email_twitterUrl = document.querySelector('#ohq_email_twitterUrl').textContent;
    resultsObj.resultsEmail.twitterUrl = stage.ohq_email_twitterUrl;


    stage.ohq_email_logoSrc = document.querySelector('#ohq_email_logoSrc').textContent;
    resultsObj.resultsEmail.logoSrc = stage.ohq_email_logoSrc;


    stage.subscribeEmailHTML = (' <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #d3d3d3; font-family: arial, sans-serif; padding-top: 40px;"><tr style="padding: 80px, 0px; height: 30px;"><td>&nbsp;</td></tr><tr style="padding: 80px, 0px;"><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="600px" style="border-collapse: collapse; background-color: #ffffff; padding: 20px 20px 20px 20px;"><tr><td>&nbsp;</td></tr><tr align="center"><td bgcolor="#ffffff" style="padding: 0px 10px 0px 10px; "><p width="100%" style="display: block; font-size: 30px;"><strong>You have successfully subscribed to our eNewsletter!</strong></p></td></tr><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse= collapse; max-width: 540px;"><tr><td align="center" style="color: #000000; font-size: 20px; padding: 10px 10px 10px 10px;">xxSome line about how good things are in their future!xx</td></tr></table></td></tr><tr style="padding: 80px, 0px; height: 30px;"><td>&nbsp;</td></tr><tr bgcolor="#512D6D"><td><table bgcolor="#512D6D" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; padding: 10px 10px 10px 10px;"><tr style="padding: 80px, 0px; height: 10px;"><td>&nbsp;</td></tr><tr align="center" style="color: #ffffff; font-size: 20px; padding: 10px 10px 10px 10px;"><td width="33%" style="padding: 10px 10px 10px 10px;"><a href="' + resultsObj.resultsEmail.websiteUrl + '"><img src="' + resultsObj.resultsEmail.logoSrc + '" style="display: block;" width="200px" /></a></td></tr><tr><td>&nbsp;</td></tr></table></td></tr></table></td></tr><tr><td style="padding: 80px, 0px; height: 40px;">&nbsp;</td></tr></table>');

    jQuery('.ohq-ninja-form-html-subscribe').val(stage.subscribeEmailHTML).trigger('change');


    console.log(stage.subscribeEmailHTML);

    // Modal Classes
    stage.modalClass = 'ohq-modal';
    stage.modalBtnOpen = 'btn-open';
    stage.modalBtnClose = 'btn-close';

    // Node
    stage.modal = document.querySelector('.ohq-modal');


    // Toggle between stage-up and button
    stage.updateDisplay = function () {
        console.log('Taesting ' + stage.modalClass);

        var testClass = stage.modalClass;

        if (testClass === 'ohq-modal') {
            /* document.querySelector('#ohq-container').style.display = 'block'; */
            $state.go('stage.intro');

            stage.modalClass = 'ohq-modal-active';

            console.log('ohq-modal ===> ohq-modal-active');

        } else if (testClass === 'ohq-modal-active') {
            /* document.querySelector('#ohq-container').style.display = 'hidden'; */
            stage.modalClass = 'ohq-modal';

            console.log('ohq-modal-active ===> ohq-modal');
            $state.go('stage.intro');
            resultsObj.restartTest();
            stage.resultsObj.formAfterResults = false;
            stage.resultsObj.formBeforeResults = true;
        } else {
            console.log('No match. Current style is ' + stage.modalClass);
        };

        setTimeout(function () {
            // 2. compare answers to key
            $scope.$apply(function () {
                console.log('apply ng-show change for exit');
            });
        }, 100);
    };


    /* END: Modal Functionality */

    stage.testBool = function (stageName) {
        var returnBool;




        switch (stageName) {
            case 'intro':
                returnBool = $state.$current.includes['stage.intro'];
                break;
            case 'quiz':
                returnBool = $state.$current.includes['stage.quiz'];
                break;
            case 'volume':
                returnBool = $state.$current.includes['stage.volume'];
                break;
            case 'tone':
                returnBool = $state.$current.includes['stage.toneTest'];
                break;
            case 'speech':
                returnBool = $state.$current.includes['stage.speechTest'];
                break;
            case 'results':
                returnBool = $state.$current.includes['stage.results'];
                break;

            case 'exit':
                returnBool = $state.$current.includes['stage.exit'];
                break;
            default:
                console.log('stage.testBool no match');
                break;
        };



        if (returnBool === undefined) {
            returnBool = false;
        };


        return returnBool;
    };


    stage.restart = function () {
        resultsObj.restartTest();
        stage.formAfterResults = false;
        stage.formBeforeResults = true;
        $state.go('stage.intro');
        setTimeout(function () {
            // 2. compare answers to key
            $scope.$apply(function () {
                console.log('apply ng-show change for exit');
            });
        }, 100);
    };
    stage.hasResults = function () {
        console.log('has results run');
        return stage.resultsReady;
        console.log('has results finish');
    };
    stage.loadForm = function () {

        console.log('running test form');

        /* var quizResults = document.querySelector(".nf-hearing-results");
	var toneResults = document.querySelector(".nf-tone-results");
	var speechResults = document.querySelector(".ninja-forms-field.nf-speech-results.nf-element");
		resultsMessage.onchange = function(){
        console.log('change noted');
    };
	console.log(resultsMessage);
		var newValue = '<p style="background: blue; width: 70%; padding: 1rem;" >70%</p>';

       jQuery( '.nf-hearing-results' ).val( newValue ).trigger( 'change' );



		console.log(resultsMessage.value); */
    }

}])
