// Diberikan sebuah function xo(str) 
// yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah 
// karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str){
    var countX = 0;
    var countO = 0;
    for(var position = 0; position < str.length; position++){
      if (str.charAt(position) == 'x'){
        countX += 1;
      } else {
        countO += 1;
      }
    }
    
    if(countX == countO){
      return true;
    } else{
      return false;
    }
  }
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true