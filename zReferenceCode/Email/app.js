var resultsEmail = {
    ctaTxt: "Call today",
    couponTxt: "$500 Off an AGX5, 7 or 9 two-device hearing system. Expires 05.31.19.",
    buttonTxt: "Schedule your appointment",
    buttonUrl: "https://www.agxhearing.com/",
    
    useWebsite: true,
    websiteUrl: "https://www.google.com",
    websiteIconSrc: "IconPlaceholder.png",
    
    useFb: true,
    fbUrl: "",
    fbIconSrc: "",
    
    useTwitter: true,
    twitterUrl: "",
    twitterIconSrc: "",
    
    logoSrc: "AwesomeAudiology_Reversed.png",
    
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
};

// Build IconLink objects for later use
var iconArray = [
    new IconLink("Website", resultsEmail.useWebsite, resultsEmail.websiteUrl, resultsEmail.websiteIconSrc),
    
    new IconLink("Facebook", resultsEmail.useFb, resultsEmail.fbUrl, resultsEmail.fbIconSrc),
    
    new IconLink("Twitter", resultsEmail.useTwitter, resultsEmail.twitterUrl, resultsEmail.twitterIconSrc)
];

console.log(iconArray);

var emailHTML = "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-color: #d3d3d3;\"><tr><td><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600px\" style=\"border-collapse: collapse; background-color: #ffffff; padding: 20px 20px 20px 20px;\" ><tr align=\"center\"><td bgcolor=\"#ffffff\" style=\"padding: 10px 10px 10px 10px; \"><img src=\"AGXHearing_Logo.png\" style=\"display: block;\" width=\"150px\"/></td></tr><tr align=\"center\"><td bgcolor=\"#ffffff\" style=\"padding: 0px 10px 0px 10px; \"><p width=\"100%\" style=\"display: block; font-size: 30px;\"><strong>Your AGX Hearing Quiz Results</strong></p></td></tr><tr><td bgcolor=\"#ffffff\" style=\"padding: 10px 10px 10px 10px;\">";

// ** 1. Answer Arrays to Bullets

// convert quiz array to bullets
resultsEmail.quizBullets = arrayToBullets(resultsEmail.quizMissed);

// convert freq array to bullets
resultsEmail.freqBullets = arrayToBullets(resultsEmail.freqMissed);

// convert speech array to bullets
resultsEmail.speechBullets = arrayToBullets(resultsEmail.speechMissed);




// ** 2. Build out each quiz section's html

// build quiz section
resultsSectionBuild (resultsEmail.quizPercent, resultsEmail.quizSectionName, resultsEmail.quizSectionColor, resultsEmail.quizSectionShade, resultsEmail.quizBullets);

// build freq section
resultsSectionBuild (resultsEmail.freqPercent, resultsEmail.freqSectionName, resultsEmail.freqSectionColor, resultsEmail.freqSectionShade,
                     resultsEmail.freqBullets);

// build speech section
resultsSectionBuild (resultsEmail.speechPercent, resultsEmail.speechSectionName, resultsEmail.speechSectionColor, resultsEmail.speechSectionShade,resultsEmail.speechBullets);


// ** 3. Build out CTA section HTML
var ctaHTML = ("</td></tr><tr><td><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse= collapse; max-width: 540px;\"><tr><td align=\"center\" style=\"color: #000000; font-size: 20px; padding: 10px 10px 10px 10px;\">" + resultsEmail.ctaTxt + "</td></tr><tr><td align=\"center\" style=\"color: #000000; font-size: 20px; padding: 10px 10px 10px 10px; border: 2px dashed #707070;\">" + resultsEmail.couponTxt + "</td></tr><tr width=\"100%\"><td align=\"center\" width=\"100%\" style=\"font-size: 20px; padding: 20px 10px 20px 10px;\"><a href=\"" + resultsEmail.buttonUrl + "\" style=\"color: #ffffff; background-color: #008aab; padding: 10px 10px 10px 10px; border-bottom: 3px solid #00738f;\">" + resultsEmail.buttonTxt + "</a></td></tr></table></td></tr>");

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

function resultsSectionBuild (sectionPercent, sectionName, sectionColor, sectionShade, sectionBullets){
    
    var returnString = ("<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"border-collapse: collapse;\"><tr><td bgcolor=\"" + sectionColor + "\" width=\"15%\" align=\"center\" style=\"color: #ffffff; font-size: 30px; padding: 10px 10px 10px 10px; border-bottom: 3px solid " + sectionShade + ";\"><strong>" + sectionPercent + "</strong>%</td><td width=\"85%\" align=\"left\" style=\"color: " + sectionShade + "; font-size: 25px; padding: 10px 10px 10px 10px;\">" + sectionName + "</td></tr><tr><td  width=\"15%\" align=\"center\" style=\"font-size: 30px;\">&nbsp;</td><td bgcolor=\"#ffffff\" width=\"85%\" align=\"left\" style=\"color: #000000; font-size: 15px; padding: 10px 10px 5px 10px; border-top: 3px solid " + sectionShade + ";\"><strong>Environments you may struggle to hear in:</strong></td></tr><tr><td >&nbsp;</td><td align=\"left\" style=\"color: #000000; font-size: 15px; padding: 0px 8px 8px 8px;\">" + sectionBullets + "</td></tr></table>");
    
    emailHTML = (emailHTML + returnString);
    

};

function arrayToBullets(someArray){
    var returnString = "";
    
    someArray.forEach(function(cur){
        returnString = (returnString + "&bull; " + cur + "<br/>");
        
    });
    
    return returnString;
    
}

function iconBlockBuild (iconLinkObject){
   
    var returnString = ("<td width=\"" + iconBlockWidth + "%\"><a href=\"" + iconLinkObject.url + "\" target = \"_blank\" style=\" color: #ffffff;\"><img src=\"" + iconLinkObject.iconSrc + "\" style=\"display: block; text-decoration: none;\"/>" + iconLinkObject.txt + "</a></td>");
    
    return returnString;
}

function IconLink(txt, use, url, iconSrc){
    this.txt = txt;
    this.use = use;
    this.url = url;
    this.iconSrc = iconSrc;
};

function countIcons (){
    var iconCount = 0;
    
    iconArray.forEach(function(cur){
        
        if(cur.use){
           
            iconCount++;
        }
       
    });
        return iconCount;
};

function iconWidthCalc(){
    if(iconCount === 3 || iconCount === 1){
        iconBlockWidth = 30;
    } else if (iconCount === 2 || iconCount === 4){
        iconBlockWidth = 25;
    } else {
        iconBlockWidth = 20;
    };
};

function assembleIconBlocks(){
    var allIconBlocks = "";
    
    var fillerHTML = "<td width=\"" + iconBlockWidth + "%\">&nbsp;</td>";
    
    iconArray.forEach(function(cur){
        if(cur.use){
            tempTxt = iconBlockBuild(cur);
            allIconBlocks = (allIconBlocks + tempTxt);
        };
    });
    
    if(iconCount === 2){
        allIconBlocks = (fillerHTML + allIconBlocks + fillerHTML);
    };
    
    return allIconBlocks;
};

console.log(emailHTML);


