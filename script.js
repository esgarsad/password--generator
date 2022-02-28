// Assignment code here

var number = "0123456789"
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "+_)(*&^%$#@!~=-;:?/><";
var base = "";



var writePassword = function () {

  window.alert("Welcome to Password generator, please give me the criteria to set your password");
  var lengthPrompt = window.prompt('How long do you need your password to be? Please enter a number between  8 and 128');

  if (lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert ("Please enter a value between 8 and  128")
    return writePassword();
  }

var numberPrompt = window.prompt('Do you need your password to contain numbers? Type "Y" or "N"');
numberPrompt = numberPrompt.toLowerCase();
var lowerPrompt = window.prompt('Do you need your password to contain lowercase characters?  Type "Y" or "N"');
lowerPrompt = lowerPrompt.toLowerCase();
var upperPrompt = window.prompt('Do you need your password to contain UPPERCASE characters? Type "Y" or "N"');
upperPrompt = upperPrompt.toLocaleLowerCase();
var specialPrompt = window.prompt('Do you need your password to contain Special characters? Type "Y" or "N"');
specialPrompt = specialPrompt.toLocaleLowerCase();

if (numberPrompt === "y") {
  base = base + number;
  console.log (base)
}

if (lowerPrompt === "y") {
  base = base + lower;
  console.log (base)
}

if (upperPrompt === "y") {
  base = base + upper;
  console.log (base)
}

if (specialPrompt === "y") {
  base = base + special;
  console.log (base)
}

if (numberPrompt === "" && lowerPrompt === "" && upperPrompt === "" && specialPrompt === "") {
  window.alert("you have to choose at least one criteria");
  return randompass();
}
  var password = "";
  for (var i= 0; i < lengthPrompt; i++) {
    var value = base.charAt(Math.floor(Math.random() * (base.length) ));
  password = value + password;
  }
window.alert('your password is'+ ' ' + password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//writePassword();
