function isPalindrome(word) {
  // Write your algorithm here
  console.log("Expecting:true");
  console.log("=>", isPalindrome("abba"));

  console.log("");
  console.log("Expecting:true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("Expecting:true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  console.log("Expecting:false");
  console.log("=>", isPalindrome("robot"));

  console.log("");
  console.log("Expecting:false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
  console

module.exports = isPalindrome;
