
// 1 ) Sum Zero
// I am using the simple logic that if we have two elements , a positive and a negative that their absolute value would be equal,
// then we can tell that there exists at least two valeus in our function, that if we add them up, we get 0.
// Complexity : Our function runs equal to arr.length times. In other words, if we increase our array size, then our function will
// be increased in a linear fashion so its O(N) time complexity 
function sumZero(arr) {
   for (var i = 0; i < arr.length; i++) {
      var res = arr.includes(i * -1 ) 
     if (res) {
        return true 
     }
   }
   }
  sumZero([1,2,3,4,-2])

  // 2) Unique Characters 
// So what I basically do is, store the occurences of all characters in a dictionary. Then I loop through the dictionary 
// or Hashmap, and if there is an occurence that is larger than 1 for each character, return false otherwise return true 
// Complexity: We have two loops that increase as our input grows. However, it's not a O(n^2) because our functions are not nested
// We have a complexity O(N+N) = O(N)
  function uniqueCharacters(str) {
   var counts = {};
   for (var i = 0; i < str.length; i++){
      counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;
   } 
   for(var value in counts) {
      var value = counts[value];
      if (value > 1) {
         return false 
          
      }
    }
return true 
   }
  uniqueCharacters("Mondayy")



  // 3 ) Pangram Sentence 
// Our goal is straightforward, we want to make sure that the string passed to our function contains every letter of the alphabet
// I just loop through each letter of the alphabet, and make sure that that letter exists in our passed string, if not return false
// Complexity: Includes has a time complexity of O(N). We loop through our limited alphabet string. Since our Alphabet string has only 
// 26 character. Our function has a time complexity of O(N)
  function PangramSentence(pangramString) {
   var str = pangramString.toLowerCase()
   var alphabet  = "abcdefghijklmnopqrstuvwxyz"
   for (var i = 0; i < alphabet.length; i++){
         if (!str.includes(alphabet[i])){
            return false 
         }
   }
return true
   
}
PangramSentence("How vexingly quick daft zebras jump!")
    

// 4  ) Longest word 


function LongestWord(longest) {
var l = 0 
for (var i = 0; i < longest.length; i++) {
   console.log(longest[i])
}
}
LongestWord([["hi", "hello"]])