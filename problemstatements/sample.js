// check palindrome
function palindrome(number){
    let string = number.tostring;
    let str = number.toString();             
  let reversed = str.split(' ').reverse().join(''); 
  return str === reversed;    
}
console.log(palindrome('0101010'));

// sumofNumbers
function sumofnumbers(a,b){
    let num = a+b;
   return num;
}
console.log(sumofnumbers(2,3));

// print odd numbers in between 50 to 100
let n1= 50;
let n2 = 100;
function checkodd(n1,n2){
        for(let i=n1;i<=n2;i++){
            if(i%2 !==0){
                console.log(i);
            }
    }
}
checkodd(n1,n2);