

function sumZero(arr) {

  
   for (var i = 0; i < arr.length; i++) {
      if arr.includes(i * -1 ){
         return true
      }
      }
   }
  
  sumZero([1,2,3,4,-2])