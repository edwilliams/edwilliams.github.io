(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// http://stackoverflow.com/a/1293163/2102042
function CSVToArray(strData, strDelimiter) {

    strDelimiter = strDelimiter || ",";

    var objPattern = new RegExp("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" + "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + strDelimiter + "\\r\\n]*))", "gi");

    var arrData = [[]];

    var arrMatches = null;

    while (arrMatches = objPattern.exec(strData)) {

        var strMatchedDelimiter = arrMatches[1];

        if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {

            arrData.push([]);
        }

        var strMatchedValue;

        if (arrMatches[2]) {

            strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
        } else {

            strMatchedValue = arrMatches[3];
        }

        arrData[arrData.length - 1].push(strMatchedValue);
    }

    return arrData;
}

exports.CSVToArray = CSVToArray;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getAllInts(arr) {

    var allInts = [];

    arr.map(function (x) {
        x.map(function (y) {
            y = parseInt(y);
            if (!isNaN(y)) {
                allInts.push(y);
            }
        });
    });

    return allInts;
}

exports.getAllInts = getAllInts;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getFile(file, callback) {

    var request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            callback(this.response);
        } else {
            console.log('error');
        }
    };

    request.onerror = function () {
        console.log('error');
    };

    request.send();
}

exports.getFile = getFile;

},{}],4:[function(require,module,exports){
'use strict';

var _csvToArray = require('./csv-to-array.js');

var _getFile = require('./get-file.js');

var _renderHtml = require('./render-html.js');

var _getAllInts = require('./get-all-ints.js');

var _mostIntsInArray = require('./most-ints-in-array.js');

var _modeAverage = require('./mode-average.js');

var _meanValue = require('./mean-value.js');

var Global = function () {

    // csv generated with these tools:
    //  https://www.random.org/integer-sets/
    //  http://listofrandomnames.com/
    var CSV = './names-scores.csv';

    function init() {

        events();
    }

    function events() {

        // event listener for all links
        document.addEventListener('click', function (event) {

            var el = event.target;

            if (el.tagName !== 'A') {
                return false;
            }

            (0, _getFile.getFile)(CSV, function (data) {

                var arr = (0, _csvToArray.CSVToArray)(data);

                if (el.id == 'total-ints') {
                    (0, _renderHtml.renderHTML)('The total number of integers in the CSV is: ' + (0, _getAllInts.getAllInts)(arr).length);
                }

                if (el.id == 'highest-ints') {
                    (0, _renderHtml.renderHTML)('The highest number of integers in a single line of the CSV is: ' + (0, _mostIntsInArray.mostIntsInArray)(arr));
                }

                if (el.id == 'most-common') {
                    (0, _renderHtml.renderHTML)('The most common integer in the CSV is: ' + (0, _modeAverage.modeAverage)(arr));
                }

                if (el.id == 'mean-value') {
                    (0, _renderHtml.renderHTML)('The mean value of all the integers in the CSV (to three decimal places) is: ' + (0, _meanValue.meanValue)(arr));
                }
            });
        }, false);
    }

    init();
}();

},{"./csv-to-array.js":1,"./get-all-ints.js":2,"./get-file.js":3,"./mean-value.js":5,"./mode-average.js":6,"./most-ints-in-array.js":7,"./render-html.js":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.meanValue = undefined;

var _getAllInts = require('./get-all-ints.js');

function meanValue(arr) {

    var ints = (0, _getAllInts.getAllInts)(arr);

    var total = 0,
        length = ints.length;

    ints.forEach(function (val, key) {
        total += val;
    });

    return Math.round(total / length * 1000) / 1000;
}

exports.meanValue = meanValue;

},{"./get-all-ints.js":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modeAverage = undefined;

var _getAllInts = require('./get-all-ints.js');

// https://gist.github.com/Daniel-Hug/7273430
function modeAverage(arr) {

    var ints = (0, _getAllInts.getAllInts)(arr);

    if (ints.length === 0) return null;

    var modeMap = {},
        maxCount = 1,
        modes = [ints[0]];

    ints.forEach(function (val) {

        if (modeMap[val] === undefined) {
            modeMap[val] = 1;
        } else {
            modeMap[val]++;
        }

        if (modeMap[val] > maxCount) {
            modes = [val];
            maxCount = modeMap[val];
        } else if (modeMap[val] == maxCount) {
            modes.push(val);
            maxCount = modeMap[val];
        }
    });

    return modes;
}

exports.modeAverage = modeAverage;

},{"./get-all-ints.js":2}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function mostIntsInArray(arr) {

    var largest = [],
        arrPos = 0,
        highest = 0;

    arr.map(function (x, i) {
        if (x.length > highest) {
            highest = x.length;
            arrPos = i;
        }
    });

    arr[arrPos].map(function (x) {
        if (!isNaN(x)) {
            largest.push(x);
        }
    });

    return largest.length;
}

exports.mostIntsInArray = mostIntsInArray;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function renderHTML(html) {

    document.getElementById('container').innerHTML = html;
}

exports.renderHTML = renderHTML;

},{}]},{},[4])


//# sourceMappingURL=build.js.map
