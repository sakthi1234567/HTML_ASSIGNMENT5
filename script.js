
// print odd numbers in arrow functions

//let oddNums = arr.filter(n => n%2  !== 0)

///console.log(oddNums([1,2,3,4,5,6,7,8,9,10,11,12]))

/// type -1
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,9]

let odds = arr.filter(n => n%2 )

console.log(odds)

/// type- 2
function  oddNos(arr) {
    return arr.filter(n => n%2)
}
  
console.log(oddNos([1,3,4,2,6,7,8,10,11, 13]));

//title caps
function titleCase (arr) {
    var res = [];
    arr.map((ele) => {
        var word = ele.split(' ');
        var wordRes = []
        word.forEach((w)=> {
            wordRes.push(w.charAt(0).toUpperCase()+w.substr(1).toLowerCase())
        })
        res.push(wordRes.join(' '));
    })
    return res
  }
    
  console.log(titleCase(['geeks for geeks',  'sakthi vel']));



  // Sum of all numbers in an array

  function sum (arr) {
    var sum = 0
    arr.map((ele) => {
        sum = ele + sum;
    })
    return sum;
}
  
console.log(sum([1,2,3]));  




//Return all the prime numbers in an array

function isPrime (arr) {
    var res = []
    arr.map((ele) => {
        if(ele > 2) {
            var prime = true
            for(k=2;k<ele;k++) {
                if(ele % k === 0){
                    prime = false
                }
            }
            if(prime)
                res.push(ele)
        }
    })
    return res
}
  
console.log(isPrime([1,2,3, 5, 0 , 10,13,12]));

//Return all the palindromes in an array

function palindrome (arr) {
    var res = []
    arr.map(ele => {
        var strrev;
        strrev=ele.toString().split("").reverse().join("");
        if(strrev == ele) {
            res.push(ele)
        }
    })
    return res
}
  
console.log(palindrome([121, 'abcdcba', 'eve', 12321, 'dood', 'good', 'put']));