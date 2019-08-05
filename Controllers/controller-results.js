angular.module('formApp').controller('resultsController', ['$scope', 'resultsObj', function ($scope, resultsObj) {

    // Uses keyword to keep $scope specific to this controller
    var results = this;

    //// ---- VARIABLES ---- ////
    results.wrongAns = resultsObj;
    results.wrongAns.speechAnsClean = removeDuplicates(results.wrongAns.speechAns);
    results.score = 0;
    results.testRotate = 180;

    results.cta_text = resultsObj.cta_text;
    console.log(results.cta_url);
    results.cta_url = resultsObj.cta_url;
results.scoreSummaryTxt = '';
    results.totalScore = {
        name: 'totalScore',
        percentScore: 0,
        fillRotation: 'rotate(0deg)',
        fixRotation: 'rotate(0deg)',
        halfRotation: 'rotate(0deg)',
        halfFixRotation: 'rotate(0deg)',
        color: '#cf504e',
        border: '"' + ("solid " + results.color + " 1px") + '"',
        copy: '',
        copyOptions: ['Based on your results, we highly recommend coming in for a hearing screening. Click below to find an AudigyCertified Practice near you!', 'Based on your results, it\'s likely you would greatly benefit from professionally fitted hearing technology. Click below to find an AudigyCertified Practice near you!', 'Based on your results, it is likely you would benefit from a hearing screening. Click below to find an AudigyCertified Practice near you!', 'You scored very well. However there are still additional things that our professionals can help you address, such as custom hearing protection and tinnitus solutions. Click below to find an AudigyCertified practice near you!', 'You got a perfect score! However, since this is only an online test, it\'s still possible you may have a hearing loss. Click below to find an AudigyCertified practice near you!'],
        copyOptionsNoCTA: ['Based on your results, we highly recommend coming in for a hearing screening.', 'Based on your results, it\'s likely you would greatly benefit from professionally fitted hearing technology.', 'Based on your results, it is likely you would benefit from a hearing screening.', 'You scored very well. However there are still additional things that our professionals can help you address, such as custom hearing protection and tinnitus solutions.', 'You got a perfect score! However, since this is only an online test, it\'s still possible you may have a hearing loss.']
    }

    results.quizScore = {
        name: 'quizScore',
        percentScore: 0,
        fillRotation: 'rotate(0deg)',
        fixRotation: 'rotate(0deg)',
        halfRotation: 'rotate(0deg)',
        halfFixRotation: 'rotate(0deg)',
        color: '#cf504e',
        border: '"' + ("solid " + results.color + " 1px") + '"'
    }

    results.toneScore = {
        name: 'toneScore',
        percentScore: 0,
        fillRotation: 'rotate(0deg)',
        fixRotation: 'rotate(0deg)',
        halfRotation: 'rotate(0deg)',
        halfFixRotation: 'rotate(0deg)',
        color: '#cf504e',
        border: '"' + ("solid " + results.color + " 1px") + '"'
    }

    results.speechScore = {
        name: 'speechScore',
        percentScore: 0,
        fillRotation: 'rotate(0deg)',
        fixRotation: 'rotate(0deg)',
        halfRotation: 'rotate(0deg)',
        halfFixRotation: 'rotate(0deg)',
        color: '#cf504e',
        border: '"' + ("solid " + results.color + " 1px") + '"'
    }
    results.quizScore.percentScore = scoreToPercent(results.wrongAns.quizScore, results.wrongAns.quizPerfectScore);

    results.toneScore.percentScore = scoreToPercent(results.wrongAns.toneScore, results.wrongAns.tonePerfectScore);


    results.speechScore.percentScore = scoreToPercent(results.wrongAns.speechScore, results.wrongAns.speechPerfectScore);

    results.totalScore.percentScore = Math.round((results.quizScore.percentScore + results.toneScore.percentScore + results.speechScore.percentScore) / 3);


    rotateFill('totalScore');
    rotateFill('quizScore');
    rotateFill('toneScore');
    rotateFill('speechScore');

    resultsCopy();

    genResultsEmailHtml();

    function resultsCopy() {

        var percentDividend = (100 - results.totalScore.percentScore);

        percentDividend = (results.totalScore.percentScore / 25);



        percentDividend = Math.floor(percentDividend);

        results.totalScore.copy = results.totalScore.copyOptions[percentDividend];
        results.resultsCopy = results.totalScore.copyOptionsNoCTA[percentDividend];
        console.log(percentDividend);
        console.log(results.totalScore.copy);
        console.log(results.totalScore.copyOptions[percentDividend]);
    }

    function rotateFill(someObj) {

        var rotation = percentToDegree(results[someObj].percentScore);

        Math.ceil(rotation);

        if (rotation >= 180) {
            results[someObj].fillRotation = 'rotate(' + 180 + 'deg)';
            results[someObj].halfRotation = 'rotate(' + (rotation - 180) + 'deg)';
            results[someObj].fixRotation = 'rotate(' + (rotation / 2) + 'deg)';
        } else {
            results[someObj].fillRotation = 'rotate(' + rotation + 'deg)';
            results[someObj].halfRotation = 'rotate(0deg)';
            results[someObj].fixRotation = 'rotate(' + (rotation / 2) + 'deg)';
        };

        results[someObj].fixRotation = 'rotate(' + (Math.ceil((rotation / 2))) + 'deg)';

        if (rotation <= 45) {
            results[someObj].color = "#cf504e";
        } else if (45 < rotation && rotation <= 90) {
            results[someObj].color = "#cf445f";
        } else if (90 < rotation && rotation <= 135) {
            results[someObj].color = "#a93d59";
        } else if (135 < rotation && rotation <= 180) {
            results[someObj].color = "#9d4283";
        } else if (180 < rotation && rotation <= 225) {
            results[someObj].color = "#8a4f9c";
        } else if (225 < rotation && rotation <= 270) {
            results[someObj].color = "#7065ad";
        } else if (270 < rotation && rotation <= 315) {
            results[someObj].color = "#747ada";
        } else if (315 < rotation && rotation < 360) {
            results[someObj].color = "#5b92f1";
        } else if (rotation === 360) {
            results[someObj].color = "#25aae1";
        };

        console.log(results[someObj].name + ": ");
        console.log(results[someObj]);

    };
    scoreToPercent(23, 89);

    function scoreToPercent(actualScore, perfectScore) {
        var returnPercent = 100 - ((actualScore / perfectScore) * 100);
        console.log(returnPercent);
        returnPercent = Math.ceil(returnPercent);
        console.log(returnPercent);
        return returnPercent;
    }

    function percentToDegree(percentNum) {
        var returnDegree = (percentNum / 100) * 360;
        return returnDegree;
    }

    function removeDuplicates(someArray) {
        var returnArray = [];

        someArray.forEach(function (cur) {
            var testString = cur;
            var checkVar = returnArray.find(function (cur) {
                return cur === testString;
            });
            console.log("testString is " + testString);
            console.log("cur is " + cur);
            console.log(checkVar);

            if (checkVar === undefined) {
                returnArray.push(cur);
            }

        });

        return returnArray;
    }

    function genResultsEmailHtml() {
        var resultsEmail = resultsObj.resultsEmail;

        
        console.log(results);
        // update quiz percent and array
        resultsEmail.quizPercent = results.quizScore.percentScore;
        resultsEmail.quizMissed = results.wrongAns.quizAns;
        resultsEmail.quizSectionSubhead = "Environments in which you may struggle to hear:";

        // update tone percent and array
        resultsEmail.freqPercent = results.toneScore.percentScore;
        resultsEmail.freqMissed = results.wrongAns.toneAns;
resultsEmail.freqSectionSubhead = "Frequencies you may struggle to hear:";

        // update speech percent and array
        resultsEmail.speechPercent = results.speechScore.percentScore;
        resultsEmail.speechMissed = results.wrongAns.speechAnsClean;
resultsEmail.speechSectionSubhead = "Words you may struggle to hear:";

        console.log(resultsEmail);

        // Build IconLink objects for later use
        var iconArray = [
            new IconLink("Website", resultsEmail.useWebsite, resultsEmail.websiteUrl, resultsEmail.websiteIconSrc),

            new IconLink("Facebook", resultsEmail.useFb, resultsEmail.fbUrl, resultsEmail.fbIconSrc),

            new IconLink("Twitter", resultsEmail.useTwitter, resultsEmail.twitterUrl, resultsEmail.twitterIconSrc)
        ];

        console.log(iconArray);

        var emailHTML = "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-color: #d3d3d3; font-family: arial, sans-serif;\"><tr><td><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600px\" style=\"border-collapse: collapse; background-color: #ffffff; padding: 20px 20px 20px 20px;\" ><tr align=\"center\"><td bgcolor=\"#ffffff\" style=\"padding: 10px 10px 10px 10px; \"><img src=\"AGXHearing_Logo.png\" style=\"display: block;\" width=\"150px\"/></td></tr><tr align=\"center\"><td bgcolor=\"#ffffff\" style=\"padding: 0px 10px 0px 10px; \"><p width=\"100%\" style=\"display: block; font-size: 30px;\"><strong>Your AGX Hearing Quiz Results</strong></p></td></tr><tr><td bgcolor=\"#ffffff\" style=\"padding: 10px 10px 10px 10px;\">";

        // ** 1. Answer Arrays to Bullets

        // convert quiz array to bullets
        resultsEmail.quizBullets = arrayToBullets(resultsEmail.quizMissed);

        // convert freq array to bullets
        resultsEmail.freqBullets = arrayToBullets(resultsEmail.freqMissed);

        // convert speech array to bullets
        resultsEmail.speechBullets = arrayToBullets(resultsEmail.speechMissed);




        // ** 2. Build out each quiz section's html

        // build quiz section
        resultsSectionBuild(resultsEmail.quizPercent, resultsEmail.quizSectionName, resultsEmail.quizSectionColor, resultsEmail.quizSectionShade, resultsEmail.quizSectionSubhead, resultsEmail.quizBullets);

        // build freq section
        resultsSectionBuild(resultsEmail.freqPercent, resultsEmail.freqSectionName, resultsEmail.freqSectionColor, resultsEmail.freqSectionShade,
            resultsEmail.freqSectionSubhead, resultsEmail.freqBullets);

        // build speech section
        resultsSectionBuild(resultsEmail.speechPercent, resultsEmail.speechSectionName, resultsEmail.speechSectionColor, resultsEmail.speechSectionShade, resultsEmail.speechSectionSubhead, resultsEmail.speechBullets);


        // ** 3. Build out CTA section HTML
        var tempCouponTxt = "";
        if (resultsEmail.hasCoupon) {
            tempCouponTxt = "<tr><td align=\"center\" style=\"color: #000000; font-size: 20px; padding: 10px 10px 10px 10px; border: 2px dashed #707070;\">" + resultsEmail.couponTxt + "</td></tr>";
        } else {
            tempCouponTxt = "";
        };

        var ctaHTML = ("</td></tr><tr><td><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse= collapse; max-width: 540px;\"><tr><td align=\"center\" style=\"color: #000000; font-size: 20px; padding: 10px 10px 10px 10px;\">" + results.resultsCopy + "</td></tr><tr><td align=\"center\" style=\"color: #000000; font-size: 20px; padding: 10px 10px 10px 10px;\">" + resultsEmail.ctaTxt + "</td></tr>" + tempCouponTxt + "<tr width=\"100%\"><td align=\"center\" width=\"100%\" style=\"font-size: 20px; padding: 20px 10px 20px 10px;\"><a href=\"" + resultsEmail.buttonUrl + "\" style=\"color: #ffffff; background-color: #008aab; padding: 10px 10px 10px 10px; border-bottom: 3px solid #00738f;\">" + resultsEmail.buttonTxt + "</a></td></tr></table></td></tr>");

        emailHTML = (emailHTML + ctaHTML);

        // ** 4. Build out IconLink section HTML

        // count icons being used
        var iconCount = countIcons();

        // set icon td width
        var iconBlockWidth = 30;
        iconWidthCalc();

        // build icon links
        var iconBlocks = iconBlockBuild(iconArray[0]);
        console.log(iconBlocks);

        // combine into section
        var allIconBlocks = assembleIconBlocks();
        console.log(allIconBlocks);

        var iconSectionBuild = ("<tr><td><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse= collapse; padding: 10px 10px 10px 10px;\"><tr align=\"center\" bgcolor=\"#512D6D\" height=\"120px\"style=\"color: #ffffff; font-size: 20px;\">" + allIconBlocks + "</tr></table>");

        // update emailHTML
        emailHTML = (emailHTML + iconSectionBuild);


        // ** 4. Build out member logo section HTML

        var logoSectionBuild = ("<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse= collapse; padding: 10px 10px 10px 10px;\"><tr align=\"center\" bgcolor=\"#512D6D\" style=\"color: #ffffff; font-size: 20px; padding: 10px 10px 10px 10px;\"><td width=\"33%\" style=\"padding: 10px 10px 10px 10px;\"><img src=\"" + resultsEmail.logoSrc + "\" style=\"display: block;\" width=\"200px\"/></td></tr></table></td></tr></table></td></tr></table>")

        emailHTML = (emailHTML + logoSectionBuild);

        function resultsSectionBuild(sectionPercent, sectionName, sectionColor, sectionShade, sectionSubhead, sectionBullets) {

            var returnString = ("<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse: collapse;\"><tr><td bgcolor=\"" + sectionColor + "\" width=\"15%\" align=\"center\" style=\"color: #ffffff; font-size: 30px; padding: 10px 10px 10px 10px; border-bottom: 3px solid " + sectionShade + ";\"><strong>" + sectionPercent + "</strong>%</td><td width=\"85%\" align=\"left\" style=\"color: " + sectionShade + "; font-size: 25px; padding: 10px 10px 10px 10px;\">" + sectionName + "</td></tr><tr><td  width=\"15%\" align=\"center\" style=\"font-size: 30px;\">&nbsp;</td><td bgcolor=\"#ffffff\" width=\"85%\" align=\"left\" style=\"color: #000000; font-size: 15px; padding: 10px 10px 5px 10px; border-top: 3px solid " + sectionShade + ";\"><strong>" + sectionSubhead + "</strong></td></tr><tr><td >&nbsp;</td><td align=\"left\" style=\"color: #000000; font-size: 15px; padding: 0px 8px 8px 8px;\">" + sectionBullets + "</td></tr></table>");

            emailHTML = (emailHTML + returnString);
            


        };

        function arrayToBullets(someArray) {
            var returnString = "";

            someArray.forEach(function (cur) {
                returnString = (returnString + "&bull; " + cur + "<br/>");

            });

            return returnString;

        }

        function iconBlockBuild(iconLinkObject) {

            var returnString = ("<td width=\"" + iconBlockWidth + "%\"><a href=\"" + iconLinkObject.url + "\" target = \"_blank\" style=\" color: #ffffff;\"><img src=\"" + iconLinkObject.iconSrc + "\" style=\"display: block; text-decoration: none;\"/>" + iconLinkObject.txt + "</a></td>");

            return returnString;
        }

        function IconLink(txt, use, url, iconSrc) {
            this.txt = txt;
            this.use = use;
            this.url = url;
            this.iconSrc = iconSrc;
        };

        function countIcons() {
            var iconCount = 0;

            iconArray.forEach(function (cur) {

                if (cur.use) {

                    iconCount++;
                }

            });
            return iconCount;
        };

        function iconWidthCalc() {
            if (iconCount === 3 || iconCount === 1) {
                iconBlockWidth = 30;
            } else if (iconCount === 2 || iconCount === 4) {
                iconBlockWidth = 25;
            } else {
                iconBlockWidth = 20;
            };
        };

        function assembleIconBlocks() {
            var allIconBlocks = "";

            var fillerHTML = "<td width=\"" + iconBlockWidth + "%\">&nbsp;</td>";

            iconArray.forEach(function (cur) {
                if (cur.use) {
                    tempTxt = iconBlockBuild(cur);
                    allIconBlocks = (allIconBlocks + tempTxt);
                };
            });

            if (iconCount === 2) {
                allIconBlocks = (fillerHTML + allIconBlocks + fillerHTML);
            };

            return allIconBlocks;
        };
        console.log(emailHTML);
    };
}])