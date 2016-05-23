"use strict";

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

function renderHTML(html) {

    document.getElementById('container').innerHTML = html;
}

var Global = function () {

    // csv generated here: https://www.random.org/integer-sets/ and here: http://listofrandomnames.com/
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

            getFile(CSV, function (data) {

                var arr = CSVToArray(data);

                if (el.id == 'total-ints') {
                    renderHTML('The total number of integers in the CSV is: ' + getAllInts(arr).length);
                }

                if (el.id == 'mean-value') {
                    renderHTML('The mean value of all the integers in the CSV (to three decimal places) is: ' + meanValue(arr));
                }

                if (el.id == 'highest-ints') {
                    renderHTML('The highest number of integers in a single line of the CSV is: ' + mostIntsInArray(arr));
                }

                if (el.id == 'most-common') {
                    renderHTML('The most common integer in the CSV is: ' + modeAverage(arr));
                }
            });
        }, false);
    }

    function getAllInts(arr) {

        var allInts = [];

        arr.map(function (x) {
            x.map(function (y) {
                if (!isNaN(y)) {
                    allInts.push(parseInt(y));
                }
            });
        });

        return allInts;
    }

    function meanValue(arr) {

        var ints = getAllInts(arr);

        var total = 0,
            length = ints.length;

        ints.forEach(function (val, key) {
            total += val;
        });

        return Math.round(total / length * 1000) / 1000;
    }

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

    // https://gist.github.com/Daniel-Hug/7273430
    function modeAverage(arr) {

        var ints = getAllInts(arr);

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

    init();
}();
//# sourceMappingURL=global.js.map
