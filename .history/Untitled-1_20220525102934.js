
// 1 ) Sum Zero
// I am using the simple logic that if we have two elements , a positive and a negative that their absolute value would be equal,
// then we can tell that there exists at least two valeus in our function, that if we add them up, we get 0.
// Our function runs equal to arr.length times. In other words, if we increase our array size, then our function will
// be increased in a linear fashion 
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

  function uniqueCharacters(str) {
   var counts = {};
   for (var i = 0; i < str.length; i++){
      counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;

   } 
   for(var value in counts) {
      var value = counts[key];
      if (value > 1) {
         return 0 
      }
    }
return 1 
   console.log(counts)
   }
  uniqueCharacters("Monday")