import { getAllInts } from './get-all-ints.js';

// https://gist.github.com/Daniel-Hug/7273430
function modeAverage( arr ) {

    var ints = getAllInts( arr );

    if (ints.length === 0) return null;

    var modeMap = {},
        maxCount = 1,
        modes = [ints[0]];

    ints.forEach(function(val) {

        if ( modeMap[val] === undefined ) {
            modeMap[val] = 1;
        } else {
            modeMap[val]++;
        }

        if ( modeMap[val] > maxCount ) {
            modes = [val];
            maxCount = modeMap[val];
        } else if (modeMap[val] == maxCount) {
            modes.push(val);
            maxCount = modeMap[val];
        }

    });

    return modes;

}

export { modeAverage }