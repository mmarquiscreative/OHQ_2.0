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

    stage.formAfterResults = false;
    stage.formBeforeResults = true;


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
        } else {
            console.log('No match. Current style is ' + stage.modalClass);
        };
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
                stage.formAfterResults = true;
                stage.formBeforeResults = false;
                break;
            case 'exit':
                returnBool = $state.$current.includes['stage.exit'];
                break;
            default:
                console.log('stage.testBool no match');
                break;
        };
        return returnBool;
    };

    stage.restart = function () {
        resultsObj.restartTest();
stage.formAfterResults = false;
                stage.formBeforeResults = true;
                $state.go('stage.intro');
    };
stage.hasResults = function (){
console.log('has results run');
return stage.resultsReady;
console.log('has results finish');
};
   stage.loadForm = function(){

	console.log('running test form');

	document.querySelector("#nf-field-5").value = 'test';
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