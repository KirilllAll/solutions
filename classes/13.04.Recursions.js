// const getNewList = (arr, n) => {
    // const map = {};
    // const res = [];
    // n = 2
    // [1,2,3,1,2,1,2,3]
    
    // - мы добавляем елемент если значение в ключе меньше n 
    // - и алгортим такой
    // взяли элемент
    // проверили есть ли он в словаре 
    // если есть то сколько раз 
    // если ок то пушим в результат
    // и пограничный случай 

 // // // // // // //    arr.forEach((item) => {
   // // // // // //      if(map[item]){
          //  map[item] +=1;
        // } else {
           // map[item] = 1;
    //   //  }
    // })
    //map = {1: 3, 2: 3, 3: 2}

  //// // // // // // // return arr.map((item, index) => {
// }





/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 
// // // // // // // // // //  Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

n >= 0

n < 0

// 0.00001
// 2147483647
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    
    if (n > 0) {
        return myPow(x, n-1) * x
    }
    
    if (n < 0) {
        return myPow(x, n + 1) * 1/x
    }

};


n >= 0
var myPow = function(x, n) {
    let temp;

    if (n === 0) {
        return 1;
    }
    
    if(n >= 0){
        temp = myPow(x, Math.floor(n/2));
        return temp * temp * (n%2 === 0 ? 1 : x);
    }
    
    if(n < 0){
       temp = myPow(x, Math.floor(n/2));
        return temp * temp * (n%2 === 0 ? 1 : 1/x); 
    }

};
// x^a * x^b = x^(a+b)



// myPow(x, n) -> x^n 5^2 5*5 5^3 5*5*5

// myPow(x*x, n-1) -> (x*x)^(n-1)=x^(2*(n-1))


// myPow(x, n) = myPow(x, n-1) * x


// myPow(x, n) -> x^n

// x^n = x^(n-1) * x = x^(n-2) * x * x = x^(n-3) *x*x*x


// x^a * x^b = x^(a+b)


// x*x*x..*x = x*x..*x    * x
// n штук      n-1 штука




// (n положительное)
// x^n = x^(n-1) * x

// x^(-n) = (1/x) ^ n = 1/(x^n)

// n < 0
// x^n = 1/x ^(n - 1) * 1/x 

// n < 0
// x^n = x^(n+1) * 1/x

// n > 0

// 5 ^ 4 = 5**5*5*5 = 625

// 5^4 = 5^3 * 5
// x^n = x ^ (n - 1) * x

// x^a * x^b = x^(a+b)

// x^n = x^(n+1) * 1/x;

// 5^(-2) = 5^(-1) * 1/5 = 1/5 * 1/5 = 1/25

// (1/x)*(1/x)*(1/x)*(1/x)*(1/x)*(1/x)*



// function temp(x, y){

    // if(x < 0) return y;
    // return 2
    // x + y;
    // 7
    // 6
    // 5
    // 4
    // 3
 //  temp(x, y) = temp(x-1, y) + 1
//  return   temp(x - 1, y) + 1;
// }

// temp(x, y) -> x + y
// //


// temp(x, y) = temp(x-1, y) + 1
// x+y = x-1+y + 1


// fibonacci

// 0 1 1 2 3 5 8 13 21 34  55
// 0 1 2 3 4 5 6 7  8  9  10 


// fib(n) = fib(n) + fib(n - 1)

// fib(n) = fib(n-1) + fib(n-2)

// function fib(n) {
//     if(n <= 0){
//         return 0;
//     }
    
//     return fib(n - 1) + fib(n - 2);
    
// }

// fib(10) =  fib(9) + fib(8) = fib(8) + fib(7) + fib(8)
