'use strict';

var js = `

document.body.style.backgroundColor = 'orange';

var body = document.querySelector('body');
var div = document.createElement('div');
div.id = 'rosielee-new-content';
body.insertBefore( div, body.firstChild );

document.addEventListener('click', function( e ) {
    var el = document.getElementById('rosielee-new-content');
    el.innerHTML = 'target: ' + e.target.innerHTML;
});

`;

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: js
  });
});

// http://nikeid.nike.com/custom-builder/builder/product.html?allviews=true&client=desktop&country=GB&lang_locale=en_GB&pbid=1078514575&pathName=kobeXIelite1512