// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// start of function code for declarations, prompts, checks, run cases
function generatePassword() {

    // Arrays for defining chars, numbers, symbols, etc...
    var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbols = ["!", "#", "$", "%", "&", "@", "(", ")", "*", "+", ",", "-", ".", "/", "=", "^", "_", "`", "~"];
    var siteChoice = [];

    // Prompts for confirming what length and chars / symbols / numbers to use
    var charLength = window.prompt("How long would you like your password? Choose a length from 8 - 128 characters long!")
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      window.alert("The required password must be between 8 and 128 characters in length. Please input a validated response and try again!");
      return generatePassword();
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
