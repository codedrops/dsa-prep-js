// ==============================================================
// ANAGRAMS
// An Anagram is a word, phrase or name formed by rearranging 
// the letters of another, such as cinema, formed from iceman.
// ==============================================================
// NAIVE
function validAnagram__SOL1(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    if (str1 === str2) {
        return true;
    }

    let frequencyCount1 = {};
    let frequencyCount2 = {};

    for (let char of str1) {
        frequencyCount1[char] = (frequencyCount1[char] || 0) + 1;
    }
    for (let char of str2) {
        frequencyCount2[char] = (frequencyCount2[char] || 0) + 1;
    }
    for (let key in frequencyCount1) {
        if (!(key in frequencyCount2)) {
            return false;
        }
        if (frequencyCount1[key] !== frequencyCount2[key]) {
            return false;
        }
    }
    return true;
}

// ==============================================================
// BETTER
function validAnagram__SOL2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    if (str1 === str2) {
        return true;
    }

    let lookup = {};

    for (let char of str1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }

    return true;
}

// ==============================================================
validAnagram__SOL2('ab', 'ba');
