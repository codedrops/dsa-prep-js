// ==============================================================
function charCount(string) {
    let output = {};
    for (let char of string) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            output[char] = (output[char] || 0) + 1;
        }
    }
    return output;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt();
    if (48 <= code && code <= 57) {
        return true;
    } else if (65 <= code && code <= 90) {
        return true;
    } else if (97 <= code && code <= 122) {
        return true;
    }
    return false;
}
// ==============================================================
let result = charCount("hai how r u?");
console.log(result);
