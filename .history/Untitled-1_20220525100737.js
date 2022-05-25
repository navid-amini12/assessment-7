

function sumZero(arr) {

  
   for (var i = 0; i < arr.length; i++) {
      var res = arr.includes(i * -1 )
     if (res) {
        return; 
     }
   }
   }
  
  sumZero([1,2,3,4,-2])