// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Start of password generating code and prompts
function generatePassword {

  // Array list for all Characters / Numbers / Symbols acceptable by type
var uppers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowers = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var symbols = ["!@#$%^&*()_-[]{}"];

  // Initial Window Prompt asking about password length
  var passLength = window.prompt("How many characters will the password length be? Please select a length between 8 and 128 characters long!");



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
