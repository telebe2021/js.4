// 1. Funksiya yazacaqsız, funksiya 2 parametr qəbul edir, 1-cisi array 2-cisi number (ex. myFunc([1,2,3,4,5], 4)) . 
// Həmin funksiyanın nəticəsi 0-cı indeks-dən number-in sayı qədər array-in içindən ədədləri götürüb yeni array-ə yığmalısız (myFunc([1,2,3,4,5], 4) => [1,2,3,4])



function myFunc(array, number) {
    
    var result = [];
  
    for (var i = 0; i < number; i++) {
      if (i < array.length) {
        result.push(array[i]);
      }
    }
  
    return result;
  }
  
  // misal:
  var inputArray = [1, 2, 3, 4, 5];
  var number = 4;
  var resultArray = myFunc(inputArray, number);
  console.log(resultArray); 

  
    // 2. findMultiples adlı funksiya yazacaqsız, 2 number parametri alır (ex. findMultiples(number, limit)) - number-dan limitə qədər limitdə daxil olmaqla yeni array-ə number-in 2-yə hasillərini əlavə edəcəksiz, taki limitə çatana qədər.
    // (ex findMultiples(2, 6) = > result = [2, 4, 6] or findMultiples(5, 30) = > result = [5, 10, 20])

    function findMultiples(number, limit) {
        var result = [];
      
        for (var i = number; i <= limit; i += number) {
          result.push(i);
        }
      
        return result;
      }
      
      // misal:
      var number1 = 2;
      var limit1 = 8;
      var result1 = findMultiples(number1, limit1);
      console.log(result1);
      
      var number2 = 5;
      var limit2 = 40;
      var result2 = findMultiples(number2, limit2);
      console.log(result2); 
      

    // 3. Count funksiyası verilir, 1 number parametri alır, 1-dən həmin number-a qədər yeni array yaradın
    // (ex. count(10) => result = [1,2,3,4,5,6,7,8,9,10])
    

    function count(number) {
        var result = [];
        
        for (var i = 1; i <= number; i++) {
          result.push(i);
        }
      
        return result;
      }
      
      // misal:
      var number = 15;
      var result = count(number);
      console.log(result); 
    

      
