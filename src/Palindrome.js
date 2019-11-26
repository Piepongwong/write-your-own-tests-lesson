function isPalindrome(someString) {
  if(typeof someString !== "string") throw new Error("Input should be a string");

  var sanitizedString = sanitize(someString);
  var reversedString = reverse(sanitizedString);

  if(reversedString === sanitizedString) return true;
  else return false;
}

function sanitize(someString){
  someString = someString.toLowerCase();
  var sanitizedString = "";
  for(let i = 0; i < someString.length; i++) {
    if(someString[i] >= "a" && someString[i] <= "z") sanitizedString += someString[i];
  }
  return sanitizedString;
}

function reverse(someString) {
  return someString.split("").reverse().join("");
}