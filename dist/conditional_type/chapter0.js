let varA;
let varB;
function removeSpaces(text) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}
let result = removeSpaces("hi im winterlood");
function removeSpaces2(text) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}
let result2 = removeSpaces2("hi im winterlood");
result2.toUpperCase();
let result3 = removeSpaces2(undefined);
export {};
