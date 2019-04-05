// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', '$location', function ($scope, $state, resultsObj, $location) {
    var stage, headerEl, headerStyles, themePageStyles, starterZIndex;
    stage = this;
/* START: Modal Functionality */
    stage.cta_text = document.querySelector('#cta_text').textContent;
    stage.cta_url = document.querySelector('#cta_url').textContent;
    
    // resultsObj.resultsEmail.ctaTxt = stage.email_ctaTxt;


    stage.ohq_email_ctaTxt = document.querySelector('#ohq_email_ctaTxt').textContent;
    resultsObj.resultsEmail.ctaTxt = stage.ohq_email_ctaTxt;


    stage.ohq_email_hasCoupon = document.querySelector('#ohq_email_hasCoupon').textContent;

    if (stage.ohq_email_hasCoupon === "agx_includeCoupon_Yes") {
        resultsObj.resultsEmail.hasCoupon = true;
    } else {
        resultsObj.resultsEmail.hasCoupon = false;

    };



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


    resultsObj.cta_text = stage.cta_text;
    resultsObj.cta_url = stage.cta_url;

 


    // Modal Classes
    stage.modalClass = 'ohq-modal';
    stage.modalBtnOpen = 'btn-open';
    stage.modalBtnClose = 'btn-close';

    // Node
    stage.modal = document.querySelector('.ohq-modal');



    console.log(document.querySelector('#OHQ_test'));
    document.querySelector('#OHQ_test').addEventListener('click', openOHQ, false);

    function openOHQ() {
        document.querySelector('#ohq-container').style.display = 'block';
        document.querySelector('#ohq-overlay-parent').style.display = 'block';
        var test_iOS = is_iOS();



        if (test_iOS) {
            console.log('is_iOS came back true: running pre-play actions');
            resultsObj.OHQ_audio.speechTest_Master_lvl1.play();
            resultsObj.OHQ_audio.speechTest_Master_lvl1.pause();
            resultsObj.OHQ_audio.speechTest_Master_lvl2.play();
            resultsObj.OHQ_audio.speechTest_Master_lvl2.pause();
            resultsObj.OHQ_audio.speechTest_Master_lvl3.play();
            resultsObj.OHQ_audio.speechTest_Master_lvl3.pause();
        };
        $state.go('stage.intro');

        document.querySelector('body').style.overflow = 'hidden';
    }

    function is_iOS() {
        /*
        Returns whether device agent is iOS Safari
    */

        console.log(navigator.userAgent);

        var ua = navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        var webkitUa = !!ua.match(/WebKit/i);

        return webkitUa && iOS && !ua.match(/CriOS/i);

        //return typeof webkit !== 'undefined' && iOS && webkit && !ua.match(/CriOS/i);
    };
    ///////////////////////////////////////////////////////////////
    // ::AGXHearing.com::START AGX Hearing Floating Header Workaround 
    ///////////////////////////////////////////////////////////////

    /* headerEl = document.querySelector('.mk-header');
  headerStyles = window.getComputedStyle(headerEl, null);

  themePageEl = document.querySelector('#theme-page');
  themePageStyles = window.getComputedStyle(themePageEl, null);
  starterZIndex = headerStyles.zIndex;

  console.log(headerEl); */

    ///////////////////////////////////////////////////////////////
    // ::AGXHearing.com::END AGX Hearing Floating Header Workaround 
    ///////////////////////////////////////////////////////////////    


    // Toggle between stage-up and button
    stage.updateDisplay = function () {
        // var testClass, themePageZIndex, tempHeaderIndex;

        document.querySelector('#ohq-container').style.display = 'none';
        document.querySelector('#ohq-overlay-parent').style.display = 'none';

        console.log('ohq-modal-active ===> ohq-modal');
        $state.go('stage.intro');
        resultsObj.restartTest();

        document.querySelector('body').style.overflow = '';

        /*  themePageZIndex = themePageStyles.zIndex;
    tempHeaderIndex = (themePageZIndex - 1);

    console.log('headerEL is: ' + headerEl +
      'starterZIndex: ' + starterZIndex +
      '\nthemePageZIndex: ' + themePageZIndex + 
      '\ntempHeaderIndex: ' + tempHeaderIndex); */

        ///////////////////////////////////////////////////////////////
        // ::AGXHearing.com::START AGX Hearing Floating Header Workaround 
        ///////////////////////////////////////////////////////////////

        /*
      if(headerEl) {
        headerEl.style.zIndex = tempHeaderIndex;
        var nodeList = document.querySelectorAll('.mk-page-section-wrapper');

        console.log(nodeList);
        nodeList.forEach(function(cur) {
          cur.style.zIndex = 10; 
        });
      } else {
        console.log('headerEl returned false. HeaderEl was ' + headerEl);
      }; */

        /*
      if(headerEl) {
        console.log(starterZIndex);
        headerEl.style.zIndex = starterZIndex;
      } else {
        console.log('headerEl returned false. HeaderEl was ' + headerEl);
      };
      */

        ///////////////////////////////////////////////////////////////
        // ::AGXHearing.com::END AGX Hearing Floating Header Workaround 
        ///////////////////////////////////////////////////////////////

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
        }

        return returnBool;
    }

    stage.restart = function () {
        resultsObj.restartTest();
        $state.go('stage.intro');
    };


    /*
  stage.loadForm = function() {

    console.log('running test form');

    var resultsMessage = document.querySelector(".nf-quiz-message");
    var quizResults = document.querySelector(".nf-hearing-results");
    var toneResults = document.querySelector(".nf-tone-results");
    var speechResults = document.querySelector(".ninja-forms-field.nf-speech-results.nf-element");

    resultsMessage.onchange = function() {
      console.log('change noted');
    };

    console.log(resultsMessage);
    var newValue = '<p style="background: blue; width: 70%; padding: 1rem;" >70%</p>';
    jQuery( '.nf-hearing-results' ).val( newValue ).trigger( 'change' );
    console.log(resultsMessage.value);
  }
  */

}])