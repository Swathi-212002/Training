//.map function(transform each element)
const num = [1,2,3,4,5,5];
const squared = num.map(n => n*n);
console.log(squared);

//.filter function(keep elements that matches the condition)
const number = [1,2,3,4,5,6,7,8,9];
const even = number.filter(n => n % 2===0);
console.log(even);

//.reduce function (accumalate to a single value)
const n = [1,2,3,4,5,6,78];
const sum = n.reduce((acc,curr) => acc+curr, 0);
console.log("arr", n);
console.log("sum = ", sum);

//.find()---Return First Match
const employee = [{id : 1},{id:2},{id:3},{id:6}];
const value = employee.find(u => u.id==6);
console.log(value);

//.findIndex ----Return Index of First Match
const colors =['yellow','red','green','blue','violet'];
const fav = colors.findIndex(color => color==='red');
console.log('arr', colors);
console.log(fav);

//includes() – Check if Value Exists
let fruits = ['apple', 'banana', 'mango'];
console.log('arr',fruits);
console.log(fruits.includes('banana'));





































































//1. max and min element in array
let arr=[3,5,1,8,-2];
function findMinMax(arr) {
    let min=Math.min(...arr);
    let max=Math.max(...arr);
    return {min, max};
}
console.log(findMinMax(arr));

//2. sum of all elements in an array
let arr1=[3, 9, 1, 5, 7];
let sum1=arr1.reduce((acc, val) => acc+val, 0);
console.log('Array: ' +arr1)
console.log('sum: ' +sum)

//3. Count the number of even and odd elements in an array
const arr2=[3,4,7,10,13,22];
const evens=arr2.filter(num => num %2 ==0).length;
const odds=arr2.filter(num => num%2!==0).length;
console.log('Array' +arr2);
console.log('Even count'+evens, 'odd count: '+odds)

//4.Search for an element in an array
const arr4=[10,20,30,40,50];
const target=30;
const found=arr4.includes(target);
console.log("Element found:" +found)

//5. reverse an array in palce
const arr5=[1,2,3,4,5]
arr5.reverse();
console.log('reversed array: '+arr5);

//6. average of elements in the array
const arr6=[5,10,15]
const avg=arr6.reduce((sum, num) => sum+num,0)/arr6.length;
console.log('Averge sum: '+avg)

//7. find the index of the first occurrance of given element
const arr7=[5,3,8,3,9];
const target1=3;
const index=arr7.indexOf(target1);
console.log('First occurance' +index);

//8. Count how many times a given number appears 
let arr8=[1,2,3,2,4,2,5]
let target2=2;
const count=arr8.filter(num => num === target2).length;
console.log('Element count' +count);

//9. Check if array is sorted in ascending order
const arr9=[1,2,3,4,5];
let sorted= arr9.every((val, i, array) => i===0 || array[i-1] <=val);
console.log('Sorted array is ' +sorted)

//10. Merge two arrays into one
let array1=[1,2,3];
let array2=[4,5,6];
let merged=[...array1, ...array2];
console.log('Merged array: '+merged)

//11. Find the second largest element in array
function secondLargest(arr11) {
    let unique=[...new Set(arr11)].sort((a,b) => b-a);
    return unique.length>=2 ? unique[1]:null;
}
const arr11=[10,5,20,8,20]
console.log(secondLargest(arr11));

//12. Remove duplicates from array
function removeDuplicates(arr12) {
    return [...new Set(arr12)]
}
console.log(removeDuplicates([1,2,2,3,4,5,4]))

//13.Rotate the array to the right by one position
function rotateRight(arr13) {
    if (arr13.length===0) return arr13;
    let last=arr13.pop();
    arr13.unshift(last);
    return arr13;
}
console.log(rotateRight([1,2,3,4,5]));

//14.find the largest even number
function largestEven(arr14) {
    let evens=arr14.filter(num => num%2===0);
    return evens.length ? Math.max(...evens) : null;
}
console.log('Largest even' +largestEven([1,7,3,8,4]))

//15. Print all negative elements in an array
function negativeEle(arr15) {
    return arr15.filter(num => num<0);
}
console.log(negativeEle([5, -2, 0, -7, 9]));

//16. Rotate the array to the left by k positions
function rotateLeft(arr16,k) {
    let n=arr16.length;
    k=k%n;
    return arr16.slice(k).concat(arr16.slice(0,k));
}
console.log(rotateLeft([1,2,3,4,5,6], 2))

//17. find the k-th largest element in the array
function kLargest(arr17, k) {
    let sorted=[...arr17].sort((a,b) => b-a);
    return sorted[k-1] ?? null;
}
console.log(kLargest([3,2,1,5,6,4], 3))

//18.frequency of each element in the array
function frequency(arr18) {
    return arr18.reduce((freq, val) => {
        freq[val] = (freq[val] || 0) +1;
        return freq;
    }, {});
}
console.log(frequency([1,2,2,3,1,4,2]))

//19. missing number in a sequence of n natural numbers
function missing(arr19, n) {
    let exsum=(n*(n+1))/2;
    let acsum=arr19.reduce((sum, val) => sum+val, 0);
    return exsum-acsum;
}
console.log(missing([1,2,4,5], 5))

//20 pallindrome or not
function isPallindrome(arr20) {
    return arr20.join()=== [...arr20].reverse().join();
}
console.log(isPallindrome([1,2,3,2,1]))

//21 inetrsection of two arrays
function arrayIntersection(arr21, arr211) {
    return arr21.filter(item => arr211.includes(item));
}
console.log(arrayIntersection([1,2,3,4], [3,4,5,6]))

//22. union of 2 arrays
function arrayUnion(arr22, arr221) {
    return [...new Set([...arr22, ...arr221])];
}
console.log(arrayUnion([1,2,3], [4,5,6]))

//23. product of all elements in an array
function product(arr23) {
    return arr23.reduce((product, val) => product*val, 1);
}
console.log(product([1,2,3,4,5]));

//24. Replace all even numbers with -1 
function replaceEvens(arr24) {
    return arr24.map(num => num%2==0? -1:num);
}
console.log(replaceEvens([1,2,4,3,5,6,7]))

//25. Reverse only even numbers in array, others stay in place
function reverseEvens(arr25) {
    let evens=arr25.filter(n => n%2==0).reverse();
    let e=0;
    return arr25.map(n=> n%2==0? evens[e++] : n);
}
console.log(reverseEvens([2,4,8,1,3,5,7,10,6]))